import { theme } from "@/theme"
import { ChakraProvider } from "@chakra-ui/react"

type Props = {
  children: React.ReactNode
}



const Providers = (props: Props) => {
  return (
      <ChakraProvider theme={theme}>{props.children}</ChakraProvider>
  )
}

export default Providers
