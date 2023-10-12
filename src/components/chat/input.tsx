import { Textarea } from "../ui/textarea"
import { BsFillSendFill } from "react-icons/bs"

export default function ChatInput() {
  return (
    <div className={"relative w-full"}>
      <Textarea placeholder="请描述您的问题" />

      <BsFillSendFill
        className={"absolute right-4 top-0 bottom-0 my-auto w-6 h-6"}
      />
    </div>
  )
}
