import ChatFooter from "@/components/chat/footer"
import ChatInput from "@/components/chat/input"
import { BasicChatMessage } from "@/interface/chat"
import ChatMessage from "@/components/chat/message"
import { DEFAULT_CHAT_MESSAGE } from "@/settings/chat"

export default function Chat() {
  const messages: BasicChatMessage[] = [DEFAULT_CHAT_MESSAGE]

  return (
    <div
      className={
        "container grow flex flex-col gap-2 py-4 md:py-8 items-center bg-green-300"
      }
    >
      {messages.map((message) => (
        <ChatMessage message={message} key={message.id} />
      ))}

      {/* 撑满 */}
      <div className={"grow"} />

      <ChatInput />

      <ChatFooter />
    </div>
  )
}
