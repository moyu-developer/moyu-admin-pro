import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from '@/constant/theme'

export function rootContainer(container: any) {
  return <ChakraProvider theme={customTheme} >{container}</ChakraProvider>;
}
