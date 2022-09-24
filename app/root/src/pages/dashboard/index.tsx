import Card from "@/components/Card";
import PageContainer from "@/components/PageContainer";
import { Box, Flex, Grid, GridItem, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import BaseStarCard from "./BaseStarCard";
import ChartLine from './ChartLine'
import FastEntryCard from "./FastEntryCard";
import NoticeCard from './NoticeCard'
import VersionInfo from './VersionInfo'

const stats = [
  { label: "Total Subscribers", value: "71,887" },
  { label: "Avg. Open Rate", value: "56.87%" },
  { label: "Avg. Click Rate", value: "12.87%" },
  { label: "Avg. Click Rate", value: "12.87%" },
];

export default () => {
  return (
    <PageContainer>
      <Box
        mb={4}
        h="350px"
        w="full"
        as="section"
        bg="white"
        borderRadius="lg"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <ChartLine/>
      </Box>
      <Box w="full" as="section" mb={4} >
        <SimpleGrid columns={{ base: 4, md: 2, sm: 1, lg: 4 }} gap={{ base: "5", md: "6" }}>
          {stats.map(({ label, value }) => (
            <BaseStarCard key={label} label={label} value={value} />
          ))}
        </SimpleGrid>
      </Box>
      <Grid templateColumns='repeat(4, 1fr)' gap={{ base: "5", md: "6" }} maxH="300px" >
        <GridItem w='100%'>
          <FastEntryCard/>
        </GridItem>
        <GridItem w='100%'>
          <VersionInfo/>
        </GridItem>
        <GridItem colSpan={2} w='100%'>
          <NoticeCard/>
        </GridItem>
      </Grid>
    </PageContainer>
  );
};
