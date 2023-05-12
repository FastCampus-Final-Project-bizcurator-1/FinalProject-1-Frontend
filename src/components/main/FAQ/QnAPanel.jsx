import React from 'react';
import styled from 'styled-components';

export default function QnAPanel({ children, question, subAnswer }) {
  return (
    <Container>
      <Question>Q. {question}</Question>
      <Answer>
        A. {children}
        <SubAnswer>{subAnswer}</SubAnswer>
      </Answer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 700px;
  height: 160px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 25px;
  color: #000000;
  text-align: left;
  font-family: 'Noto Sans KR', sans-serif;
  margin-bottom: 28px;

  &:hover {
    background-color: #2b66f6;
    color: #ffffff;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Question = styled.div`
  font-size: 20px;
  margin-bottom: 22px;
  font-weight: 700;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
const Answer = styled.span`
  font-weight: 400;
  font-size: 16px;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const SubAnswer = styled.span`
  font-weight: 300;
  font-size: 14px;
  @media (max-width: 480px) {
    font-size: 10.5px;
  }
`;
