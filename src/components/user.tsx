import { api } from "@/utils/api"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Assets } from "@/utils/assets"
import { useUserId } from "@/hooks/use-bear-store"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useRef } from "react"
import { toast } from "sonner"

const UserLine = () => {
  const { userId, setUserId } = useUserId()

  const userIdRef = useRef<HTMLInputElement>(null)
  const { mutateAsync: asyncRegisterUser } = api.user.register.useMutation({
    onSuccess: (result) => {
      setUserId(result.id)
    },
  })

  if (userId) return <LocalUserLine userId={userId} />

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className={"w-full"}>登陆</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>登陆百方系统</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="username">请输入用户名（任意数字/字母）</Label>
              <Input
                ref={userIdRef}
                type="username"
                id="username"
                placeholder="username"
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction
            onClick={async (event) => {
              const targetUserId = userIdRef.current!.value
              if (!/^[0-9a-zA-Z_-]+$/.test(targetUserId))
                //   todo: 研究如何在 alert-dialog 之上 进行 toast
                return toast.error("请输入一个有效的用户名！", {})
              await asyncRegisterUser({ userId: targetUserId })
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

const LocalUserLine = ({ userId }: { userId: string }) => {
  const { data: user } = api.user.get.useQuery({ userId })

  if (!user) return "loading"

  return (
    <div className={"flex items-center gap-2 bg-cyan-500 -m-4 p-2"}>
      <Avatar>
        <AvatarImage src={user.avatar ?? Assets.user.src} />
      </Avatar>
      <span>{user.id}</span>
    </div>
  )
}

export default UserLine
