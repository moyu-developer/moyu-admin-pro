import { Box, Flex, Text } from "@chakra-ui/react"
import { IconHash, IconCornerDownLeft } from "@tabler/icons"

const SpotlightResultItem = () => {
  return (
    <Flex bg="teal.500" alignItems="center" w="full" mt={3} px={4} py={2} borderRadius="md" color="white" >
      <IconHash/>
      <Box flex={1} px={3} >
        <Text>1</Text>
        <Text>2</Text>
      </Box>
      <IconCornerDownLeft/>
    </Flex>
  )
}

export default SpotlightResultItem