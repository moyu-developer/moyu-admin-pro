import React from 'react'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from "@chakra-ui/react"

export interface SettingDrawerInstance {
  onOpen?: () => void
}

const SettingDrawer = React.forwardRef<SettingDrawerInstance>((_, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  React.useImperativeHandle(ref, () => ({
    onOpen
  }))

  return (
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>设置中心</DrawerHeader>

          <DrawerBody>
            111
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
})

export default SettingDrawer