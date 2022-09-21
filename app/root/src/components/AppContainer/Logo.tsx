import { Flex, Heading, useColorModeValue, Tag } from "@chakra-ui/react";

export default () => {
  const fontColor = useColorModeValue("gray.700", "white");

  return (
    <Flex align="center" justify="space-between" >
      <Heading as="h4" size="md" color={fontColor} >
        Moyu Chakra
       
      </Heading>
      <Tag colorScheme="blue" >v0.0.1</Tag>
    </Flex>
  );
};
