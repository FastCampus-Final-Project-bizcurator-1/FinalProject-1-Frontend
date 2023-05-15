import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function CategoryItem({ mainCategory }) {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocused = () => {
    setIsFocused(prev => !prev);
  };

  const isButtonVisible =
    mainCategory === '전체상품' ? true : mainCategory === '기타' ? true : false;

  useEffect(() => {
    fetch(`/mock/admin/category/${mainCategory}.json`)
      .then(res => res.json())
      .then(data => setText(data.category));
  }, []);

  const handleChange = e => {
    const inputText = e.target.value;
    if (inputText.length < 80) {
      setText(inputText);
    }
  };

  return (
    <Container>
      <MainCategory>{mainCategory.replace('_', '/')}</MainCategory>
      <SubCategoryContaienr onFocus={handleFocused} onBlur={handleFocused}>
        <SubCategory
          isButtonVisible={isButtonVisible}
          readOnly={isButtonVisible}
          value={
            mainCategory === '전체상품'
              ? '전체 상품은 수정할 수 없습니다'
              : mainCategory === '기타'
              ? '기타 상품은 수정할 수 없습니다.'
              : text
          }
          onChange={handleChange}
        />
        <ButtonContaier isFocused={isFocused}>
          <Button isButtonVisible={isButtonVisible}>저장하기</Button>
        </ButtonContaier>
      </SubCategoryContaienr>
    </Container>
  );
}
const Container = styled.li`
  ${props => props.theme.variables.flex('row', '', 'flex-start')}
  position: relative;
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #d0d0d0;
  font-size: 14px;

  border: 1px solid #d0d0d0;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

const MainCategory = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 20%;
  min-width: 80px;
  height: 100%;
  background-color: #797979;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
`;

const SubCategoryContaienr = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 80%;
  height: 100%;
`;

const SubCategory = styled.textarea`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  width: 80%;
  height: 100%;
  padding: 10px 14px;
  font-size: 12px;
  color: #000000;
  background-color: #f5f5f5;
  resize: none;
  border: none;

  @media (max-width: 480px) {
    font-size: 10px;
  }

  &:focus {
    background-color: #ffffff;
    outline: none;
  }
`;

const ButtonContaier = styled.div`
  width: 20%;
  height: 100%;
  position: relative;
  background-color: ${props => (props.isFocused ? '#ffffff' : '#f5f5f5')};
`;

const Button = styled.div`
  position: absolute;
  width: 85%;
  height: 40px;
  border-radius: 10px;
  text-align: center;
  color: ${props => (props.isButtonVisible ? '#797979' : '#ffffff')};
  line-height: 40px;
  background-color: ${props => (props.isButtonVisible ? '#d0d0d0' : '#2b66f6')};
  top: 50%;
  transform: translateY(-50%);
  cursor: ${props => (props.isButtonVisible ? '' : 'pointer')};
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
