import { ThemeProvider } from 'styled-components';
import Header from './components/main/Header';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import variables from './styles/variables';
import Footer from './components/main/Footer';
import { Outlet } from 'react-router-dom';
import Apiprovider from './context/context';

function App() {
  return (
    <ThemeProvider theme={{ style: theme, variables }}>
      <Apiprovider>
        <Header />
        <GlobalStyle />
        <Outlet />
        <Footer />
      </Apiprovider>
    </ThemeProvider>
  );
}

export default App;
