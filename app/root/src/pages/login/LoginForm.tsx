import {
  Flex,
  FormControl,
  Checkbox,
  FormLabel,
  Input,
  Text,
  VStack,
  Button,
  Heading,
  Link,
  Divider,
  HStack
} from "@chakra-ui/react";

import {
  IconBrandFacebook,
  IconBrandGithub,
} from "@tabler/icons";

const LoginForm = () => {
  return (
    <VStack
      paddingInlineStart={8}
      paddingInlineEnd={8}
      pt={12}
      spacing="5"
    >
      <Heading fontSize={"4xl"}>Sign in to your account</Heading>
      <Text fontSize={"lg"} color={"gray.600"}>
        to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
      </Text>
      <FormControl isRequired>
        <FormLabel>账号</FormLabel>
        <Input type="number" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>密码</FormLabel>
        <Input type="password" />
      </FormControl>
      <Flex justifyContent="space-between" width="100%" mt={6}>
        <Checkbox size="md" defaultChecked>
          Checkbox
        </Checkbox>
        <Link>忘记密码?</Link>
      </Flex>
      <VStack spacing={2} align={"center"} maxW={"md"} w={"full"}>
        <Button
          w={"full"}
          colorScheme="blue"
        >
          Sign in
        </Button>
        {/* Facebook */}

        <HStack w="100%" pt={6} pb={4} >
          <Divider/>
          <Text as="p" whiteSpace="nowrap" fontSize="sm" >or sign up with</Text>
          <Divider />
        </HStack>
        <HStack 
          w={"full"} spacing="8" >
        <Button
          w={"full"}
          variant={"outline"}
          leftIcon={<IconBrandGithub />}
        >
          GITHUB
        </Button>

        {/* Google */}
        <Button
          w={"full"}
          colorScheme={"facebook"}
          leftIcon={<IconBrandFacebook />}
        >
          FACEBOOK
        </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default LoginForm;
