import { Asset } from "next/dist/compiled/@next/font/dist/google"
import { Assets } from "@/utils/assets"
import Image from "next/image"

export default function Navbar() {
  return (
    <div className={"w-full h-12 bg-cyan-300 flex items-center px-4 "}>
      <Image src={Assets.logo} alt={"logo"} width={32} height={32} />
      <p className={"text-md font-medium"}>AI医生</p>
    </div>
  )
}
