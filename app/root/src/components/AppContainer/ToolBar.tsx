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
import { useRef } from "react";
import Settings, { SettingDrawerInstance } from "./Settings";

const ToolBar = () => {
  const settingDrawerInstance = useRef<SettingDrawerInstance>(null)
  const active = useColorModeValue("gray.100", "gray.700")

  const { colorMode, toggleColorMode } = useColorMode();

  console.log(settingDrawerInstance, 'settingDrawerInstance')

  return (
    <HStack>
      <Settings ref={settingDrawerInstance} />
      <IconButton
        _hover={{ bg: active }}
        aria-label="icon-Search"
        icon={
          <Icon pt={1.5} fontSize="2xl" fontWeight="medium" as={IconSearch} />
        }
        variant="unstyled"
      />
      <IconButton
        _hover={{ bg: active }}
        aria-label="icon-Settings"
        onClick={() => settingDrawerInstance.current?.onOpen()}
        icon={
          <Icon pt={1.5} fontSize="2xl" fontWeight="medium" as={IconSettings} />
        }
        variant="unstyled"
      />
      <IconButton
        _hover={{ bg: active }}
        aria-label="icon-colorMode"
        icon={
          <Icon
            pt={1.5}
            fontSize="2xl"
            fontWeight="medium"
            as={colorMode === "light" ? IconMoon : IconSun}
          />
        }
        variant="unstyled"
        onClick={toggleColorMode}
      />
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
