import Head from "next/head"
import Link from "next/link"

import { api } from "@/utils/api"
import Chat from "@/components/chat"
import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import clsx from "clsx"

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" })

  return (
    <>
      <Head>
        <title>M1</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={clsx(
          "w-screen min-h-screen flex flex-col items-center justify-center ",
          // "bg-gradient-to-b from-[#2e026d] to-[#15162c]"
        )}
      >
        {/*  竖向 */}
        <Navbar />

        {/*  横向 */}
        <div className={"flex w-full grow bg-cyan-400"}>
          <div className={"hidden md:flex"}>
            <Sidebar />
          </div>

          <div className={"grow flex flex-col"}>
            <Chat />
          </div>
        </div>
      </main>
    </>
  )
}
