
import { notFound } from "next/navigation"

import { dashboardConfig } from "@/config/dashboard"
// import { getCurrentUser } from "@/lib/session"
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
// import { useUser } from "@clerk/nextjs"; //client

import { MainNav } from "@/components/main-nav"
import { DashboardNav } from "@/components/nav"
import { SiteFooter } from "@/components/site-footer"
import { UserAccountNav } from "@/components/user-account-nav-clerk"
import { getUserLimitCount } from "@/lib/user-limit";
// import { UserAccount } from "@/components/user-account"
import CountLimit from "@/components/myComponent/CountLimit"

    
interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  // const user = await getCurrentUser()
  // const user: User | null = await currentUser();
  // const { isSignedIn, user, isLoaded } = useUser();

  // if (!user) {
  //   return notFound()
  // }
  //apiLimitCount={apiLimitCount} 
  const apiLimitCount = await getUserLimitCount();
  
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mobileNav
            // mainNav
            } />
          {/* <UserAccount /> */}
          <div className='flex items-center space-x-4'>
            
            <CountLimit apiLimitCount={apiLimitCount} /> 
            <UserAccountNav
              // user={{
              //   name: user.firstName,
              //   image: user.imageUrl,
              //   email: user.emailAddresses.map((email) => {email.emailAddress}), //primaryEmailAddress 
                
              // }}
            />
          
          </div>
        </div>
        
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav
          } />
        </aside>
        <main className="flex w-full flex-1 flex-col">
          {children}
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  )
}
