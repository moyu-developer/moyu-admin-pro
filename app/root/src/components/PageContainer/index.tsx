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
} from "@chakra-ui/react";
import SpinnerContainer from "@/components/SpinnerContainer";
import { ReactNode } from "react";
import useThemeModeStyle from "@/hooks/useThemeModeStyle";

export interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = (props) => {
  const { color, bg } = useThemeModeStyle();

  return (
    <Box w="full" h="full">
      <Grid gridTemplateRows={"85px 1fr"} h="full">
        <Flex justifyContent="space-between" alignItems="center">
          <VStack alignItems="flex-start" spacing={1}>
            <Text color={color} fontWeight="medium" fontSize="3xl" mt={1}>
              仪表盘
            </Text>
            <Text color={color} mt={1}>
              不要错过重要的信息
            </Text>
          </VStack>
          <HStack>
            <Button>操作1</Button>
            <Button colorScheme="blue">操作2</Button>
          </HStack>
        </Flex>
        <Box h="100%" boxShadow={2} overflow="auto">
          {props.children}
        </Box>
      </Grid>
    </Box>
  );
};

export default PageContainer;
