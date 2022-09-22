import {
  Flex,
  Heading,
  useColorModeValue,
  Tag,
  Image,
  HStack,
} from "@chakra-ui/react";

export default () => {
  const fontColor = useColorModeValue("gray.700", "white");

  return (
    <Flex align="center" justify="space-between">
      <HStack>
        <Image
          h="30px"
          w="30px"
          src="https://camo.githubusercontent.com/679ae80d9e0c25ef8f33e2ec1c069d36973ec6907222e9ae96ff013443d97452/68747470733a2f2f73322e6c6f6c692e6e65742f323032322f30332f31362f6636416254376e4768384f517439792e706e67"
        />

        <Heading as="h4" size="md" color={fontColor}>
          Moyu Chakra
        </Heading>
      </HStack>
      <Tag colorScheme="blue">v0.0.1</Tag>
    </Flex>
  );
};
