import { redirect } from "next/navigation"
// import { auth, clerkClient } from "@clerk/nextjs";
import { DashboardShell } from "@/components/shell"
import Body from '@/components/caption/caption';


export const metadata = {
  title: "Caption",
  description: "Manage Caption",
}

export default function CaptionPage () {


  //doc
  // const { userId } = auth();

  // if (!userId) {
  //   redirect("/");
  // }
  // const user = await clerkClient.users.getUser(userId);
 
  return (
    <DashboardShell>
      <Body />
    </DashboardShell>
  )
}
