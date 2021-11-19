import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
// import theme from './theme';

import './App.css';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <React.Fragment>
      <CssBaseline enableColorScheme />
      <ThemeProvider theme={theme}>
        <MuiButton variant="contained">Hello World</MuiButton>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
