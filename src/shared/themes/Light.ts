import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#40EDAF',
      dark: '#000',
      light: '#000  ',
      contrastText: '#000',
    },
    secondary: {
      main: '#000',
      dark: '#40EDAF',
      light: '#40EDAF',
      contrastText: '#000',
    },
    background: {
      paper: '#EFEFEF',
      default: '#fff',
    }
  }
});
