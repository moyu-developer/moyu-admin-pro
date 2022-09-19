import { Flex, Heading, useColorModeValue, Badge } from "@chakra-ui/react";

export default () => {
  const fontColor = useColorModeValue("gray.700", "white");

  return (
    <Flex align="center" justify="space-between" >
      <Heading as="h4" size="md" color={fontColor} >
        Moyu Chakra
       
      </Heading>
       <Badge ml="1" colorScheme="pink">
          v0.0.1-beta
        </Badge>
    </Flex>
  );
};
