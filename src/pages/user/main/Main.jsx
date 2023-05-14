import React, { useEffect, useRef, useState } from 'react';
import PartnerList from '../../../components/main/PartnerList';
import FAQ from '../../../components/main/FAQ/FAQ';
import Sample from '../../../components/main/Sample/Sample';
import BusinessDeals from '../../../components/main/BusinessDeals';
import Category from '../../../components/main/category/Category';
import styled from 'styled-components';
import FloatingButton from '../../../components/FloatingButton';

export default function Main() {
  const [outerWidth, setOuterWidth] = useState(window.outerWidth);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.outerWidth);
      setOuterWidth(window.outerWidth);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  const sectionRef = useRef(null);

  const [isView, setIsView] = useState(false);
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
    <>
      <Test />
      <div ref={sectionRef}>
        <Category />
        {outerWidth > 1024 ? (
          <BusinessDeals>
            <Bold>기업고객 특가 상품</Bold>은 사업자 있으신 사장님이라면
            누구나가입해서 구매가능!{' '}
          </BusinessDeals>
        ) : (
          <Img src="/images/BusinessDeals.png" />
        )}
        <Sample isView={isView} />
        <FAQ />
        <PartnerList />
        <FloatingButton />
      </div>
    </>
  );
}

const Test = styled.div`
  height: 2000px;
`;
const Bold = styled.span`
  font-weight: 700;
`;
const Img = styled.img`
  width: 100%;
`;
