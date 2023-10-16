import clsx from "clsx"
import RootLayout from "@/layout/root"

export default function Home() {
  return (
    <RootLayout>
      <main
        className={clsx(
          "w-screen h-screen flex flex-col items-center justify-center ",
        )}
      >
        Hello, welcome the best frontend world.
      </main>
    </RootLayout>
  )
}
