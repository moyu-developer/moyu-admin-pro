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
  const { bg, color } = useThemeModeStyle()
  const toast = useToast()
  const toastRef = React.useRef<ToastId>()

  React.useEffect(() => {
    // toastRef.current = toast({
    //   position: 'bottom',
    //   duration: null,
    //   containerStyle: {
    //     width: '100%',
    //     maxWidth: '7xl'
    //   },
    //   render: () => <Banners/>
    // })
  }, [])

  return (
    <Flex maxW="full" bg="gray.50" h="100vh" color={color} >
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
      <Container h="full" maxW="8xl" p={4} pt={0} >
        <Outlet/>
      </Container>
    </Flex>
  );
};

export default AppContainer;
