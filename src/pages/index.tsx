import Chat from "@/components/chat"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import clsx from "clsx"
import RootLayout from "@/layout/root"

export default function Home() {
  return (
    <RootLayout>
      <main
        className={clsx(
          "w-screen h-screen flex flex-col items-center justify-center ",
          // "bg-gradient-to-b from-[#2e026d] to-[#15162c]"
        )}
      >
        {/*  竖向 */}
        <Navbar />

        {/*  横向 */}
        <div className={"flex w-full grow bg-cyan-400 overflow-hidden"}>
          <div className={"hidden md:flex"}>
            <Sidebar />
          </div>

          <Chat />
        </div>
      </main>
    </RootLayout>
  )
}
