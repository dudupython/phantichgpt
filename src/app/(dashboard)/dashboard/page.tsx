import { redirect } from "next/navigation"
// import { db } from "@/lib/db"
import { currentUser as getCurrentUser } from '@clerk/nextjs';
import type { User } from "@clerk/nextjs/api";

import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import RhfWithZod from '@/components/myComponent/rhf-zod'
import SimpleForm from '@/components/myComponent/simple-form'
import LinkedinBio from '@/components/myComponent/linkedin-bio'


export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  // const user = await getCurrentUser()
  const user: User | null = await getCurrentUser();
//   if (!user) {
//     redirect(authOptions?.pages?.signIn || "/login")
//   }

//   const posts = await db.post.findMany({
//     where: {
//       authorId: user.id,
//     },
//     select: {
//       id: true,
//       title: true,
//       published: true,
//       createdAt: true,
//     },
//     orderBy: {
//       updatedAt: "desc",
//     },
//   })
const reptiles = ["alligator", "snake", "lizard"];
  return (
    <DashboardShell>
      {/* <DashboardHeader heading="Posts" text="Create and manage posts.">
      </DashboardHeader> */}
      <div className="text-center">
      <LinkedinBio />
        {/* {user?.firstName} {user?.lastName} {user?.imageUrl} 
        {user ? (<h1>xyz</h1>) : (<h1>???</h1>)}
        
        
        {user ? (
        user.emailAddresses.map((email) => (
          <div key={email.id} className="flex gap-2 mb-1">
            {email.emailAddress}
            {user.primaryEmailAddressId === email.id && (
              <span className="text-xs bg-primary-50 text-primary-700 rounded-2xl px-2 font-medium pt-[2px]">
                Primary
              </span>
            )} 
            </div>
          ))
          ) : (<h1>ÁDF</h1>) } */}

        {/* {user? ( user.emailAddresses.map((email) => <li>{email.emailAddress}</li>)) : ((<h1>ÁDF</h1>)) */}

       
      </div>

    
    </DashboardShell>
  )
}
