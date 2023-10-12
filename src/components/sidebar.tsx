import { Button } from "./ui/button"
import { GrAddCircle } from "react-icons/gr"
import { api } from "@/utils/api"
import { useContext } from "react"

export default function Sidebar() {
  const utils = api.useContext()
  const { data: conversations } = api.conversation.list.useQuery()
  const { mutateAsync: asyncAddConversation } =
    api.conversation.add.useMutation({
      onSuccess: () => utils.conversation.list.invalidate(),
    })

  return (
    <div className={"w-48 p-4"}>
      <Button
        className={"w-full gap-2"}
        onClick={async () => {
          await asyncAddConversation({ userId: "test-user" })
        }}
      >
        {/*  todo: change icon color*/}
        <GrAddCircle color={"white"} />
        <span>新建对话</span>
      </Button>

      {conversations?.map((c) => <div key={c.id}>{c.id}</div>)}
    </div>
  )
}
