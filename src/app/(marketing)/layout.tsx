import '@/styles/globals.css'
import Link from "next/link"

import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { GeistSans as FontSans } from "geist/font";

import { cn } from "@/lib/utils"

import { marketingConfig } from '@/config/marketing'
import { Button, buttonVariants } from "@/components/ui/button"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
// import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"


import { MainNav } from "@/components/main-nav"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { SiteFooter } from '@/components/site-footer'

// const inter = Inter({ subsets: ['latin'] })

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
    
   
       <div className="bg-gradient-to-br dark:bg-slate-800 from-violet-100 via-teal-50 to-amber-100 "> {/*h-screen w-full */}
        
        <header className="container z-40 bg-transparent">
          <div className="flex h-20 items-center justify-between py-6">
            <MainNav items={marketingConfig.mainNav} />
            <nav>
              {/* <Link href="/sign-in" className={cn(buttonVariants({ size: "lg" }))}>
              Login
            </Link> */}

<div className='flex items-center space-x-4'>
            <SignedIn>
            <Link href="/dashboard" >
            <Button>
              Dashboard
              </Button>
            </Link>
            
            {/* <NavigationMenuLink></NavigationMenuLink> */}
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              {/* <Button>
               <SignInButton />
              </Button> */}
               <Link href="/dashboard" className={cn(buttonVariants({ size: "lg" }))}>
               Sign in
              </Link>
            </SignedOut>
</div>
            </nav>
          </div>
        </header>

        {children}
        <SiteFooter className="border-t bg-transparent" />
      </div>
      

            
  )
}
