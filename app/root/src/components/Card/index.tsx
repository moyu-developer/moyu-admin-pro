import { ReactNode } from "react";
import {
  IconButton,
  Icon,
  Heading,
  BoxProps,
  Text,
  useColorModeValue,
  Skeleton,
  Flex,
} from "@chakra-ui/react";

import { IconDots } from "@tabler/icons";
import useThemeModeStyle from "@/hooks/useThemeModeStyle";

export interface CardProps extends BoxProps {
  title?: string;
  desc?: string;
  children?: ReactNode;
  hasShadow?: boolean;
}

const Card: React.FC<CardProps> = ({ title, desc, children, hasShadow, ...rest }) => {
  const { bg } = useThemeModeStyle();
  const boxShadow = useColorModeValue("sm", "sm-dark")

  return (
    <Skeleton
      isLoaded
      px={{ base: "4", md: "4" }}
      py={{ base: "3", md: "3" }}
      bg={bg}
      borderRadius="lg"
      boxShadow={hasShadow ? boxShadow : undefined}
      {...rest}
    >
      {title ? (
        <Flex justifyContent="space-between" alignItems="baseline">
          <Heading fontSize="md">{title}</Heading>
          <IconButton
            size="sm"
            variant="ghost"
            aria-label="Card-Dots"
            icon={<Icon as={IconDots} />}
          />
        </Flex>
      ) : null}
      {desc ? <Text mt={4}>{desc}</Text> : null}
      {children}
    </Skeleton>
  );
};

Card.defaultProps = {
  hasShadow: true
}

export default Card;
