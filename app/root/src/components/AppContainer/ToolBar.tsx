import {
  useColorModeValue,
  HStack,
  IconButton,
  Icon,
  useColorMode,
  MenuButton,
  MenuList,
  Menu,
  MenuItem,
} from "@chakra-ui/react";
import {
  IconSearch,
  IconSettings,
  IconSun,
  IconHelp,
  IconMoon,
  IconLanguage,
  IconBug
} from "@tabler/icons";

const ToolBar = () => {
  const active = useColorModeValue("gray.100", "gray.700");

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
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
      
      <Menu>
       <MenuButton
       as={IconButton}
        _hover={{ bg: active }}
        aria-label="icon-Language"
        icon={<Icon pt={1.5} fontSize="2xl" fontWeight="medium" as={IconLanguage} />}
        variant="unstyled"
        placement="right"
      />
        <MenuList>
          <MenuItem icon={<IconBug />} command='⌘T'>
            New Tab
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default ToolBar;
