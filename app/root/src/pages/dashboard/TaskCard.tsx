import Card from "@/components/Card"
import { BoxProps, VStack, Checkbox, Box, Flex } from "@chakra-ui/react"

const TaskCard = (props: BoxProps) => {
  return (
    <Card title="任务列表" {...props} >
      <Flex flexDirection="column" h="170px">
      <Checkbox defaultChecked>Checkbox</Checkbox>
      <Checkbox defaultChecked>Checkbox</Checkbox>

      <Checkbox defaultChecked>Checkbox</Checkbox>
      <Checkbox defaultChecked>Checkbox</Checkbox>
      <Checkbox defaultChecked>Checkbox</Checkbox>
      <Checkbox defaultChecked>Checkbox</Checkbox>

      </Flex>
    </Card>
  )
}

export default TaskCard