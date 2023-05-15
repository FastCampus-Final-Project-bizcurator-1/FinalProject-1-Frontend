import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import CategoryItem from './CategoryItem';

export default function CategoryManagement() {
  const MainCategory = [
    '전체상품',
    '객실용품',
    '욕실용품',
    '식음료',
    '위생용품',
    '침구류',
    '소방_안전설비',
    '가전_전자제품',
    '청소_시설관리',
    '사무용품',
    '기타',
  ];

  return (
    <Container>
      <BtnArea>
        <Category href="/admin/management/product">
          <MdOutlineArrowBackIos />
          상품목록
        </Category>
      </BtnArea>
      <Row1>
        <Tip>Tip</Tip>
        <TextContainer>
          <Text>
            대분류 카테고리에 해당하는 소분류 카테고리를 구분자 , 와 함께
            작성해주세요. 좌측부터 작성된 순서로 노출됩니다.
          </Text>
          <SubText>
            (예: 옷장용품,객실화류,미용용품,인테리어소품,휴지통)
          </SubText>
        </TextContainer>
      </Row1>
      <Row2>
        {MainCategory.map((mainCategory, i) => {
          return <CategoryItem key={i} mainCategory={mainCategory} />;
        })}
      </Row2>
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')}
  width: 50%;
  font-family: 'Noto Sans KR', sans-serif;
  left: 10%;
  margin: 30px auto;
  padding: 0 10px;

  @media (max-width: 1440px) {
    width: 60%;
  }

  @media (max-width: 1024px) {
    width: 100%;
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

const Row1 = styled.div`
  width: 100%;
  ${props => props.theme.variables.flex('row', 'flex-start', 'center')}
  color: ${props => props.color};
`;

const Row2 = styled.div`
  width: 100%;
  margin-top: 30px;
`;

const Tip = styled.div`
  min-width: 31px;
  height: 22px;
  margin: 2px;
  border-radius: 10px;
  background-color: #2b66f6;
  font-size: 10px;
  text-align: center;
  line-height: 21px;
  color: #ffffff;
`;

const TextContainer = styled.div``;

const Text = styled.div`
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const SubText = styled.div`
  font-size: 12px;
  color: #797979;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
