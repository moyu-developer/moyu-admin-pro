import { ChakraProvider } from "@chakra-ui/react";

export function rootContainer(container: any) {
  return <ChakraProvider>{container}</ChakraProvider>;
}
