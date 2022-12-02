import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import Router from './Router';
import { theme } from './Theme';

const App: FC = () => {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
};
export default App;
