import { useColorModeValue } from "@chakra-ui/react"

export default () => {

  const color = useColorModeValue("gray.700", "white")
  const bg = useColorModeValue("white", "gray.800")
  const active = useColorModeValue("gray.50", "gray.700")

  return {
    color,
    bg,
    active
  }
}