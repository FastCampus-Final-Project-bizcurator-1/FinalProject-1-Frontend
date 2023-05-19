import React, { useState } from 'react';
import styled from 'styled-components';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'; //대량구매
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined'; //주문제작
import BulkPurchase from './BulkPurchase';
import CustomOrder from './CustomOrder';

const Buy = () => {
  const [selectedOption, setSelectedOption] = useState(''); //라디오 버튼

  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
  };

  return (
    <Container>
      <TextContainer>
        <Text> 제품 구매 문의하기</Text>
        <br />
        <Description>
          원하는 제품, 구매의뢰 내용을 적어주시면 견적서를 받아 보실 수 있어요.
        </Description>
      </TextContainer>
      <RadioContainer>
        <RadioLabel selected={selectedOption === '대량구매'}>
          <RadioInput
            type="radio"
            value="대량구매"
            checked={selectedOption === '대량구매'}
            onChange={handleOptionChange}
          />
          {selectedOption === '대량구매' ? (
            <StyledRadioButtonChecked />
          ) : (
            <StyledRadioButtonUnchecked />
          )}
          <IconContainer>
            <StyledShoppingCartOutlinedIcon
              checked={selectedOption === '대량구매'}
            />
            <OptionText selected={selectedOption === '대량구매'}>
              대량구매
            </OptionText>
          </IconContainer>
        </RadioLabel>
        <RadioLabel selected={selectedOption === '주문제작'}>
          <RadioInput
            type="radio"
            value="주문제작"
            checked={selectedOption === '주문제작'}
            onChange={handleOptionChange}
          />
          {selectedOption === '주문제작' ? (
            <StyledRadioButtonChecked />
          ) : (
            <StyledRadioButtonUnchecked />
          )}
          <IconContainer>
            <StyledInventoryOutlinedIcon
              checked={selectedOption === '주문제작'}
            />
            <OptionText selected={selectedOption === '주문제작'}>
              주문제작
            </OptionText>
          </IconContainer>
        </RadioLabel>
      </RadioContainer>
      {selectedOption === '대량구매' && <BulkPurchase />}
      {selectedOption === '주문제작' && <CustomOrder />}
    </Container>
  );
};

export default Buy;

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

//제품 구매 문의하기

const TextContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    justify-content: space-around;
    flex-direction: column;
    margin-left: -5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    justify-content: space-around;
    flex-direction: column;
    margin-left: -4rem;
  }
`;

const Text = styled.div`
  font-size: 1.7rem;
  font-weight: 550;
  margin-right: 1rem;
  color: #181818;
  text-align: left;
  white-space: nowrap;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    justify-content: space-around;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    justify-content: space-around;
    flex-direction: column;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 550;
  margin-right: 1rem;
  color: #797979;
  white-space: nowrap;
  text-align: left;
  margin-top: 1rem;

  @media (max-width: 1024px) {
    text-align: center;
    justify-content: space-around;
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    justify-content: space-around;
    margin-top: 0.3rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    text-align: center;
    justify-content: space-around;
    margin-top: 0;
    font-size: 0.6rem;
  }
`;

const RadioContainer = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 0.5rem;
  padding: 1rem;

  @media (max-width: 1024px) {
    text-align: center;
    justify-content: space-around;
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    justify-content: space-around;
    margin-top: 0.3rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    text-align: center;
    justify-content: space-around;
    margin-top: 0;
    font-size: 0.6rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const OptionText = styled.span`
  margin-top: 0.5rem;
  color: ${({ selected }) => (selected ? '#2b66f6' : '#797979')};
`;

const StyledShoppingCartOutlinedIcon = styled(ShoppingCartOutlinedIcon)`
  font-size: 2rem;
  color: ${({ checked }) => (checked ? '#2b66f6' : '#797979')};
  cursor: pointer;
`;

const StyledInventoryOutlinedIcon = styled(InventoryOutlinedIcon)`
  font-size: 2rem;
  color: ${({ checked }) => (checked ? '#2b66f6' : '#797979')};
  cursor: pointer;
`;

const RadioLabel = styled.label`
  margin: 0;
  border: 2px solid ${({ selected }) => (selected ? '#2b66f6' : '#797979')};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  color: ${({ selected }) => (selected ? '#2b66f6' : '#797979')};
  white-space: nowrap;
  padding: 1.3rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  transition: all 0.3s;

  &:hover {
    border-color: #164ac9;
    background-color: #f1f5ff;

    ${IconContainer} > * {
      color: #164ac9;
    }

    ${OptionText} {
      color: #164ac9;
    }
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    justify-content: center;
    text-align: center;
  }
`;

const StyledRadioButtonUnchecked = styled(RadioButtonUncheckedIcon)`
  color: ${({ checked }) => (checked ? '#2b66f6' : '#797979')};
  cursor: pointer;
`;

const StyledRadioButtonChecked = styled(RadioButtonCheckedIcon)`
  color: ${({ checked }) => (checked ? '#2b66f6' : '#797979')};
  cursor: pointer;
`;

const RadioInput = styled.input`
  appearance: none;
  display: none;

  &:checked + svg {
    color: #2b66f6;
  }
`;
