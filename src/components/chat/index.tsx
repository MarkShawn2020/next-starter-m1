import ChatFooter from "@/components/chat/footer"
import ChatInput from "@/components/chat/input"
import { BasicChatMessage } from "@/interface/chat"
import ChatMessage from "@/components/chat/message"
import { DEFAULT_CHAT_MESSAGE } from "@/settings/chat"
import { api } from "@/utils/api"
import { useConversationId } from "@/hooks/use-bear-store"

export default function Chat() {
  const { conversationId } = useConversationId()
  const { data: messages = [] } = api.chatMessage.list.useQuery({
    conversationId,
  })

  return (
    <div
      className={
        "container h-full overflow-hidden flex flex-col gap-2 pt-4 md:pt-8 items-center bg-green-300"
      }
    >
      <div className={"flex flex-col grow overflow-auto gap-2"}>
        {[DEFAULT_CHAT_MESSAGE, ...messages].map((message) => (
          <ChatMessage message={message} key={message.id} />
        ))}
      </div>

      {/* 撑满 */}
      <div className={"grow"} />

      <ChatInput />

      <ChatFooter />
    </div>
  )
}
