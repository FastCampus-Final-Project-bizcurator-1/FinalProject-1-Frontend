import React from 'react';
import styled from 'styled-components';

export default function CategoryItem({
  src,
  name,
  description,
  tag1,
  tag2,
  tag3,
}) {
  return (
    <Container>
      <Item>
        <Img src={src} />
        <ItemContainer>
          <CategoryName>{name}</CategoryName>
          <CategoryDescription>{description}</CategoryDescription>
          <TagContainer>
            <CategoryTag1>#{tag1}</CategoryTag1>
            <CategoryTag2>#{tag2}</CategoryTag2>
            <CategoryTag3>#{tag3}</CategoryTag3>
          </TagContainer>
        </ItemContainer>
      </Item>
    </Container>
  );
}

const Container = styled.div`
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  line-height: 20px;
  overflow: hidden;
  border-radius: 15px;
`;
const Item = styled.div`
  min-width: 255px;
  min-height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  line-height: 20px;
  overflow: hidden;
  border-radius: 15px;
  -webkit-box-shadow: 0px 5px 15px 4px rgba(208, 208, 208, 0.4);
  box-shadow: 0px 5px 15px 4px rgba(208, 208, 208, 0.4);
`;

const Img = styled.img`
  margin-bottom: 10px;
  min-width: 255px;
  max-height: 191px;
  overflow: hidden;
`;
const ItemContainer = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
`;
const CategoryName = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;
const CategoryDescription = styled.div`
  margin-top: 4px;
  font-weight: 500;
  font-size: 10px;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-top: 6px;
  font-weight: 500;
`;

const CategoryTag1 = styled.div`
  font-size: 12px;
  color: #86b0ff;
`;
const CategoryTag2 = styled.div`
  font-size: 12px;
  color: #86b0ff;
`;
const CategoryTag3 = styled.div`
  font-size: 12px;
  color: #86b0ff;
`;
