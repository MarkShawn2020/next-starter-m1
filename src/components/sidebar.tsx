import { Button } from "./ui/button"
import { GrAddCircle } from "react-icons/gr"
import { api } from "@/utils/api"
import { BsChatText, BsPencilSquare, BsTrash3 } from "react-icons/bs"
import dynamic from "next/dynamic"

const UserLine = dynamic(() => import("./user"), { ssr: false })

export default function Sidebar() {
  const utils = api.useContext()

  const { data: conversations } = api.conversation.list.useQuery()
  const { mutateAsync: asyncAddConversation } =
    api.conversation.add.useMutation({
      onSuccess: () => utils.conversation.list.invalidate(),
    })

  return (
    <div className={"w-72 p-4 flex flex-col gap-2"}>
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

      {conversations?.map((c) => (
        <div
          key={c.id}
          className={"flex items-center gap-2 p-2 bg-white rounded"}
        >
          <BsChatText />
          <span className={"truncate"}>{c.id}</span>
          <BsPencilSquare />
          <BsTrash3 />
        </div>
      ))}

      <div className={"grow"} />

      <UserLine />
    </div>
  )
}
