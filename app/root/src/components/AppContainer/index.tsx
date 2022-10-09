import * as React from "react";
import {
  Flex,
  Box,
  Divider,
  Container,
  useToast,
  ToastId
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

const AppContainer: React.FunctionComponent<AppContainerProps> = (  ) => {
  const { bg, color, active } = useThemeModeStyle()
  const toast = useToast()
  const toastRef = React.useRef<ToastId>()

  React.useEffect(() => {
  }, [])

  return (
    <Flex maxW="full" bg={active} h="100vh" color={color} >
      <Box maxW="300px" boxShadow="sm" py={6} bg={bg}>
        <Flex flexDirection="column" h="100%" w="full" alignItems="flex-start">
          <Box h={30} w="full" px={4} >
            <Logo />
          </Box>
          <Box flex={1} pt={6} w="full" overflowY="auto" px={4} >
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
      <Container h="full"  p={4}   maxW="full" >
        <Outlet/>
      </Container>
    </Flex>
  );
};

export default AppContainer;
