import { Button } from "./ui/button"
import { GrAddCircle } from "react-icons/gr"

export default function Sidebar() {
  return (
    <div className={"w-48 p-4"}>
      <Button className={"w-full gap-2"}>
        {/*  todo: change icon color*/}
        <GrAddCircle color={"white"} />
        <span>新建对话</span>
      </Button>
    </div>
  )
}
