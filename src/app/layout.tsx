import '@/styles/globals.css'
import Link from "next/link"

import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import { cn } from "@/lib/utils"

import { marketingConfig } from '@/config/marketing'
import { Button, buttonVariants } from "@/components/ui/button"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
// import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"


import { MainNav } from "@/components/main-nav"
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// const inter = Inter({ subsets: ['latin'] })

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = localFont({
  src: "../styles/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider  appearance={{
      variables: { colorPrimary: "transparent" },
      elements: {
        formButtonPrimary:
          "bg-black border border-black border-solid hover:bg-white hover:text-black",
        socialButtonsBlockButton:
          "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
        socialButtonsBlockButtonText: "font-semibold",
        formButtonReset:
          "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
        membersPageInviteButton:
          "bg-black border border-black border-solid hover:bg-white hover:text-black",
        card: "bg-[#fafafa]",
      },
    }}>
    <html lang="en">
    <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
      {/* <body className={inter.className}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-violet-100 via-teal-50 to-amber-100">
         */}
      

        {children}
      {/* </div> */}
      </body>
    </html>
    </ClerkProvider>

  )
}
