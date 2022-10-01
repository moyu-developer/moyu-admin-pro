import useThemeModeStyle from "@/hooks/useThemeModeStyle"
import { Skeleton, Text, Heading, Button, Divider, Box, HStack } from "@chakra-ui/react"

const Certification = () => {

  const { active } = useThemeModeStyle()

  return (
    <Skeleton w="full" borderRadius="md" isLoaded>
      <Heading colorScheme="red" py={2} fontSize="md">
        实名认证
      </Heading>
      <Divider mb={4} />
      <Box p={4} w="full" bg={active} borderRadius="lg">
        11
      </Box>
    </Skeleton>
  )
}

export default Certification