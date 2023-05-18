import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/main/Header';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import variables from './styles/variables';
import Footer from './components/main/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={{ style: theme, variables }}>
      <Header />
      <GlobalStyle />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
