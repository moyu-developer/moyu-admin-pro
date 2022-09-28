import { ReactNode } from "react";
import {
  IconButton,
  Icon,
  Heading,
  BoxProps,
  Text,
  useColorModeValue,
  Skeleton,
  Flex
} from "@chakra-ui/react";

import { IconDots } from '@tabler/icons'
import useThemeModeStyle from "@/hooks/useThemeModeStyle";

export interface CardProps extends BoxProps {
  title?: string;
  desc?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, desc, children, ...rest }) => {

  const { bg } = useThemeModeStyle()

  return (
    <Skeleton
      isLoaded
      px={{ base: "4", md: "4" }}
      py={{ base: "3", md: "3" }}
      bg={bg}
      borderRadius="lg"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      {...rest}
    >
      <Flex justifyContent="space-between" alignItems="baseline" >
        <Heading  fontSize="md">{title}</Heading>
        <IconButton size="sm" variant="ghost" aria-label="Card-Dots" icon={<Icon as={IconDots} />} />
      </Flex>
      <Text mt={4}>{desc}</Text>
      {children}
    </Skeleton>
  );
};

export default Card;
