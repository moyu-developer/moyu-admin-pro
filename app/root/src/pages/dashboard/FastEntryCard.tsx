import Card from "@/components/Card";
import {
  Box,
  BoxProps,
  IconButton,
  Icon,
  Tooltip,
  SimpleGrid,
} from "@chakra-ui/react";
import { IconTerminal2, IconMap } from "@tabler/icons";

const entryOptions = [
  {
    label: "控制台",
    link: "1",
    icon: IconTerminal2,
  },
  {
    label: "物流系统",
    link: "1",
    Icon: IconMap,
  },
];

const FastEntry = (props: BoxProps) => {
  return (
    <Card title="快捷入口" {...props}>
      <SimpleGrid pt={3} columns={4} spacing={4}>
        <Tooltip label="1">
          <IconButton
            aria-label="1"
            alignSelf="center"
            bg="gray.100"
            icon={<Icon as={IconMap} fontSize="20px" />}
          />
        </Tooltip>

        <Tooltip label="1">
          <IconButton
            aria-label="1"
            alignSelf="center"
            bg="gray.100"
            icon={<Icon as={IconTerminal2} fontSize="20px" />}
          />
        </Tooltip>
      </SimpleGrid>
    </Card>
  );
};

export default FastEntry;
