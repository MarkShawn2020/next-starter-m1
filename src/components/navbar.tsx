import { Assets } from "@/utils/assets"
import Image from "next/image"
import { Badge } from "@radix-ui/themes"
import { VscFeedback } from "react-icons/vsc"
import { AiOutlineMenuUnfold } from "react-icons/ai"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

export default function Navbar() {
  return (
    <div
      className={
        "w-full h-12 bg-cyan-300 flex items-center px-4 gap-2 justify-between"
      }
    >
      <div className={"flex items-center gap-2"}>
        <Image src={Assets.logo} alt={"logo"} width={32} height={32} />
        <p className={"text-md font-medium"}>AI医生</p>
        <Badge variant="outline" color="indigo" size="1">
          测试版
        </Badge>
      </div>

      <div className={"flex items-center gap-2 md:hidden"}>
        <VscFeedback />

        <Sheet>
          <SheetTrigger>
            <AiOutlineMenuUnfold />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
