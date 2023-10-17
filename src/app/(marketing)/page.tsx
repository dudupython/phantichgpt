import Image from 'next/image'

import { Button, buttonVariants } from '@/components/ui/button'
import { ProfileForm } from '@/components/first-form'
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {

  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";


let heroImages = ['/1.png', '/6.png', '/3.png', '/4.png', '/5.png', '/2.png'];

export default function Home() {
  return (
    <>
    {/* <main className="flex min-h-screen flex-col items-center justify-between p-5">  */}
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl  bg-blue-100 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-blue-200 text-[#1d9bf0]"
            target="_blank"
          >
            Follow along on Twitter
          </Link>
         
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Photorealistic Renders for Interior Design
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Upload a picture of your project, discover prompt design styles,
            and enjoy photorealistic renders in just seconds!
          </p>
          <div className="space-x-4">
          <SignedOut>
              {/* <Button> */}
                <Link href="/sign-in" className={cn(buttonVariants({ size: "lg" }))}>
                Get Started
              </Link>
               {/* <SignInButton>Get Started</SignInButton> */}
              {/* </Button> */}
            </SignedOut>

            
            <Link
              href={siteConfig.links.replicate}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto">
      <div className="container grid sm:grid-cols-3 grid-cols-2 gap-4 pt-10"> 
            {heroImages.map((image, idx) => (
              <Image
                key={idx}
                alt="image"
                src={image}
                width={500}
                height={500}
                className="rounded-lg"
              />
            ))}
          </div>
          </div>

    

      {/* <ProfileForm  /> */}
    
      
    {/* </main> */}
    </>
  )
}
