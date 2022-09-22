import { ReactNode } from "react";
import {
  Box,
  Heading,
  BoxProps,
  Text,
  useColorModeValue,
  Skeleton
} from "@chakra-ui/react";

export interface CardProps extends BoxProps {
  title?: string;
  desc?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, desc, children, ...rest }) => {
  return (
    <Skeleton
      isLoaded
      px={{ base: "4", md: "6" }}
      py={{ base: "5", md: "6" }}
      bg="white"
      borderRadius="lg"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      {...rest}
    >
      <Heading fontSize="md">{title}</Heading>
      <Text mt={4}>{desc}</Text>
      {children}
    </Skeleton>
  );
};

export default Card;
