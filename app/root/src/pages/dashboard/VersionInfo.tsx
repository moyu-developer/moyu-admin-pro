import Card from "@/components/Card"
import { Text, BoxProps, Flex, Heading, SimpleGrid, Tag, useColorModeValue, VStack, Box } from "@chakra-ui/react"

const VersionInfo = (props: BoxProps) => {
  return (
    <Card title="版本信息" {...props}  >
      <Box h="150px" >
      <Flex justifyContent="space-between" mt={4} >
        <Tag>version</Tag>
        <Text>v1.0.0</Text>
      </Flex>
      <Flex justifyContent="space-between" mt={4} >
        <Tag>env</Tag>
        <Text>beta</Text>
      </Flex>

      <Flex justifyContent="space-between" mt={4} >
        <Tag>version</Tag>
        <Text>v1.0.0</Text>
      </Flex>
      </Box>
    </Card>
  )
}

export default VersionInfo