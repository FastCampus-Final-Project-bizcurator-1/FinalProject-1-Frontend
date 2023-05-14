import React, { useState } from 'react';
import { TbThumbUpFilled, TbThumbUp } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// 임시 id
const productId = 1;

export default function ProductList() {
  // 경로이동
  const navigate = useNavigate();
  // 추천버튼
  const [isRecommend, setIsRecommend] = useState(false);

  // 추천 submit
  const handleRecommend = e => {
    console.log('추천');
    setIsRecommend(!isRecommend);
  };

  const handleDelete = e => {
    console.log('삭제');
    // 해당 상품 삭제
  };

  return (
    <Wrapper>
      {/* map 사용 */}
      <Container>
        <Icon onClick={e => handleRecommend(e)}>
          {isRecommend ? <TbThumbUpFilled /> : <TbThumbUp />}
        </Icon>
        <Content>
          <Div>
            <Bold>상품명</Bold>
            <Medium>깨끗한도시 두루마리 휴지 30개 X 1박스</Medium>
          </Div>
          <Div>
            <Bold>노출상태</Bold>
            <Medium>공개</Medium>
          </Div>
          <Div>
            <Bold>가격</Bold>
            <Medium>50000원</Medium>
          </Div>
        </Content>
        <BtnGroup>
          <Btn modify={true} onClick={() => navigate(`/modify/${productId}`)}>
            수정
          </Btn>
          <Btn onClick={e => handleDelete(e)}>삭제</Btn>
        </BtnGroup>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
`;

const Container = styled.div`
  width: 100%;
  height: 120px;
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  border-bottom : 2px solid #d0d0d0;
  padding: 8px 0;
  margin-bottom: 5px;
`;

const Icon = styled.div`
  width: 10%;
  height: 100%;
  ${props => props.theme.variables.flex('', 'center', 'center')}
  text-align: center;
  font-size: 30px;
  color: #434343;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const Content = styled.div`
  width: 70%;
  height: 100%;
  ${props =>
    props.theme.variables.flex('column', 'space-evenly', 'flex-start')};
  font-size: 16px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Div = styled.div`
  width: 100%;
  ${props => props.theme.variables.flex('', 'flex-start', 'flex-start')};
  font-size: 16px;
  line-height: 1.3;
  color: #434343;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Bold = styled.p`
  display: block;
  width: 20%;
  font-weight: 600;
  margin-right: 10px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 35%;
  }
`;

const Medium = styled.p`
  display: block;
  width: 80%;
`;

const BtnGroup = styled.div`
  width: 11%;
  height: 100%;
  ${props => props.theme.variables.flex('column', 'space-evenly', '')};
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 15%;
  }
`;

const Btn = styled.button`
  width: 100%;
  height: 40px;
  border: ${props => (props.modify ? '0' : '1px solid #d0d0d0')};
  border-radius: 10px;
  background-color: ${props => (props.modify ? '#2b66f6' : '#f5f5f5')};
  color: ${props => (props.modify ? '#fff' : '#797979')};
  font-size: 16px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    height: 35px;
    font-size: 14px;
  }
`;
