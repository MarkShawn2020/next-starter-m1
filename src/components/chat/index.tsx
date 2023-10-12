import ChatFooter from "@/components/chat/footer"
import ChatInput from "@/components/chat/input"
import { BasicChatMessage } from "@/interface/chat"
import ChatMessage from "@/components/chat/message"

export default function Chat() {
  const messages: BasicChatMessage[] = []

  return (
    <div className={"container grow flex flex-col items-center bg-green-300"}>
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
