import { Text, CloseButton, Container, Flex, HStack, VStack, Icon, Center, Button } from "@chakra-ui/react"
import { IconCookie } from '@tabler/icons'

const Banners = () => {
  return (
    <Container color="white"  maxW="7xl" boxShadow="md" borderRadius="md" bg="blue.600" p={3} >
      <HStack >
        <Center boxSize="14" bg="blue.500" borderRadius="md" >
          <Icon as={IconCookie} color="white" fontSize="24px" />
        </Center>
        <VStack flex={1} alignItems="flex-start" justifyContent="center" >
          <Text >我们使用我们自己的和第三方的 cookie 来个性化内容。</Text>
          <Text >阅读我们的Cookie 政策</Text>
        </VStack>
        <HStack>
        <Button colorScheme='blue' >
          Button
        </Button>
          <Button colorScheme="red" >拒绝</Button>
          <CloseButton/>
        </HStack>
      </HStack>
    </Container>
  )
}

export default Banners