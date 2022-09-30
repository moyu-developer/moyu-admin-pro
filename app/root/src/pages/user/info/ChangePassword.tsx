import Card from "@/components/Card"
import { Box, FormControl, Text, FormLabel, Heading, HStack, Input, SimpleGrid, VStack, Button } from "@chakra-ui/react"

const ChangePassword = () => {
  return (
    <Box>
      <SimpleGrid columns={2} spacing={6} >
        <FormControl>
          <FormLabel>原始密码</FormLabel>
          <Input type='email' />
        </FormControl>
        <FormControl>
          <FormLabel>新密码</FormLabel>
          <Input type='email' />
        </FormControl>
        <FormControl>
          <FormLabel>确认新密码</FormLabel>
          <Input type='email' />
        </FormControl>
      </SimpleGrid>
      <VStack w="full" mt={6} >
        <Box p={6} w="full" bg="gray.50" borderRadius="md" >
          <Heading fontSize="md" >Macbook Pro14.1</Heading>
          <HStack fontSize="sm" >
            <Text>SSH Key: </Text>
            <Text>41256 Kamille Turnpike, East Sambury, New Hampshire, Kenya 85807</Text>
          </HStack>
          <HStack>
            <Button variant="solid" colorScheme="red" >Delete</Button>
          </HStack>
        </Box>
      </VStack>
    </Box>
  )
}

export default ChangePassword