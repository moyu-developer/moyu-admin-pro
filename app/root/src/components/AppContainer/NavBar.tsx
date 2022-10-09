import { Icon, VStack, Flex, Text, Button } from "@chakra-ui/react";
import {
  IconHome2,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  TablerIcon,
} from "@tabler/icons";

import MenuItem, { MenuItemProps } from "./MenuItem";

const items: MenuItemProps[] = [
  {
    name: "权限管理",
    icon: IconHome2,
  },

  {
    name: "IconDeviceDesktopAnalytics",
    icon: IconDeviceDesktopAnalytics,
  },

  {
    name: "IconFingerprint",
    icon: IconFingerprint,
  },
  {
    name: "IconCalendarStats",
    icon: IconCalendarStats,
  },
];

const NavBar = () => {
  return (
    <VStack spacing="1">
      <Text
        w="full"
        px={4}
        fontSize="sm"
        // color="gray.500"
        fontWeight={500}
        pb={1}
      >
        User
      </Text>
      {items.map((item) => (
        <MenuItem
          key={item.name}
          name={item.name}
          icon={item.icon}
          isActive={item.name === "IconCalendarStats"}
        />
      ))}
      <Text
        w="full"
        pt={8}
        px={4}
        fontSize="sm"
        // color="gray.500"
        fontWeight={500}
        pb={1}
      >
        系统应用
      </Text>
      {items.map((item) => (
        <MenuItem key={item.name} name={item.name} icon={item.icon} />
      ))}
    </VStack>
  );
};

export default NavBar;
