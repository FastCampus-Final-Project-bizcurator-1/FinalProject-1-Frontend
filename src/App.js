import Footer from './main/Footer';
import PartnerList from './main/PartnerList';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Test />
      <PartnerList />
      <Footer />
    </div>
  );
}

export default App;

const Test = styled.div`
  height: 2000px;
`;
