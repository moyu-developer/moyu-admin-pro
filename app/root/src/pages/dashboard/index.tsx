import PageContainer from "@/components/PageContainer";
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
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
