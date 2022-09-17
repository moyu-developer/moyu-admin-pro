import * as React from "react";
import {
  Flex,
  Box,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import Navbar from "./NavBar";
import UserProfile from "./UserProfile";
import Profile from './Profile'
import Logo from "./Logo";
import ToolBar from "./ToolBar";
import useThemeModeStyle from "@/hooks/useThemeModeStyle";

const AppContainer = () => {
  const { bg, color } = useThemeModeStyle()

  return (
    <Flex color="white" bg="gray.50" h="100vh">
      <Box maxW="300" boxShadow="sm" color={color} p={[8, 6, 8, 6]} bg={bg}>
        <Flex flexDirection="column" h="100%" w="full" alignItems="flex-start">
          <Box h={30} w="full">
            <Logo />
          </Box>
          <Box flex={1} pt={6} w="full" overflowY="auto" >
            <Navbar />
            <Profile/>
          </Box>
          <Box h="auto" w="full" >
            <Divider mb={6} mt={4} />
            <UserProfile />
            <ToolBar/>
          </Box>
        </Flex>
      </Box>
      <Box flex="1" w="full">
        1111
      </Box>
    </Flex>
  );
};

export default AppContainer;
