import '@/styles/globals.css'
import Link from "next/link"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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

const inter = Inter({ subsets: ['latin'] })


let title = 'QrGPT - QR Code Generator';
let description = 'Generate your AI QR Code in seconds';
let url = 'https://www.qrgpt.io';
let ogimage = 'https://www.qrgpt.io/og-image.png';
let sitename = 'qrGPT.io';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
   
       <div className=" bg-gradient-to-br from-violet-100 via-teal-50 to-amber-100"> {/*h-screen w-full */}
        
        <header className="container z-40 bg-transparent">
          <div className="flex h-20 items-center justify-between py-6">
            <MainNav items={marketingConfig.mainNav} />
            <nav>
              {/* <Link href="/sign-in" className={cn(buttonVariants({ size: "lg" }))}>
              Login
            </Link> */}

<div className='flex items-stretch gap-2'>
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
              <Button>
               <SignInButton />
              </Button>
            </SignedOut>
</div>
            </nav>
          </div>
        </header>

        {children}
        <SiteFooter className="border-t bg-transparent" />
      </div>
      

            </>
  )
}
