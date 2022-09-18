import { useColorModeValue, HStack, IconButton, Icon, useColorMode } from "@chakra-ui/react";
import { IconSearch, IconSettings, IconSun, IconHelp, IconMoon, IconLogout } from "@tabler/icons";

const ToolBar = () => {
  const active = useColorModeValue("gray.100", "gray.700");

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack  >
      <IconButton
        _hover={{ bg: active }}
        aria-label="Search"
        icon={
          <Icon pt={1.5} fontSize="2xl" fontWeight="medium" as={IconSearch} />
        }
        variant="unstyled"
      />
      <IconButton
        _hover={{ bg: active }}
        aria-label="Settings"
        icon={
          <Icon pt={1.5} fontSize="2xl" fontWeight="medium" as={IconSettings} />
        }
        variant="unstyled"
      />
      <IconButton
        _hover={{ bg: active }}
        aria-label="colorMode"
        icon={<Icon pt={1.5} fontSize="2xl" fontWeight="medium" as={colorMode === 'light' ? IconMoon : IconSun} />}
        variant="unstyled"
        onClick={toggleColorMode}
      />
      <IconButton
        _hover={{ bg: active }}
        aria-label="Help"
        icon={<Icon pt={1.5} fontSize="2xl" fontWeight="medium" as={IconHelp} />}
        variant="unstyled"
      />
      {/* <IconButton
        _hover={{ bg: active }}
        aria-label="Logout"
        color="red.400"
        icon={<Icon pt={1.5} fontSize="2xl" fontWeight="medium" as={IconLogout} />}
        variant="unstyled"
      /> */}
    </HStack>
  );
};

export default ToolBar;
