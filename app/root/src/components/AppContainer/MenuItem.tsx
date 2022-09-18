import { Flex, Button, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { IconHome2, TablerIcon } from "@tabler/icons";
import useThemeModeStyle from "@/hooks/useThemeModeStyle";

export interface MenuItemProps {
  name: string;
  icon: TablerIcon;
  isActive?: boolean;
}

const MenuItem = (props: MenuItemProps) => {
  const { color, bg, active } = useThemeModeStyle();

  const activeBg = props.isActive ? active : bg;

  return (
    <Flex
      as={Button}
      justifyContent="flex-start"
      alignItems="center"
      w="full"
      bg={activeBg}
      color="gray.500"
      _hover={{ bg: active }}
      overflow="hidden"
    >
      <Icon as={props?.icon} fontSize="2xl" />
      <Text fontSize="md" ml={2} color={color} fontWeight="normal">
        {props.name}
      </Text>
    </Flex>
  );
};

export default MenuItem;
