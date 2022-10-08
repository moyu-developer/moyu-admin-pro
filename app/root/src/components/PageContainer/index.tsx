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

  return (
    <Box w="full" h="full" {...boxProps}>
      <Grid gridTemplateRows={"auto 1fr"} h="full">
        <Flex pb={4} justifyContent="space-between" alignItems="center">
          <VStack alignItems="flex-start" spacing={1}>
            <Text color={color} fontWeight="medium" fontSize="2xl">
              {title}
            </Text>
            <Text color={color} mt={1}>
              <Breadcrumb>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Docs</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
                </BreadcrumbItem>
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
