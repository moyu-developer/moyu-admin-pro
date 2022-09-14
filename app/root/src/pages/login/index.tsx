import { Container, Heading, Flex, SimpleGrid, VStack, Text, } from "@chakra-ui/react";
import LoginForm from './LoginForm'

export default () => {
  return (
    <Container
      maxW="100%"
      marginInline="auto"
      bgGradient="linear(to-r, blue.600 50%, white 50%)"
      height="100vh"
      centerContent
    >
      <SimpleGrid columns={2} width="100%" maxW="8xl" height="100%">
        <Flex alignItems="center" pl={8} pr={8} justifyContent="flex-start" >
          <VStack color="whitesmoke" align="flex-start" spacing="4" >
          <Heading as="h2" size="2xl">
            (xl) In love w
          </Heading>

          <Heading as="h2" size="2xl">
            (xl) In l
          </Heading>
          <Text maxW="md" mt={6} >Create an account and discover the worlds' best UI 
          component framework.</Text>
          </VStack>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <LoginForm/>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};
