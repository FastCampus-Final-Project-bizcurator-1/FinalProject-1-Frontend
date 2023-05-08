import { useEffect, useRef, useState } from 'react';
import Footer from './main/Footer';
import PartnerList from './main/PartnerList';
import GlobalStyle from './styles/GlobalStyle';
import styled from 'styled-components';
import FAQ from './main/FAQ/FAQ';

function App() {
  const [isView, setIsView] = useState(false);
  const sectionRef = useRef(null);

  const option = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  };

  useEffect(() => {
    let observer = new IntersectionObserver(e => {
      e.forEach(entry => {
        if (entry.intersectionRatio > 0.3) {
          entry.target.classList.add('active');
          setIsView(true);
        }
      });
    }, option);

    const currentTarget = sectionRef.current;
    if (currentTarget) {
      Array.from(currentTarget.children).forEach(child => {
        observer.observe(child);
      });
    }
    return () => {
      if (currentTarget) {
        Array.from(currentTarget.children).forEach(child => {
          observer.unobserve(child);
        });
      }
    };
  }, [sectionRef]);
  return (
    <div className="App">
      <GlobalStyle />
      <Test />
      <div ref={sectionRef}>
        <FAQ />
        <PartnerList />
      </div>
      <Footer />
    </div>
  );
}

export default App;

const Test = styled.div`
  height: 2000px;
`;
