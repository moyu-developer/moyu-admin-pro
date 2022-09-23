import {
  IconButton,
  Icon,
  useColorMode,
  IconButtonProps,
} from "@chakra-ui/react";
import useThemeModeStyle from "@/hooks/useThemeModeStyle";
import { IconMoon, IconSun } from "@tabler/icons";

export default (props: IconButtonProps) => {
  const { active } = useThemeModeStyle();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      _hover={{ bg: active }}
      icon={
        <Icon
          pt={1.5}
          fontSize={props.fontSize || "2xl"}
          fontWeight="medium"
          as={colorMode === "light" ? IconMoon : IconSun}
        />
      }
      variant="unstyled"
      onClick={toggleColorMode}
      {...props}
    />
  );
};
