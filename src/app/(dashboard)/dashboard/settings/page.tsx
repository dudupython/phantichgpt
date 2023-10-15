import { redirect } from "next/navigation"

// import { authOptions } from "@/lib/auth"
// import { getCurrentUser } from "@/lib/session"
// import { currentUser as getCurrentUser } from '@clerk/nextjs';
import { auth, clerkClient } from "@clerk/nextjs";

import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import { UserNameForm } from "@/components/user-name-form"

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
}

export default async function SettingsPage() {
  // const user = await getCurrentUser()

  // if (!user) {
  //   redirect(authOptions?.pages?.signIn || "/login")
  // }

  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }
  const user = await clerkClient.users.getUser(userId);

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <UserNameForm user={{ id: user.id, name: user.firstName || "" }} />
      </div>
    </DashboardShell>
  )
}
