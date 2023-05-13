import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TbTriangleFilled, TbTriangleInvertedFilled } from 'react-icons/tb';

export default function PaymentItem({ historyInfo }) {
  const {
    status,
    product_name,
    count,
    price,
    manager_name,
    email,
    delivery_address,
    delivery_name,
    delivery_company,
    delivery_number,
    delivery_phonenumber,
    auto_confirmation,
  } = historyInfo;
  const [isToggled, setIsToggled] = useState(false);
  const [outerWidth, setOuterWidth] = useState(window.outerWidth);
  const [select, setSelect] = useState('');

  const handleSelect = e => {
    const tagName = e.target.tagName;
    if (tagName === 'div') {
      setSelect(e.target.dataset.id);
    } else {
      setSelect(e.currentTarget.dataset.id);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setOuterWidth(window.outerWidth);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  const handleToggle = e => {
    if (e.target.dataset.id !== 'item') {
      return;
    }
    setIsToggled(prev => !prev);
  };

  return (
    <Container data-id="item" isToggled={isToggled} onClick={handleToggle}>
      <div>
        <Row1>
          <Text>{product_name}</Text>
          <VerticalBar />
          <Status status={status}>{status}</Status>
        </Row1>
        <Row1 color="#797979">
          <Text color="#2b66f6">{price * count}</Text>
          <VerticalBar />
          {count}개
        </Row1>
      </div>
      <ToggleButton>
        {isToggled ? <TbTriangleFilled /> : <TbTriangleInvertedFilled />}
      </ToggleButton>
      {isToggled && (
        <>
          <Row2>
            <Title>구매자정보</Title>
            <Column1>
              <Text size={12}>{manager_name}</Text>
              <VerticalBar />
              <Text size={12}>{email}</Text>
            </Column1>
            <Hr />
            <Title>배송정보</Title>
            {outerWidth <= 768 ? (
              <>
                <Text size={12}>수령인 : {delivery_name}</Text>
                <Text size={12}>주소 : {delivery_address}</Text>
                <Text size={12}>전화번호 : {delivery_phonenumber}</Text>
              </>
            ) : (
              <Column1>
                <Text size={12}>{delivery_name}</Text>
                <VerticalBar />
                <Text size={12}>{delivery_address}</Text>
                <VerticalBar />
                <Text size={12}>{delivery_phonenumber}</Text>
              </Column1>
            )}
            <Column1>
              <Text size={12}>배송정보</Text>
              <VerticalBar />
              <Text size={12}>
                {delivery_company} {delivery_number}
              </Text>
              <VerticalBar />
              <Text size={12}>자동구매 확정일 : {auto_confirmation}</Text>
            </Column1>
          </Row2>
          <Row3>
            <Title>배송정보등록</Title>
            <SearchContainer>
              <InputContainer>
                <SelectOption onChange={handleSelect}>
                  <option value="company_name">업체명</option>
                  <option value="role">상태</option>
                  <option value="manager_name">담당자명</option>
                </SelectOption>
                <Input placeholder="송장번호" />
                <Input2 value="데이터피커" />
              </InputContainer>
              <ButtonContainer>
                <Button>등록</Button>
              </ButtonContainer>
            </SearchContainer>
          </Row3>
        </>
      )}
    </Container>
  );
}

const Container = styled.li`
  ${props => props.theme.variables.flex('column', '', 'flex-start')}
  position: relative;
  width: 100%;
  height: ${props => (props.isToggled ? '305px' : '72px')};
  background-color: white;
  border-bottom: 1px solid #d0d0d0;
  padding: 14px;
  font-size: 14px;
  background-color: #ffffff;
  transition: height 0.2s ease-in;
  cursor: pointer;

  @media (max-width: 1024px) {
    height: ${props => (props.isToggled ? '285px' : '54px')};
    padding: 0 14px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    height: ${props => (props.isToggled ? '320px' : '54px')};
  }
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Text = styled.div`
  font-size: ${props => (props.size ? props.size : 14)}px;
  font-weight: ${props => (props.weight ? 'bold' : 500)};
  color: ${props => props.color};
  margin: 2px 0 2px;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;
const Status = styled.div`
  color: ${props => (props.status === '결제완료' ? '#2b66f6' : '#d30000')};
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  right: 3%;
  color: #434343;

  @media (max-width: 768px) {
    right: 5%;
  }
`;

const Row1 = styled.div`
  ${props => props.theme.variables.flex('row', '', 'flex-start')}
  color: ${props => props.color};
  padding: 5px;
`;
const Row2 = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  width: 97%;
  height: 140px;
  padding: 15px 12px;
  background-color: #f5f5f5;
  margin-top: 12px;
  border: 1px dashed #d0d0d0;
  border-radius: 4px;
  cursor: auto;

  @media (max-width: 768px) {
    height: 172px;
  }
`;
const Row3 = styled.div`
  width: 95%;
  margin: 10px 0;
  font-size: 14px;
  font-weight: bold;
  margin-left: 11px;
  cursor: auto;

  @media (max-width: 1440px) {
    font-size: 12px;
  }
`;

const VerticalBar = styled.div`
  color: #d0d0d0;
  &::before {
    font-size: 12px;
    margin: 0 4px;
    content: 'ㅣ';
  }
`;

const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d0d0d0;
  margin-top: 4px;
  margin-bottom: 8px;
`;
const Column1 = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'flex-start')}
`;

const SearchContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  width: 100%;
  height: 40px;
  margin: 12px 0;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const SelectOption = styled.select`
  width: 20%;
  height: 40px;
  margin-right: 4px;
  color: #616161;
  font-size: 15px;
  border: 1px solid #dadada;
  border-radius: 10px;
  padding: 4px;
  @media (max-width: 1440px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 2px;
  }
`;

const Input = styled.input`
  width: 50%;
  height: 40px;
  border: 1px solid #dadada;
  border-radius: 10px;
  color: #616161;
  font-size: 15px;
  padding: 8px;
  margin-right: 4px;

  @media (max-width: 1440px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px;
  }
`;

const Input2 = styled.input`
  width: 25%;
  height: 40px;
  border: 1px solid #dadada;
  border-radius: 10px;
  color: #616161;
  font-size: 15px;
  padding: 8px;
  margin-right: 4px;

  @media (max-width: 1440px) {
    font-size: 12px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  border: 1.5px solid #2b66f6;
  border-radius: 10px;
  background-color: #2b66f6;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #2b66f6;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const InputContainer = styled.div`
  width: 75%;
`;
const ButtonContainer = styled.div`
  width: 25%;
`;
