import Footer from './main/Footer';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Test />
      <Footer />
    </div>
  );
}

export default App;

const Test = styled.div`
  height: 2000px;
`;
