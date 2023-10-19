'use client'
import Link from "next/link"
// import { User } from "next-auth"
// import { signOut } from "next-auth/react"
// import { currentUser } from "@clerk/nextjs";
// import type { User } from "@clerk/nextjs/api";
import { useUser } from "@clerk/nextjs";

import { useClerk } from "@clerk/clerk-react";
// import { useUser } from "@clerk/nextjs";
// import { UserProfile } from "@clerk/nextjs";

import { useRouter } from 'next/navigation'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserAvatar } from "@/components/user-avatar"

// interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
//   user: Pick<User, "name" | "image" | "email">
// }

export function UserAccountNav() { //UserAccountNavProps
  const { signOut } = useClerk();
  const router = useRouter()
  const { isSignedIn, user, isLoaded } = useUser();
  
  if (!isLoaded) {
    return null;
  }
  if (isSignedIn) {


  return (
    <DropdownMenu>
      <DropdownMenuTrigger> 
        <UserAvatar
          user={{ name: user.fullName || null, image: user.imageUrl || null }}
          className="h-8 w-8"
        /> 
        
       
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.fullName && <p className="font-medium">{user.fullName}</p>}
            {/* {user.primaryEmailAddress && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.primaryEmailAddress}
              </p>
            )} */}
          </div>
        </div>
      
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/billing">Billing</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/settings">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
       
        <DropdownMenuItem>
        <button onClick={() => signOut(() => router.push("/"))}>
      Sign out
    </button></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
return <div>Not signed in</div>;
}
