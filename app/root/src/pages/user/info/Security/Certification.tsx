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
          <Flex justifyContent="flex-start" w="full" >
            <Text fontWeight="medium" >登录密码</Text>
            <Text color="gray.500" px={4} flex={1} >已设置。</Text>
            <Button justifySelf="flex-end" size="xs" colorScheme="red" >修改</Button>
          </Flex>
          <Flex>
            <Text fontWeight="medium" >手机号码</Text>
            <Text color="gray.500" px={4} flex={1} >已设置。密码至少6位字符，支持数字、字母和除空格外的特殊字符，且必须同时包含数字和大小写字母。</Text>
            <Button size="xs" colorScheme="red" >修改</Button>
          </Flex>
          <Flex>
            <Text fontWeight="medium" >绑定邮箱</Text>
            <Text color="gray.500" px={4} flex={1} >已设置。密码至少6位字符，支持数字、字母和除空格外的特殊字符，且必须同时包含数字和大小写字母。</Text>
            <Button size="xs" colorScheme="red" >修改</Button>
          </Flex>
          <Flex>
            <Text fontWeight="medium" >认证信息</Text>
            <Text color="gray.500" px={4} flex={1} >已设置。密码至少6位字符，支持数字、字母和除空格外的特殊字符，且必须同时包含数字和大小写字母。</Text>
            <Button size="xs" colorScheme="red" >修改</Button>
          </Flex>
          </VStack>
          
        </ShowElement>
      </Box>
    </Skeleton>
  );
};

export default Certification;
