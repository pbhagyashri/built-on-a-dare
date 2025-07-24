import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

const primary = '#B35E1F'
const secondary = '#CD853F'

const theme = createTheme({
  ...defaultTheme,
  palette: {
    mode: 'light',
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 2,
        },
      },
    },
  },
});

export default theme;