'use client'
import { createTheme, PaletteOptions } from '@mui/material/styles'
import { Roboto } from 'next/font/google'
import palette from './pallete.json'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Extend Material-UI theme types to include custom colors
declare module '@mui/material/styles' {
  interface Palette {
    baige: string
    white: string
  }
  interface PaletteOptions {
    baige?: string
    white: string
  }
}

const defaultTheme = createTheme()

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      light: palette.primary,
      main: palette.primary,
      dark: palette.primaryDark,
    },
    secondary: {
      main: palette.secondary,
    },
    baige: palette.baige,
    white: palette.white,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: defaultTheme.typography.pxToRem(40),
      // color: palette.primary,
    },
    h2: {
      fontSize: defaultTheme.typography.pxToRem(28),
      fontWeight: defaultTheme.typography.fontWeightMedium,
    },
    h3: {
      fontSize: defaultTheme.typography.pxToRem(24),
    },
    h4: {
      fontSize: defaultTheme.typography.pxToRem(20),
    },
    h5: {
      fontSize: defaultTheme.typography.pxToRem(16),
      fontWeight: defaultTheme.typography.fontWeightMedium,
    },
    h6: {
      fontSize: defaultTheme.typography.pxToRem(16),
      fontWeight: defaultTheme.typography.fontWeightBold,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 'bolder',
        },
      },
    },
  },
})

export default theme
