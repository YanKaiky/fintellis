import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#40EDAF',
      dark: '#40EDAF',
      light: '#40EDAF',
      contrastText: '#fff',
    },
    secondary: {
      main: '#000',
      dark: '#fff',
      light: '#fff',
      contrastText: '#fff',
    },
    background: {
      paper: '#303134',
      default: '#202124',
    }
  },
});
