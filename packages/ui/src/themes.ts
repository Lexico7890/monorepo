import { createTheme } from '@mui/material/styles';

export const theme1 = createTheme({
  palette: {
    primary: {
      main: '#ff0000', // color primario personalizado
    },
    secondary: {
      main: '#00ff00', // color secundario personalizado
    },
  },
  typography: {
    // personaliza la tipografía según sea necesario
  },
  // otras propiedades de tema que desees personalizar
});

export const theme2 = createTheme({
  palette: {
    primary: {
      main: '#0000ff', // otro color primario personalizado
    },
    secondary: {
      main: '#ffff00', // otro color secundario personalizado
    },
  },
  typography: {
    // personaliza la tipografía según sea necesario
  },
  // otras propiedades de tema que desees personalizar
});
