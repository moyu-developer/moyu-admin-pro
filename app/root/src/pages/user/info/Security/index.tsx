import {
  Box, VStack,
} from "@chakra-ui/react";
import SshKey from './SshKey'
import DeleteAccount from './DeleteAccount'
import Certification from './Certification'

const Security = () => {
  return (
    <VStack spacing={4} w="full" >
      <SshKey/>
      <Certification/>
      <DeleteAccount/>
    </VStack>
  );
};

export default Security;
