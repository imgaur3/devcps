import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import Router from './Routes';
import { theme } from './Theme';

const App: FC = () => {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
};
export default App;
