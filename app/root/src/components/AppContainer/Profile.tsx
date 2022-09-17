import useThemeModeStyle from "@/hooks/useThemeModeStyle";
import {
  VStack,
  Text,
  Progress,
  useColorModeValue,
  Flex,
  HStack,
} from "@chakra-ui/react";

const Footer = () => {
  const {active} = useThemeModeStyle()

  return (
    <Flex
      p={5}
      borderRadius="lg"
      bg={active}
      mt={4}
      flexDirection="column"
      justify="flex-start"
    >
      <Text fontSize="sm" fontWeight="medium">
        完善信息
      </Text>
      <Text mt={1} fontSize="sm" color="muted">
        填写更多关于你和你的人的信息。
      </Text>
      <Progress mt={4} mb={4} size="sm" value={80} borderRadius="base" />
      <HStack>
        <Text fontSize="sm">我要去</Text>
        <Text cursor="pointer" color="blue.500" fontSize="sm">
          更新
        </Text>
      </HStack>
    </Flex>
  );
};

export default Footer;
