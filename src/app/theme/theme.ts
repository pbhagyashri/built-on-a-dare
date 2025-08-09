'use client'
import { createTheme } from '@mui/material/styles'
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
    softGrey: string
    softBlue: string
    warmAmber: string
    purple: string
    white: string
    krillGreen: string
    spaceShuttleBlue: string
    orvilleGray: string
    orvilleRed: string
    brightAccentBlue: string
    typographyPurple: string
    orvilleGold: string
    warmAmberDarker: string
    typographyColors: {
      purple?: string
      main?: string
    }
  }
  interface PaletteOptions {
    softGrey?: string
    softBlue?: string
    warmAmber?: string
    purple?: string
    white: string
    krillGreen?: string
    spaceShuttleBlue?: string
    orvilleGray?: string
    orvilleRed?: string
    brightAccentBlue?: string
    typographyPurple?: string
    orvilleGold?: string
    warmAmberDarker?: string
    typographyColors?: {
      purple?: string
      main?: string
    }
  }
}

const defaultTheme = createTheme()

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      light: palette.brightAccentBlue,
      main: palette.orvilleBlueDarker,
      dark: palette.deepSpaceNavy,
    },
    secondary: {
      main: palette.orvilleGold,
    },
    typographyColors: {
      purple: palette.typographyPurple,
      main: palette.softBlue,
    },
    softGrey: palette.softGrey,
    softBlue: palette.softBlue,
    warmAmber: palette.warmAmber,
    purple: palette.purple,
    white: palette.white,
    krillGreen: palette.krillGreen,
    spaceShuttleBlue: palette.spaceShuttleBlue,
    orvilleGray: palette.orvilleGray,
    orvilleRed: palette.orvilleRed,
    orvilleGold: palette.orvilleGold,
    warmAmberDarker: palette.warmAmberDarker,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: defaultTheme.typography.pxToRem(40),
      color: palette.typography,
    },
    h2: {
      fontSize: defaultTheme.typography.pxToRem(28),
      fontWeight: defaultTheme.typography.fontWeightMedium,
      color: palette.white,
    },
    h3: {
      fontSize: defaultTheme.typography.pxToRem(24),
      color: palette.typography,
    },
    h4: {
      fontSize: defaultTheme.typography.pxToRem(20),
      color: palette.typography,
    },
    h5: {
      fontSize: defaultTheme.typography.pxToRem(16),
      fontWeight: defaultTheme.typography.fontWeightMedium,
      color: palette.typography,
    },
    h6: {
      fontSize: defaultTheme.typography.pxToRem(16),
      fontWeight: defaultTheme.typography.fontWeightBold,
      color: palette.typography,
    },
    body1: {
      fontSize: defaultTheme.typography.pxToRem(16),
      color: palette.typography,
    },
    body2: {
      fontSize: defaultTheme.typography.pxToRem(14),
      color: palette.typography,
    },
    caption: {
      fontSize: defaultTheme.typography.pxToRem(12),
      color: palette.typography,
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
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: palette.orvilleGray,
          '& .MuiInputBase-root': {
            color: palette.typography,
            borderColor: palette.spaceShuttleBlue,
            '&:hover': {
              borderColor: palette.spaceShuttleBlue,
              borderWidth: '2px',
            },
            '&:focus-within': {
              borderColor: palette.brightAccentBlue,
              borderWidth: '2px',
            },
          },
          // Hide label on focus
          '& .MuiInputLabel-root': {
            color: palette.typography,
            fontSize: defaultTheme.typography.pxToRem(16),
            '&.Mui-focused': {
              opacity: 0,
              transform: 'translate(14px, 16px) scale(1)',
            },
          },
          // Hide the outline/fieldset on focus
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
          },
          // Ensure placeholder is visible when focused
          '& .MuiInputBase-input': {
            '&::placeholder': {
              opacity: 1,
              color: palette.typography,
            },
            '&:focus::placeholder': {
              opacity: 1,
              color: palette.typography,
            },
            // Change cursor color
            caretColor: palette.spaceShuttleBlue,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiAutocomplete-inputRoot': {
            borderRadius: '50px',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: palette.orvilleBlueDarker,
            '&:focus-within': {
              boxShadow: `0 0 20px ${palette.spaceShuttleBlue}`,
            },
            '& .MuiSvgIcon-root': {
              color: palette.spaceShuttleBlue,
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
        },
      },
    },
  },
})

export default theme
