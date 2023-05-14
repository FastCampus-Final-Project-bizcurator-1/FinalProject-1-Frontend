import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PaymentItem from './PaymentItem';

export default function PaymentHistory() {
  const date = new Date();
  const [year, setYear] = useState();
  const [month, setMonth] = useState();

  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch('/mock/admin/payment_history.json')
      .then(res => res.json())
      .then(data => setHistory(data.history));
  }, []);

  console.log(history);

  const years = parseInt(date.getFullYear().toString().slice(-2));
  const yearsArray = Array(years)
    .fill()
    .map((e, i) => {
      const num = years - i;
      return num.toString().padStart(2, '0');
    });

  const monthArray = Array(12)
    .fill()
    .map((e, i) => {
      const num = i + 1;
      return num.toString().padStart(2, '0');
    });

  const handleSelect = e => {
    const tagName = e.target.tagName;
    if (tagName === 'div') {
      setYear(e.target.dataset.id);
    } else {
      setYear(e.currentTarget.dataset.id);
    }
  };

  return (
    <Container>
      <DateSelect>
        <SelectOption onChange={handleSelect}>
          <option value="" selected disabled hidden>
            년
          </option>
          {yearsArray.map((e, i) => {
            return (
              <option value={`20${e}`} key={i}>
                20{e}년
              </option>
            );
          })}
        </SelectOption>
        <SelectOption onChange={handleSelect}>
          <option value="" selected disabled hidden>
            월
          </option>
          {monthArray.map((e, i) => {
            return (
              <option key={i} value={e}>
                {e}월
              </option>
            );
          })}
        </SelectOption>
      </DateSelect>
      <HistoryContainer>
        {history.map((historyInfo, i) => {
          return <PaymentItem key={i} historyInfo={historyInfo} />;
        })}
      </HistoryContainer>
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')}
  width: 100%;
  font-size: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  left: 10%;
  margin-top: 30px;
  background-color: #ffffff;

  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`;

const Text = styled.span`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  margin-top: 16px;
  color: #434343;
  letter-spacing: -1px;
`;

const DateSelect = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'center')}
  width: 50%;
  height: 40px;
  margin: 12px 0;
  margin-left: 50px;

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: flex-start;
    margin: 0;
    padding: 0 12px;
  }
`;

const SelectOption = styled.select`
  width: 90px;
  height: 40px;
  margin-right: 4px;
  color: #616161;
  font-size: 15px;
  border: 1px solid #dadada;
  border-radius: 10px;
  padding: 6px;

  @media (max-width: 768px) {
    width: 70px;
    height: 35px;
    font-size: 12px;
    padding: 2px;
  }
`;

const HistoryContainer = styled.div`
  width: 50%;
  margin-top: 10px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const HistoryList = styled.ul`
  width: 100%;
`;
