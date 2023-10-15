import '@/styles/globals.css'
import Link from "next/link"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils"

import { marketingConfig } from '@/config/marketing'
import { Button, buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

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
      <body className={inter.className}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-violet-100 via-teal-50 to-amber-100">
        
        <header className="container z-40 bg-transparent">
          <div className="flex h-20 items-center justify-between py-6">
            <MainNav items={marketingConfig.mainNav} />
            <nav>
              {/* <Link href="/sign-in" className={cn(buttonVariants({ size: "lg" }))}>
              Login
            </Link> */}

          
            <SignedIn>
            <Link href="/dashboard" >
            <Button>
              Dashboard
              </Button>
            </Link>
            
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Button>
                <SignInButton />
              </Button>
            </SignedOut>

            </nav>
          </div>
        </header>

        {children}
      </div>
      </body>
    </html>
    </ClerkProvider>

  )
}
