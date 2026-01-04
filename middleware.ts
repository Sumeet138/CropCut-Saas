import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

const isPublicRoute = createRouteMatcher(["/", "/sign-in", "/sign-up", "/home"])

const isPublicAPIRoute = createRouteMatcher(["/api/videos"])

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth()
  const currentUrl = new URL(req.url)
  const isAccessingAuth = currentUrl.pathname === "/sign-in" || currentUrl.pathname === "/sign-up"
  const isApiRequest = currentUrl.pathname.startsWith("/api")

  // Logged in user trying to access sign-in/sign-up pages -> redirect to home
  if (userId && isAccessingAuth) {
    return NextResponse.redirect(new URL("/home", req.url))
  }

  //not loged in user
  if (!userId) {
    //if not loged in user and trying to access protected route
    if (!isPublicRoute(req) && !isPublicAPIRoute(req)) {
      return NextResponse.redirect(new URL("/sign-in", req.url))
    }
    // if the request is for a protected API and the user is not logged in
    if (isApiRequest && !isPublicAPIRoute(req)) {
      return NextResponse.redirect(new URL("/sign-in", req.url))
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4|webm|ogg|mov|avi)).*)",
    "/(api|trpc)(.*)",
  ],
}
