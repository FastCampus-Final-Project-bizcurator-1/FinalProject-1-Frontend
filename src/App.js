import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import variables from './styles/variables';
import Footer from './components/main/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={{ style: theme, variables }}>
      <GlobalStyle />
      <Outlet />
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
