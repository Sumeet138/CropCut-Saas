import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

const isPublicRoute = createRouteMatcher(["/", "/sign-in", "/sign-up", "/home"])

const isPublicAPIRoute = createRouteMatcher(["/api/videos"])

export default clerkMiddleware((auth, req) => {
  const { userId } = auth()
  const currentUrl = new URL(req.url)
  const isAccesingDashBoard = currentUrl.pathname === "/home"
  const isApiRequest = currentUrl.pathname.startsWith("/api")

  //for Loged in user
  if (userId && isPublicRoute(req) && !isAccesingDashBoard) {
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
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
