import PageContainer from "@/components/PageContainer";
import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import BaseStarCard from "./BaseStarCard";

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
        p={4}
        mb={4}
        h="200px"
        w="full"
        as="section"
        bg="white"
        borderRadius="lg"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        11
      </Box>
      <Box w="full" as="section">
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: "5", md: "6" }}>
          {stats.map(({ label, value }) => (
            <BaseStarCard key={label} label={label} value={value} />
          ))}
        </SimpleGrid>
      </Box>
    </PageContainer>
  );
};
