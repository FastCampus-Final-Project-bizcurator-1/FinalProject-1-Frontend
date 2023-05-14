import React, { useState } from 'react';
import styled from 'styled-components';
import ProductSearch from '../../components/admin/product/ProductSearch';
import ProductList from '../../components/admin/product/ProductList';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export default function Product() {
  const [isClick, setIsClick] = useState({
    all: true,
    recommend: false,
    view: false,
  });
  const handleProductList = e => {
    console.log(e.target.id);
    // 각각 상품리스트 api 요청
    if (e.target.id === 'recommend') {
      setIsClick({
        all: false,
        recommend: true,
        view: false,
      });
    } else if (e.target.id === 'view') {
      setIsClick({
        all: false,
        recommend: false,
        view: true,
      });
    } else {
      setIsClick({
        all: true,
        recommend: false,
        view: false,
      });
    }
  };
  return (
    <Wrapper>
      <BtnArea>
        <Category href="/admin/management/product/category">
          상품카테고리 관리 <MdOutlineArrowForwardIos />
        </Category>
        <Add href="/admin/management/product/add">상품 등록하기</Add>
      </BtnArea>
      <ProductSearch />
      <Filter>
        <Btn id="all" onClick={e => handleProductList(e)} status={isClick.all}>
          전체상품
        </Btn>
        <Btn
          id="recommend"
          onClick={e => handleProductList(e)}
          status={isClick.recommend}
        >
          추천상품
        </Btn>
        <Btn
          id="view"
          onClick={e => handleProductList(e)}
          status={isClick.view}
        >
          노출상품
        </Btn>
      </Filter>
      <P>추천상품 등록 현황 : 3/5</P>
      <ProductList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 680px;
  margin: 30px auto 0;
  padding-left: 80px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    padding: 0 15px;
  }
`;

const BtnArea = styled.div`
  width: 100%;
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  margin-bottom :15px;
`;

const Category = styled.a`
  color: #2b66f6;
  font-size: 14px;
  font-weight: 600;
  ${props => props.theme.variables.flex('', 'center', 'center')}
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Add = styled.a`
  width: 140px;
  height: 35px;
  border: 1px solid #2b66f6;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  line-height: 35px;
  color: #2b66f6;
  border-radius: 10px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 110px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
  }
`;

const Filter = styled.div`
  width: 100%;
  height: 35px;
  ${props => props.theme.variables.flex('', 'space-evenly', 'center')}
  margin : 15px 0 25px;
`;

const Btn = styled.button`
  width: 25%;
  height: 100%;
  border: ${props => (props.status ? '0' : '1px solid #d0d0d0')};
  border-radius: 5px;
  background-color: ${props => (props.status ? '#2b66f6' : '#f5f5f5')};
  color: ${props => (props.status ? '#fff' : '#797979')};
  font-size: 12px;
`;

const P = styled.p`
  font-size: 16px;
  color: #2b66f6;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
