import Card from "@/components/Card";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  Skeleton,
  Divider,
} from "@chakra-ui/react";
import Empty from "@/components/Empty";
import Show from "@/components/Show";
import useThemeModeStyle from "@/hooks/useThemeModeStyle";

const SshKey = () => {

  const { active } = useThemeModeStyle()

  return (
    <Skeleton w="full"  borderRadius="md" isLoaded>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading py={2} fontSize="md">
          SSH Key
        </Heading>
        <Button size="xs" variant="solid" colorScheme="blue">
          Add
        </Button>
      </Flex >
      <Divider mb={4} />
      <Show
        visible={true}
        empty={
          <Empty
            icon={null}
            message="暂无设备信息，您可以点击下方按钮进行添加"
            extraNode={
              <Button colorScheme="blue" size="sm">
                New SSH
              </Button>
            }
          />
        }
      >
        <SimpleGrid columns={2} spacing={4}>
          <Box p={4} w="full" bg={active} borderRadius="lg">
            <Heading fontSize="md">Macbook Pro14.1</Heading>
            <HStack fontSize="sm" my={2}>
              <Text>SSH Key: </Text>
              <Text color="gray">41256-20sdd-20123-dkara-lskrt-405981</Text>
            </HStack>
            <HStack>
              <Button size="xs" variant="solid" colorScheme="red">
                Delete
              </Button>
            </HStack>
          </Box>
          <Box p={4} w="full" bg={active} borderRadius="lg">
            <Heading fontSize="md">Macbook Pro14.1</Heading>
            <HStack fontSize="sm" my={2}>
              <Text>SSH Key: </Text>
              <Text color="gray">41256-20sdd-20123-dkara-lskrt-405981</Text>
            </HStack>
            <HStack>
              <Button size="xs" variant="solid" colorScheme="red">
                Delete
              </Button>
            </HStack>
          </Box>
        </SimpleGrid>
      </Show>
    </Skeleton>
  );
};

export default SshKey;
