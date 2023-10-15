import { redirect } from "next/navigation"
// import { auth, clerkClient } from "@clerk/nextjs";
import { DashboardShell } from "@/components/shell"
import Body from '@/components/qr/Body';


export const metadata = {
  title: "Qr code",
  description: "Manage Qr code",
}

export default function QrPage () {


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
