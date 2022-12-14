import React from "react";
import {
  Box,
  Divider,
  Flex,
  Kbd,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import SpotlightResultItem from './Item'

import { IconSearch } from "@tabler/icons";

export interface SpotlightModalInstance {
  onOpen?: () => void;
}

const SpotlightModal = React.forwardRef<SpotlightModalInstance>((_, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useImperativeHandle(ref, () => ({
    onOpen,
  }));

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" >
      <ModalOverlay />
      <ModalContent >
        <ModalBody px={4}  >
          <Flex flexDirection="column" >
            <Flex h="50px" alignItems="center" gap="12px" >
              <IconSearch />
              <Input flex={1} variant="unstyled"  placeholder="查询弹窗" />
              <Box><Kbd>SHIFT</Kbd> + <Kbd>L</Kbd></Box>
            </Flex>
            <VStack flex={1} maxW="60vh" pb={4} display="none" >
            <Divider/>  
              <SpotlightResultItem/>
            </VStack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});

export default SpotlightModal;
