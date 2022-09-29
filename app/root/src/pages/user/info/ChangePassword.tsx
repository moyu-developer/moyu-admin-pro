import { Box, FormControl, FormHelperText, FormLabel, Input, SimpleGrid } from "@chakra-ui/react"

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
    </Box>
  )
}

export default ChangePassword