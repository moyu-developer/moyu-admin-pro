import {
  Container,
  Heading,
  Flex,
  SimpleGrid,
  VStack,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import SwitchColorMode from "@/components/SwitchColorMode";
import LoginForm from "./LoginForm";


export default () => {
  
  const bgGradient = useColorModeValue("linear(to-r, blue.600 50%, white 50%)", "linear(to-r, blue.600 50%, gray.700 50%)")

  return (
    <Container
      maxW="100%"
      marginInline="auto"
      bgGradient={bgGradient}
      height="100vh"
      centerContent
    >
      <SimpleGrid columns={2} width="100%" maxW="8xl" height="100%">
        <Flex alignItems="center" pl={8} pr={8} justifyContent="flex-start">
          <VStack color="whitesmoke" align="flex-start" spacing="4">
            <Heading as="h2" size="2xl"  maxW="lg">
              Everything seems to be going well
            </Heading>
            <Text maxW="md" mt={6}>
              Create an account and discover the worlds' best UI component
              framework.
            </Text>
          </VStack>
        </Flex>
        <Flex alignItems="center" justifyContent="center" position="relative" >
          <SwitchColorMode size="lg" fontSize="3xl" aria-label="Home-Switch-Color-Mode" position="absolute" top="20px" right="20px" />
          <LoginForm />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};
