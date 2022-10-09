import {
  Text,
  Grid,
  Heading,
  VStack,
  Button,
  Container,
  Flex,
  Box,
  HStack,
  BoxProps,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  TabPanel,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Divider,
} from "@chakra-ui/react";
import SpinnerContainer from "@/components/SpinnerContainer";
import { Fragment, ReactNode } from "react";
import useThemeModeStyle from "@/hooks/useThemeModeStyle";

export interface PageContainerProps extends BoxProps {
  children: ReactNode;
  title?: string;
  description?: string;
  extraNode?: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  title,
  description,
  extraNode,
  ...boxProps
}) => {
  const { color } = useThemeModeStyle();

  if (!title) {
    return <Fragment>{children}</Fragment>;
  }

  const breadcrumb = window.location.pathname.split('/').filter(v => !!v)

  return (
    <Box w="full" h="full" {...boxProps}>
      <Grid gridTemplateRows={"auto auto 1fr"} h="full">
        <Flex pb={4} justifyContent="space-between" alignItems="center">
          <VStack alignItems="flex-start" spacing={1}>
            <Text color={color} fontWeight="medium" fontSize="xl">
              {title}
            </Text>
            <Text color={color} mt={1}>
              <Breadcrumb>
                {breadcrumb.map((v) => (
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">{v}</BreadcrumbLink>
                  </BreadcrumbItem>
                ))}
              </Breadcrumb>
            </Text>
          </VStack>
          <HStack>{extraNode}</HStack>
        </Flex>
        <Box h="100%" boxShadow={2} overflow="auto" >
          {children}
        </Box>
      </Grid>
    </Box>
  );
};

export default PageContainer;
