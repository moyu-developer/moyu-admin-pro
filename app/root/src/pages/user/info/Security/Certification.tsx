import Empty from "@/components/Empty";
import useThemeModeStyle from "@/hooks/useThemeModeStyle";
import {
  Skeleton,
  Text,
  Heading,
  Button,
  Divider,
  Box,
  HStack,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Flex,
  List,
  ListIcon,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import ShowElement from '@/components/Show'

const Certification = () => {
  const { active } = useThemeModeStyle();

  return (
    <Skeleton w="full" borderRadius="md" isLoaded>
      <Heading colorScheme="red" py={2} fontSize="md">
        私密认证
      </Heading>
      <Divider mb={4} />
      <Box p={4} w="full" bg={active} borderRadius="lg">
        <ShowElement visible empty={<Empty/>} >
          <VStack spacing={4} >
          <Flex alignItems="baseline" justifyContent="flex-start" w="full" >
            <Text fontWeight="medium" >登录密码</Text>
            <Text fontSize="sm" color="gray.500" px={4} flex={1} >已设置。</Text>
            <Button justifySelf="flex-end" size="xs" colorScheme="red" >修改</Button>
          </Flex>
          <Flex alignItems="baseline" justifyContent="flex-start" w="full" >
            <Text fontWeight="medium" >登录密码</Text>
            <Text fontSize="sm" color="gray.500" px={4} flex={1} >已设置。</Text>
            <Button justifySelf="flex-end" size="xs" colorScheme="red" >修改</Button>
          </Flex>
          <Flex alignItems="baseline" justifyContent="flex-start" w="full" >
            <Text fontWeight="medium" >登录密码</Text>
            <Text fontSize="sm" color="gray.500" px={4} flex={1} >已设置。</Text>
            <Button justifySelf="flex-end" size="xs" colorScheme="red" >修改</Button>
          </Flex>
          <Flex alignItems="baseline" justifyContent="flex-start" w="full" >
            <Text fontWeight="medium" >登录密码</Text>
            <Text fontSize="sm" color="gray.500" px={4} flex={1} >已设置。</Text>
            <Button justifySelf="flex-end" size="xs" colorScheme="red" >修改</Button>
          </Flex>
          
          </VStack>
          
        </ShowElement>
      </Box>
    </Skeleton>
  );
};

export default Certification;
