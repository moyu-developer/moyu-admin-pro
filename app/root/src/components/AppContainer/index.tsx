import * as React from "react";
import {
  Flex,
  Box,
  useColorModeValue,
  Divider,
  Container,
} from "@chakra-ui/react";
import Navbar from "./NavBar";
import UserProfile from "./UserProfile";
import Profile from './Profile'
import Logo from "./Logo";
import ToolBar from "./ToolBar";
import useThemeModeStyle from "@/hooks/useThemeModeStyle";
import { Outlet } from "@/.umi/exports";
import Banners from '../Banners'

export interface AppContainerProps {
  children?: React.ReactNode
}

const AppContainer: React.FunctionComponent<AppContainerProps> = (props) => {
  const { bg, color } = useThemeModeStyle()

  return (
    <Flex maxW="full" bg="gray.50" h="100vh" color={color} >
      {/* <Banners/> */}
      <Box maxW="300px" boxShadow="sm" py={6} bg={bg}>
        <Flex flexDirection="column" h="100%" w="full" alignItems="flex-start">
          <Box h={30} w="full" px={4} >
            <Logo />
          </Box>
          <Box flex={1} pt={6} w="full" overflowY="auto" px={6} >
            <Navbar />
            <Profile/>
          </Box>
          <Box h="auto" w="full" px={4} >
            <Divider mb={4} mt={4} />
            <UserProfile />
            <ToolBar/>
          </Box>
        </Flex>
      </Box>
      <Container h="full" maxW="7xl" p={4} >
        <Outlet/>
      </Container>
    </Flex>
  );
};

export default AppContainer;
