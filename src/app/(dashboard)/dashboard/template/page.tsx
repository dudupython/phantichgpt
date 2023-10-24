import { redirect } from "next/navigation"
// import { db } from "@/lib/db"
import { currentUser as getCurrentUser } from '@clerk/nextjs';

import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import RhfWithZod from '@/components/myComponent/rhf-zod'
import SimpleForm from '@/components/myComponent/simple-form'
import OpenAiComponent from '@/components/myComponent/openai-component'
import AvatarUploadPage from '@/components/myComponent/my-upload'


export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

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

  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
      </DashboardHeader>
      {/* <AvatarUploadPage /> */}
      <div className="grid gap-8">
        {user?.firstName} {user?.lastName}
      </div>
      <OpenAiComponent />
      {/* <SimpleForm /> */}
      

      
      
    
    
    </DashboardShell>
  )
}
