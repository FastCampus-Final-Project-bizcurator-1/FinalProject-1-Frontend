import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function CompanyAdvantages({ isView, text, delay }) {
  return (
    <Container delay={delay} isView={isView} className={isView ? 'active' : ''}>
      <Img src="/images/checked.png" alt="" />
      <Text3>{text}</Text3>
    </Container>
  );
}

const fadeIn = keyframes`
    0% {
    opacity: 0;
  }
  to {
    visibility: visible;
    opacity: 1;
  }
`;

const Container = styled.div`
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  &.active {
    animation: ${fadeIn} 0.5s ease-in-out forwards;
    animation-delay: ${props => props.delay}s;
    opacity: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  @media (max-width: 480px) {
    display: none;
  }
`;

const Text3 = styled.div`
  font-weight: 300;
  margin-left: 16px;

  @media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 20px;
  }
`;
