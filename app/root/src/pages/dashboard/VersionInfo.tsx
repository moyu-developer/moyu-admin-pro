import Card from "@/components/Card"
import { Text, BoxProps, Flex, Heading, SimpleGrid, Tag, useColorModeValue, VStack } from "@chakra-ui/react"

const VersionInfo = (props: BoxProps) => {
  return (
    <Card title="版本信息" {...props}  >
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
    </Card>
  )
}

export default VersionInfo