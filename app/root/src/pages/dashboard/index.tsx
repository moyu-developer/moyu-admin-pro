import PageContainer from "@/components/PageContainer";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconRefresh } from "@tabler/icons";
import BaseStarCard from "./BaseStarCard";
import ChartLine from "./ChartLine";
import FastEntryCard from "./FastEntryCard";
import NoticeCard from "./NoticeCard";
import VersionInfo from "./VersionInfo";
import TaskCard from "./TaskCard";
import HeatChartCard from "./HeatChartCard";
import useThemeModeStyle from "@/hooks/useThemeModeStyle";

const stats = [
  { label: "Total Subscribers", value: "71,887" },
  { label: "Avg. Open Rate", value: "56.87%" },
  { label: "Avg. Click Rate", value: "12.87%" },
  { label: "Avg. Click Rate", value: "12.87%" },
];

export default () => {
  const { bg } = useThemeModeStyle();

  return (
    <PageContainer
      title="仪表盘"
      description="描述文案"
      extraNode={
        <Button
          colorScheme="teal"
          size="sm"
          variant="solid"
          leftIcon={<Icon as={IconRefresh} fontWeight="bold" fontSize="md" />}
        >
          同步数据
        </Button>
      }
    >
      <Box
        mb={4}
        h="350px"
        w="full"
        as="section"
        bg={bg}
        borderRadius="lg"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <ChartLine />
      </Box>
      <Box w="full" as="section" mb={4}>
        <SimpleGrid
          columns={{ base: 4, md: 2, sm: 1, lg: 4 }}
          gap={{ base: "4", md: "4" }}
        >
          {stats.map(({ label, value }) => (
            <BaseStarCard key={label} label={label} value={value} />
          ))}
        </SimpleGrid>
      </Box>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={{ base: "4", md: "4" }}
        mb={4}
      >
        <GridItem w="100%">
          <FastEntryCard />
        </GridItem>
        <GridItem w="100%">
          <VersionInfo />
        </GridItem>
        <GridItem colSpan={2} w="100%">
          <NoticeCard />
        </GridItem>
      </Grid>

      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={{ base: "4", md: "4" }}
        maxH="300px"
      >
        <GridItem w="100%">
          <TaskCard />
        </GridItem>
        <GridItem colSpan={3} w="100%">
          <HeatChartCard />
        </GridItem>
      </Grid>
    </PageContainer>
  );
};
