import { type AppType } from "next/app"

import { api } from "@/utils/api"

import "@/styles/globals.css"
import "@radix-ui/themes/styles.css"
import { Theme, ThemePanel } from "@radix-ui/themes"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Theme>
      <Component {...pageProps} />

      <ThemePanel />
    </Theme>
  )
}

export default api.withTRPC(MyApp)
