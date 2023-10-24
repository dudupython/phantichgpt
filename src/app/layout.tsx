import '@/styles/globals.css'
// import Link from "next/link"
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"
import { cn } from "@/lib/utils"

// import { marketingConfig } from '@/config/marketing'
// import { Button, buttonVariants } from "@/components/ui/button"
// import { NavigationMenuLink } from "@/components/ui/navigation-menu"
// import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

// import { MainNav } from "@/components/main-nav"
import {
  ClerkProvider,
} from "@clerk/nextjs";

import { ThemeProvider } from "@/components/theme-provider"


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
    <ClerkProvider  >
    <html lang="en" suppressHydrationWarning>
    <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {/* <body className={inter.className}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-violet-100 via-teal-50 to-amber-100">
         */}
      

        {children}
      {/* </div> */}
      <Analytics />
      </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>

  )
}


// appearance={{
//   variables: { colorPrimary: "transparent" },
//   elements: {
//     formButtonPrimary:
//       "bg-black border border-black border-solid hover:bg-white hover:text-black",
//     socialButtonsBlockButton:
//       "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
//     socialButtonsBlockButtonText: "font-semibold",
//     formButtonReset:
//       "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
//     membersPageInviteButton:
//       "bg-black border border-black border-solid hover:bg-white hover:text-black",
//     card: "bg-[#fafafa]",
//   },
// }}