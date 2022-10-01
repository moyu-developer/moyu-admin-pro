import { Skeleton, Text, Heading, Button, Divider } from "@chakra-ui/react"

const DeleteAccount = () => {
  return (
    <Skeleton w="full" borderRadius="md" isLoaded>
      <Heading colorScheme="red" py={2} fontSize="md">
        删除帐户
      </Heading>
      <Divider mb={4} />
      <Text>
        您的帐户目前是这些组织的所有者： moyu-developer
      </Text>
      <Text>
        您必须先 删除自己活退出所在的组织，然后才能删除您的用户。
      </Text>
      <Button mt={2} variant="solid" size="sm" colorScheme="red" >
        删除账户
      </Button>
    </Skeleton>
  )
}

export default DeleteAccount