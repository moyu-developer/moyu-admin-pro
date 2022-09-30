import Card from "@/components/Card";
import { Box, Button, Flex, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { Fragment } from "react";

const Security = () => {
  return (
    <Fragment>
      <Flex alignItems="center" justifyContent="space-between" >
        <Heading py={2} fontSize="md" >SSH Key</Heading>
        <Button size="xs" variant="solid" colorScheme="blue">
            Add
          </Button>
      </Flex>
      <SimpleGrid columns={2} spacing={4}  >
      <Box p={4} w="full" bg="gray.50" borderRadius="lg">
        <Heading fontSize="md">Macbook Pro14.1</Heading>
        <HStack fontSize="sm" my={2}>
          <Text>SSH Key: </Text>
          <Text color="gray" >
            41256-20sdd-20123-dkara-lskrt-405981
          </Text>
        </HStack>
        <HStack>
          <Button size="xs" variant="solid" colorScheme="red">
            Delete
          </Button>
        </HStack>
      </Box>
      <Box p={4} w="full" bg="gray.50" borderRadius="lg">
        <Heading fontSize="md">Macbook Pro14.1</Heading>
        <HStack fontSize="sm" my={2}>
          <Text>SSH Key: </Text>
          <Text color="gray" >
            41256-20sdd-20123-dkara-lskrt-405981
          </Text>
        </HStack>
        <HStack>
          <Button size="xs" variant="solid" colorScheme="red">
            Delete
          </Button>
        </HStack>
      </Box>
      </SimpleGrid>
    </Fragment>
  );
};

export default Security;
