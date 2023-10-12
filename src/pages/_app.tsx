import { type AppType } from "next/app"

import { api } from "@/utils/api"

import "@/styles/globals.css"
import "@radix-ui/themes/styles.css"
import { Theme, ThemePanel } from "@radix-ui/themes"
import { Toaster } from "sonner"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Theme>
      <Component {...pageProps} />

      <ThemePanel defaultOpen={false} />

      <Toaster position={"top-right"} />
    </Theme>
  )
}

export default api.withTRPC(MyApp)
