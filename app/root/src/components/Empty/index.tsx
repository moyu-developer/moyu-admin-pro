import { Center, Icon, Text, VStack, StackProps, HStack, Button } from "@chakra-ui/react"
import { IconMoodEmpty } from '@tabler/icons'
import { ReactNode } from "react";

export interface EmptyProps extends StackProps {
  message?: string;
  icon?: any
  extraNode?: ReactNode
}

const Empty: React.FC<EmptyProps> = ({ message, icon, extraNode, ...props }) => {
  return (
    <VStack {...props} >
      <Center color="gray.600">
        {icon ? <Icon as={icon} fontSize="48px" /> : null}
      </Center>
      <Text>{message}</Text>
      <HStack>
        {extraNode}
      </HStack>
    </VStack>
  )
}

Empty.defaultProps = {
  icon: IconMoodEmpty,
  message: '暂无信息'
}

export default Empty