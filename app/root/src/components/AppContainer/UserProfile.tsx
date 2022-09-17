import { VStack, HStack, Avatar, Text } from "@chakra-ui/react"

const UserProfile = () => {
  return (
    <HStack>
      <Avatar boxSize="40px" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
      <VStack align="flex-start" spacing={0} w="full" >
        <Text fontSize="sm"fontWeight="medium">
          fanghua wang
        </Text>
        <Text fontSize="sm" >wangly19@163.com</Text>
      </VStack>
    </HStack>
  )
}

export default UserProfile