import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <SignIn 
      appearance={{
        layout: { socialButtonsPlacement: "bottom" },
        variables: {
          colorPrimary: "#f97316", 
          colorBackground: "#09090b",
          colorText: "#ffffff",
          colorTextSecondary: "#9ca3af",
          colorInputBackground: "#27272a",
          colorInputText: "#ffffff",
          borderRadius: "0.75rem",
        },
        elements: {
          card: "bg-[#09090b] border border-white/10 shadow-2xl",
          headerTitle: "text-white",
          headerSubtitle: "text-gray-400",
          socialButtonsBlockButton: "bg-white/5 border-white/10 hover:bg-white/10 text-white",
          socialButtonsBlockButtonText: "!text-white font-medium",
          formButtonPrimary: "bg-orange-600 hover:bg-orange-500 text-white !shadow-none",
          footerActionLink: "text-orange-500 hover:text-orange-400",
          formFieldLabel: "text-gray-300",
          formFieldInput: "bg-white/5 border-white/10 text-white focus:border-orange-500 ring-offset-black",
          dividerLine: "bg-white/10",
          dividerText: "text-gray-500",
          identityPreviewText: "text-gray-300",
          identityPreviewEditButton: "text-orange-500 hover:text-orange-400"
        }
      }}
    />
  )
}
