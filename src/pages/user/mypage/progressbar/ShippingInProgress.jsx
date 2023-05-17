import React from 'react';
import styled from 'styled-components';

export default function ShippingInProgress() {
  return (
    <>
      <Progressbar>
        <TrackerContainer>
          <ProgressTracker />
          <ProgressTracker />
          <ProgressTracker2 />
        </TrackerContainer>
        <ValueContainer>
          <ProgressbarValue />
          <ProgressbarValue2 />
        </ValueContainer>
      </Progressbar>
      <StateContainer>
        <StateName>배송시작</StateName>
        <StateName>배송중</StateName>
        <StateName2>배송완료</StateName2>
      </StateContainer>
    </>
  );
}

const Progressbar = styled.div`
  position: relative;
  width: 94%;
  height: 6px;
  border-radius: 5px;
  background-color: #ffffff;
  margin: 15px auto;
  z-index: 1;

  @media (max-width: 768px) {
    margin: 30px auto 15px;
  }
  @media (max-width: 480px) {
    width: 95%;
  }
`;

const TrackerContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', '')}
`;

const ValueContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', '')}
  position: absolute;
  width: 100%;
`;
const StateContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', '')}
  width: 100%;
  margin: 0 auto;
  font-size: 12px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const ProgressbarValue = styled.div`
  position: relative;
  width: 50%;
  top: -14px;
  height: 6px;
  border-radius: 5px;
  background-color: #2b66f6;
`;

const ProgressbarValue2 = styled.div`
  position: relative;
  width: 50%;
  top: -14px;
  height: 6px;
  border-radius: 5px;
  background-color: #ffffff;
`;

const ProgressTracker = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #2b66f6;
  top: -4px;
  z-index: 999;
`;
const ProgressTracker2 = styled.div`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #ffffff;
  top: -4px;
  z-index: 999;
`;

const StateName = styled.div`
  color: #2b66f6;
`;
const StateName2 = styled.div`
  color: #797979;
`;
