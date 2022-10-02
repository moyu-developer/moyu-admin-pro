import {
  useColorModeValue,
  HStack,
  IconButton,
  Icon,
  useColorMode,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import {
  IconSearch,
  IconSettings,
  IconSun,
  IconHelp,
  IconMoon,
  IconLanguage,
} from "@tabler/icons";
import { useEffect, useRef } from "react";
import Settings, { SettingDrawerInstance } from "./Settings";
import SpotlightModal, { SpotlightModalInstance } from "../Spotlight";
import SwitchColorMode from "../SwitchColorMode";
import { useKeyPress } from 'ahooks'

const ToolBar = () => {
  const settingDrawerInstance = useRef<SettingDrawerInstance>(null)
  const spotlightModalInstance = useRef<SettingDrawerInstance>(null)
  const active = useColorModeValue("gray.100", "gray.700")

  useKeyPress(['shift.l'], () => {
    spotlightModalInstance.current?.onOpen && spotlightModalInstance.current?.onOpen()
  });

  return (
    <HStack>
      <Settings ref={settingDrawerInstance} />
      <SpotlightModal ref={spotlightModalInstance} />
      <IconButton
        _hover={{ bg: active }}
        aria-label="icon-Search"
        onClick={() => spotlightModalInstance.current?.onOpen && spotlightModalInstance.current?.onOpen()}
        icon={
          <Icon pt={1.5} fontSize="2xl" fontWeight="medium" as={IconSearch} />
        }
        variant="unstyled"
      />
      <IconButton
        _hover={{ bg: active }}
        aria-label="icon-Settings"
        onClick={() =>  settingDrawerInstance.current?.onOpen && settingDrawerInstance.current?.onOpen()}
        icon={
          <Icon pt={1.5} fontSize="2xl" fontWeight="medium" as={IconSettings} />
        }
        variant="unstyled"
      />
      <SwitchColorMode aria-label="SideBar-Color-Mode" />
      <IconButton
        _hover={{ bg: active }}
        aria-label="icon-Help"
        icon={
          <Icon pt={1.5} fontSize="2xl" fontWeight="medium" as={IconHelp} />
        }
        variant="unstyled"
      />
      <Popover placement="top">
        <PopoverTrigger>
          <IconButton
            _hover={{ bg: active }}
            aria-label="icon-Help"
            icon={
              <Icon
                pt={1.5}
                fontSize="2xl"
                fontWeight="medium"
                as={IconLanguage}
              />
            }
            variant="unstyled"
          />
        </PopoverTrigger>
        <PopoverContent maxW="100px">
          <PopoverBody>简体中文</PopoverBody>
        </PopoverContent>
      </Popover>
    </HStack>
  );
};

export default ToolBar;
