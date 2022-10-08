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
  Box,
} from "@chakra-ui/react";

import { IconDots } from "@tabler/icons";
import useThemeModeStyle from "@/hooks/useThemeModeStyle";

export interface CardProps extends BoxProps {
  title?: string;
  desc?: string;
  children?: ReactNode;
  hasShadow?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  desc,
  children,
  hasShadow,
  ...rest
}) => {
  const { bg } = useThemeModeStyle();
  const boxShadow = useColorModeValue("sm", "sm-dark");

  return (
    <Skeleton
      isLoaded
      px={{ base: "6", md: "6" }}
      py={{ base: "4", md: "4" }}
      bg={bg}
      borderRadius="lg"
      boxShadow={hasShadow ? boxShadow : undefined}
      {...rest}
    >
      {title ? (
        <Flex justifyContent="space-between" alignItems="baseline">
          <Heading fontSize="lg">{title}</Heading>
          <IconButton
            size="sm"
            variant="ghost"
            aria-label="Card-Dots"
            fontSize="lg"
            icon={<Icon as={IconDots} />}
          />
        </Flex>
      ) : null}
      {desc ? <Text color="gray.500">{desc}</Text> : null}
      <Box mt={4}>{children}</Box>
    </Skeleton>
  );
};

Card.defaultProps = {
  hasShadow: true,
};

export default Card;
