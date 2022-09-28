import useThemeModeStyle from "@/hooks/useThemeModeStyle";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { IconSearch } from "@tabler/icons";

interface BaseStatCardProps {
  label: string;
  value: string;
}
const BaseStatCard = (props: BaseStatCardProps) => {
  const { label, value, ...boxProps } = props;

  const { bg } = useThemeModeStyle()

  return (
    <Flex
      px={{ base: "4", md: "4" }}
      py={{ base: "3", md: "3" }}
      bg={bg}
      borderRadius="lg"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      justifyContent="space-between"
      {...boxProps}
    >
      <Stack>
        <Text fontSize="sm" color="muted">
          {label}
        </Text>
        <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
          {value}
        </Heading>
      </Stack>
      <IconButton
        alignSelf="center"
        colorScheme="blue"
        aria-label="Search database"
        icon={<Icon as={IconSearch} />}
      />
    </Flex>
  );
};

export default BaseStatCard;
