import { api } from "@/utils/api"
import { Textarea } from "../ui/textarea"
import { BsFillSendFill } from "react-icons/bs"
import { useRef } from "react"
import { useConversationId, useUserId } from "@/hooks/use-bear-store"
import { toast } from "sonner"
import { getHotkeyHandler, useHotkeys } from "@mantine/hooks"

export default function ChatInput() {
  const utils = api.useContext()
  const { userId } = useUserId()
  let { conversationId, setConversationId } = useConversationId()

  const { mutateAsync: asyncAddConversation } =
    api.conversation.add.useMutation({})
  const { mutateAsync: asyncAddChatMessage } = api.chatMessage.add.useMutation({
    onSuccess: async (result) => {
      toast.message(`created message(id=${result.id})`)
      await utils.chatMessage.list.invalidate()
    },
  })
  const contentRef = useRef<HTMLTextAreaElement>(null)

  const onSubmit = async () => {
    if (!userId) return toast.error("请先登陆！")

    const content = contentRef.current!.value
    if (!content) return toast.error("请先输入点内容再发送吧！")

    // 初始化 conversationId
    if (!conversationId) {
      const result = await asyncAddConversation({ userId })
      conversationId = result.id
      setConversationId(result.id)
      toast.message(`created conversation(id=${conversationId})`)
    }

    await asyncAddChatMessage({
      content,
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
