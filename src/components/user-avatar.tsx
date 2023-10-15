import { User } from "@prisma/client"
import { AvatarProps } from "@radix-ui/react-avatar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Icons } from "@/components/icons"

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "image" | "email">
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Avatar {...props}>
      {user.image ? (
        <AvatarImage alt="Picture" src={user.image} />
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.email}</span>
          <Icons.user className="h-4 w-4" />
        </AvatarFallback>
      )}
    </Avatar>
  )
  // <Avatar>
  //   <AvatarImage src="https://github.com/shadcn.png" />
  //   <AvatarFallback>CN</AvatarFallback>
  // </Avatar>
  // )
}
