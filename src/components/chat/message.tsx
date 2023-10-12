import { Assets } from "@/utils/assets"
import { DEFAULT_PROMPTS } from "@/settings/chat"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Message } from ".prisma/client"

export default function ChatMessage({ message }: { message: Message }) {
  return (
    <div className={"w-full flex gap-2"}>
      <Avatar className={"rounded"}>
        <AvatarImage src={Assets.doctor.src} />
        <AvatarFallback>Doctor</AvatarFallback>
      </Avatar>

      <div
        className={"bg-white rounded p-2 md:p-4 flex flex-col gap-2 text-sm"}
      >
        <p>{message.content}</p>

        {message.role === "system" && (
          <div className={"flex flex-col gap-2"}>
            <b>您可以这样问我：</b>
            {DEFAULT_PROMPTS.map((prompt) => (
              <Button key={prompt} onClick={() => {}} size={"sm"}>
                {prompt}
              </Button>
            ))}
          </div>
        )}

        {/*    todo: user/assistant */}
      </div>
    </div>
  )
}
