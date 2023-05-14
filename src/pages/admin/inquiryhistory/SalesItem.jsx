import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TbTriangleFilled, TbTriangleInvertedFilled } from 'react-icons/tb';

export default function InquiryItem({ inquiry }) {
  const {
    state,
    userId,
    email,
    phone_number,
    company_name,
    companyAddress,
    manufacturing_company,
    url,
    attachment,
  } = inquiry;
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
    <Container
      data-id="item"
      state={state}
      isToggled={isToggled}
      onClick={handleToggle}
    >
      <div>
        <Row1>
          <Title>아이디</Title>
          <Text color="#434343">{userId}</Text>
          <VerticalBar />
          <Status state={state}>{state}</Status>
        </Row1>
        <Row1>
          <Title>기업명</Title>
          <Text>{company_name}</Text>
        </Row1>
      </div>
      <ToggleButton>
        {isToggled ? <TbTriangleFilled /> : <TbTriangleInvertedFilled />}
      </ToggleButton>
      {isToggled && (
        <>
          <Row1>
            <Title>본사주소</Title>
            <Text>{companyAddress}</Text>
          </Row1>
          <Row1>
            <Title>연락처</Title>
            <Text>{phone_number}</Text>
          </Row1>
          <Row1>
            <Title>이메일</Title>
            <Text>{email}</Text>
          </Row1>
          <Row1>
            <Title>제조사</Title>
            <Text>{manufacturing_company}</Text>
          </Row1>
          {url && (
            <Row1>
              <Title>쇼핑몰주소</Title>
              <Text>{url}</Text>
            </Row1>
          )}
          <Row3>
            <StateContainer>
              <Button2 width="35%" attachment={attachment}>
                제품등록파일
              </Button2>
              <SelectOption onChange={handleSelect}>
                <option value="" selected disabled hidden>
                  처리상태
                </option>
                <option value="안읽음">안읽음</option>
                <option value="답변미완료">답변미완료</option>
                <option value="답변완료">답변완료</option>
              </SelectOption>
              <Button1 width="20%">저장</Button1>
            </StateContainer>
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
  height: ${props => (props.isToggled ? '245px' : '72px')};
  background-color: ${props =>
    props.state === '안읽음'
      ? '#f1f5ff'
      : props.state === '답변미완료'
      ? '#f5f5f5'
      : '#ffffff'};
  border-bottom: 1px solid #d0d0d0;
  padding: 14px;
  font-size: 14px;
  transition: height 0.2s ease-in;
  cursor: pointer;

  @media (max-width: 1024px) {
    height: ${props => (props.isToggled ? '230px' : '54px')};
    padding: 4px 14px;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    height: ${props => (props.isToggled ? '230px' : '54px')};
  }

  @media (max-width: 480px) {
    height: ${props => (props.isToggled ? '250px' : '54px')};
  }
`;

const Title = styled.div`
  width: 70px;
  margin-right: 5px;
  font-size: 13px;
  font-weight: bold;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: ${props => (props.weight ? 'bold' : 500)};
  color: ${props => props.color};
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

const Status = styled.div`
  font-size: ${props => props.size}px;
  color: ${props =>
    props.state === '답변완료'
      ? '#2b66f6'
      : props.state === '답변미완료'
      ? '#797979'
      : '#d30000'};
  margin-top: 1px;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 29px;
  right: 3%;
  color: #434343;

  @media (max-width: 1024px) {
    top: 20px;
  }
  @media (max-width: 768px) {
    right: 5%;
  }
`;

const Row1 = styled.div`
  ${props => props.theme.variables.flex('row', '', 'flex-start')}
  color: ${props => props.color};
  padding: 5px;
`;

const Row3 = styled.div`
  width: 95%;
  font-size: 14px;
  font-weight: bold;
  margin-left: 2px;
  cursor: auto;

  @media (max-width: 1440px) {
    font-size: 12px;
  }
  @media (max-width: 1024px) {
    margin: 0;
  }
`;
const StateContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'center')}
  width: 50%;
  height: 40px;
  margin: 12px 0;

  @media (max-width: 1024px) {
    width: 75%;
  }
`;

const SelectOption = styled.select`
  width: 35%;
  height: 40px;
  margin: 0 6px;
  color: #616161;
  font-size: 15px;
  border: 1.5px solid #797979;
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

const Button1 = styled.button`
  width: ${props => (props.width ? props.width : '')};
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

const Button2 = styled.button`
  width: ${props => (props.width ? props.width : '')};
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  border: 1.5px solid ${props => (props.attachment ? '#2b66f6' : '#d0d0d0')};
  border-radius: 10px;
  background-color: ${props => (props.attachment ? '#2b66f6' : '#f5f5f5')};
  color: ${props => (props.attachment ? '#ffffff' : '#797979')};

  @media (max-width: 768px) {
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
