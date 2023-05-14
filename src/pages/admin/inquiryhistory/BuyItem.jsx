import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TbTriangleFilled, TbTriangleInvertedFilled } from 'react-icons/tb';

export default function InquiryItem({ inquiry }) {
  const {
    category,
    state,
    userId,
    email,
    manager_number,
    company_name,
    manufacturing_company,
    product,
    amount,
    attachment,
    content,
    estimateWishDate,
    deliveryWishDate,
  } = inquiry;

  const [isToggled, setIsToggled] = useState(false);
  const [outerWidth, setOuterWidth] = useState(window.outerWidth);
  const [select, setSelect] = useState('');

  const contentArr = content?.split(',');

  console.log(contentArr);
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
          <Title>구분</Title>
          <Text>{category}</Text>
        </Row1>
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
            <Title>연락처</Title>
            <Text>{manager_number}</Text>
          </Row1>
          <Row1>
            <Title>이메일</Title>
            <Text>{email}</Text>
          </Row1>
          <Row1>
            <Title>제조사</Title>
            <Text>{manufacturing_company}</Text>
          </Row1>
          <Row1>
            <Title>구매희망제품</Title>
            <Text>{product}</Text>
          </Row1>
          <Row1>
            <Title>구매수량</Title>
            <Text>{amount}</Text>
          </Row1>
          <Row1>
            <Title>제품이미지</Title>
            <AttachmentList>
              {attachment?.map((e, i) => {
                return <AttachmentItem key={i}>{e.url}</AttachmentItem>;
              })}
            </AttachmentList>
          </Row1>
          <Row1>
            <Title>요청사항</Title>
            <ContentList>
              {contentArr?.map((e, i) => {
                return <ContentItem key={e + i}>{e}</ContentItem>;
              })}
            </ContentList>
          </Row1>
          <Row1>
            <Title>견적수령 희망일</Title>
            <Text>{estimateWishDate}</Text>
          </Row1>
          <Row1>
            <Title>제품배송 희망일</Title>
            <Text>{deliveryWishDate}</Text>
          </Row1>
          <Row3>
            <StateContainer>
              <SelectOption onChange={handleSelect} defaultValue="처리상태">
                <option disabled>처리상태</option>
                <option value="안읽음">안읽음</option>
                <option value="견적등록">견적등록</option>
                <option value="샘플발송">샘플발송</option>
                <option value="거래승인">거래승인</option>
                <option value="견적반려">견적반려</option>
                <option value="배송중">배송중</option>
                <option value="배송완료">배송완료</option>
              </SelectOption>
              <Button1 width="20%">저장</Button1>
              <Button2 width="35%">견적서 등록</Button2>
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
  height: ${props => (props.isToggled ? '410px' : '98px')};
  background-color: ${props =>
    props.state === '안읽음'
      ? '#f1f5ff'
      : props.state === '견적반려'
      ? '#f5f5f5'
      : '#ffffff'};
  border-bottom: 1px solid #d0d0d0;
  padding: 14px;
  font-size: 14px;
  transition: height 0.2s ease-in;
  cursor: pointer;

  @media (max-width: 1024px) {
    height: ${props => (props.isToggled ? '380px' : '76px')};
    padding: 4px 14px;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    height: ${props => (props.isToggled ? '380px' : '76px')};
76}

  @media (max-width: 480px) {
    height: ${props => (props.isToggled ? '400px' : '76px')};
  }
`;

const Title = styled.div`
  width: 105px;
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
  top: 45px;
  right: 3%;
  color: #434343;

  @media (max-width: 1024px) {
    top: 35px;
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
  width: 60%;
  height: 40px;
  margin: 12px 0;

  @media (max-width: 1024px) {
    width: 75%;
  }
`;

const SelectOption = styled.select`
  width: 100px;
  height: 40px;
  margin: 0 6px;
  color: #616161;
  font-size: 14px;
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

const Button1 = styled.button`
  width: ${props => (props.width ? props.width : '')};
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  border: 1.5px solid #2b66f6;
  border-radius: 10px;
  background-color: #2b66f6;
  color: #ffffff;
  margin-right: 5px;

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
  font-weight: bold;
  border: 1.5px solid #2b66f6;
  border-radius: 10px;
  background-color: #ffffff;
  color: #2b66f6;
  margin-right: 5px;

  &:hover {
    background-color: #2b66f6;
    color: #ffffff;
  }
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

const AttachmentList = styled.ul`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
`;
const AttachmentItem = styled.li`
  text-decoration: underline;
  margin-right: 5px;
`;

const ContentList = styled.ul``;
const ContentItem = styled.li`
  padding: 2px;
`;
