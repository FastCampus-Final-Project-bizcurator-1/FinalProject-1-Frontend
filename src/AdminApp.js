import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import variables from './styles/variables';
import { Outlet } from 'react-router-dom';
import SideBar from './pages/admin/sidebar/SideBar';
import Apiprovider from './context/context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={{ style: theme, variables }}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Apiprovider>
          <Nav>navBar입니다</Nav>
          <SideBar />
          <Outlet />
        </Apiprovider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

const Nav = styled.nav`
  height: 80px;
  -webkit-box-shadow: 0px 4px 22px -5px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 4px 22px -5px rgba(0, 0, 0, 0.05);
`;
