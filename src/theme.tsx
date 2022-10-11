import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
  disableTransitionOnChange: false
}

const fonts = {}

const colors = {}

const theme = extendTheme({
  colors,
  fonts,
  config,
})

export default theme