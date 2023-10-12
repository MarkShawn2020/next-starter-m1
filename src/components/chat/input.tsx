import { api } from "@/utils/api"
import { Textarea } from "../ui/textarea"
import { BsFillSendFill } from "react-icons/bs"
import { useRef } from "react"
import { useConversationId, useUserId } from "@/hooks/use-bear-store"
import { toast } from "sonner"
import { getHotkeyHandler, useHotkeys } from "@mantine/hooks"

export default function ChatInput() {
  const { userId } = useUserId()
  const { conversationId } = useConversationId()

  const { mutateAsync: asyncAddChatMessage } = api.chatMessage.add.useMutation()
  const contentRef = useRef<HTMLTextAreaElement>(null)

  const onSubmit = async () => {
    if (!userId) return toast.error("请先登陆！")

    await asyncAddChatMessage({
      content: contentRef.current!.value,
      role: "user",
      userId,
      conversationId,
    })
  }

  return (
    <div className={"relative w-full"}>
      <Textarea
        ref={contentRef}
        placeholder="请描述您的问题"
        onKeyDown={getHotkeyHandler([["Enter", onSubmit]])}
      />

      <BsFillSendFill
        onClick={onSubmit}
        className={"absolute right-4 top-0 bottom-0 my-auto w-6 h-6"}
      />
    </div>
  )
}
