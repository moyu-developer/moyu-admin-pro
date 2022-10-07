import { color, extendTheme, theme, withDefaultColorScheme } from '@chakra-ui/react'

const colors = {
}

export const customTheme = extendTheme({
  ...withDefaultColorScheme({ colorScheme: "blue" }),
  colors,
})


// import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

// export const customTheme = extendTheme({
//   ...withDefaultColorScheme({ colorScheme: "blue" })
// })