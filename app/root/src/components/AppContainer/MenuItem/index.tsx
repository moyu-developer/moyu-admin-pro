import { Flex, Button, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { IconHome2, TablerIcon } from "@tabler/icons";
import useStyled from './styled'

export interface MenuItemProps {
  name: string;
  icon: TablerIcon;
  isActive?: boolean;
}

const MenuItem = (props: MenuItemProps) => {
  const { fontColor, bg, active } = useStyled()
  
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
    >
      <Icon as={props?.icon} fontSize="24" />
      <Text ml={2} color={fontColor} fontWeight={500}>
        {props.name}
      </Text>
    </Flex>
  );
};

export default MenuItem;
