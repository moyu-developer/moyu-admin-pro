import { Link } from 'umi'
import { Box, Container, Text, Heading, VStack, Center, Button } from '@chakra-ui/react'

const NotFound = () => (
  <Box as="section" bg="bg-surface">
    <Container maxW="7xl" py={{ base: '16', md: '24' }}>
      <VStack >
          <Heading pb={8} color="gray.500" fontSize="200px" >NotFound</Heading>
          <Heading fontFamily="Greycliff CF" >You have found a secret place.</Heading>
          <Text color="gray.400" maxW="500px" py={8} textAlign="center" >
            Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL.
          </Text>
        </VStack>
        <Center gap={4} >
          <Link to="/" >
            <Button colorScheme="blue" >返回首页</Button>
          </Link>
          <Button>回退</Button>
        </Center>
    </Container>
  </Box>
)

export default NotFound