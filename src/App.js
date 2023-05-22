import { ThemeProvider } from 'styled-components';
import Header from './components/main/Header';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import variables from './styles/variables';
import Footer from './components/main/Footer';
import { Outlet } from 'react-router-dom';
import Apiprovider from './context/context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={{ style: theme, variables }}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Apiprovider>
          <Header />
          <Outlet />
          <Footer />
        </Apiprovider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
