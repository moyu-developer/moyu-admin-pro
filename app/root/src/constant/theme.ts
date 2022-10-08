import {
  extendTheme,
  theme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const colors = {
  bg: { brand: theme.colors.red },
  muted: "gray.600",
};

export const customTheme = extendTheme({
  ...withDefaultColorScheme({ colorScheme: "blue" }),
  colors,
});

// import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

// export const customTheme = extendTheme({
//   ...withDefaultColorScheme({ colorScheme: "blue" })
// })
