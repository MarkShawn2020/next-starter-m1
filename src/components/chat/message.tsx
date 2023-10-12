import { BasicChatMessage } from "@/interface/chat"

export default function ChatMessage({
  message,
}: {
  message: BasicChatMessage
}) {
  return <div>{message.content}</div>
}
