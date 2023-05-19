import React, { useEffect, useState } from 'react';
import { TbThumbUpFilled, TbThumbUp } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ProductList() {
  // 경로이동
  const navigate = useNavigate();
  // 상품리스트
  const [productList, setProductList] = useState();
  //
  const [isClick, setIsClick] = useState(false);

  // 추천 submit
  const handleRecommend = id => {
    console.log(id, '추천');
    // api 연결
    setIsClick(!isClick);
  };

  const handleDelete = e => {
    console.log('삭제');
    // 해당 상품 삭제
  };

  // 상품리스트요청
  useEffect(() => {
    fetch('/mock/admin/product_recommendations.json')
      .then(res => res.json())
      .then(data => {
        // console.log(data.product_recommendations);
        setProductList(data.product_recommendations);
      });
  }, []);

  return (
    <Wrapper>
      {productList &&
        productList.map(product => (
          <Container key={product.id}>
            <Icon onClick={() => handleRecommend(product.id)}>
              {product.recommend_status ? <TbThumbUpFilled /> : <TbThumbUp />}
            </Icon>
            <Content>
              <Div>
                <Bold>상품명</Bold>
                <Medium>{product.product_name}</Medium>
              </Div>
              <Div>
                <Bold>노출상태</Bold>
                <Medium>{product.view_status ? '공개' : '비공개'}</Medium>
              </Div>
              <Div>
                <Bold>가격</Bold>
                <Medium>{product.product_price}</Medium>
              </Div>
            </Content>
            <BtnGroup>
              <Btn
                modify={true}
                onClick={() =>
                  (window.location.href = `/admin/management/product/modify/${product.id}`)
                }
              >
                수정
              </Btn>
              <Btn onClick={e => handleDelete(e)}>삭제</Btn>
            </BtnGroup>
          </Container>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  height: 110px;
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  border-bottom : 1px solid #d0d0d0;
  padding: 8px 0;
  margin-bottom: 5px;
`;

const Icon = styled.div`
  width: 13%;
  height: 100%;
  ${props => props.theme.variables.flex('', 'center', 'center')};
  border-right: 1px dashed #d0d0d0;
  text-align: center;
  font-size: 25px;
  color: #434343;
  cursor: pointer;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Content = styled.div`
  width: 70%;
  height: 100%;
  ${props =>
    props.theme.variables.flex('column', 'space-evenly', 'flex-start')};
  font-size: 14px;
  line-height: 1.3;
  color: #434343;
  border-right: 1px dashed #d0d0d0;
  margin-right: 5px;
  padding: 0 5px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Div = styled.div`
  width: 100%;
  ${props => props.theme.variables.flex('', 'flex-start', 'flex-start')};
  transition: 0.3s ease;
`;

const Bold = styled.p`
  display: block;
  width: 20%;
  font-weight: 600;
  margin-right: 10px;
  transition: 0.3s ease;
  @media (max-width: 426px) {
    width: 33%;
  }
`;

const Medium = styled.p`
  display: block;
  width: 80%;
`;

const BtnGroup = styled.div`
  width: 13%;
  height: 100%;
  ${props => props.theme.variables.flex('column', 'space-evenly', '')};
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 15%;
  }
`;

const Btn = styled.button`
  width: 100%;
  height: 35px;
  border: ${props => (props.modify ? '0' : '1px solid #d0d0d0')};
  border-radius: 10px;
  background-color: ${props => (props.modify ? '#2b66f6' : '#f5f5f5')};
  color: ${props => (props.modify ? '#fff' : '#797979')};
  font-size: 14px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    height: 30px;
    font-size: 12px;
  }
`;
