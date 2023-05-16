import React from 'react';

import styled from 'styled-components';

export default function AddproductModal({ setOpen, data }) {
  // submit 후, 상품관리로 이동
  const submitData = () => {
    console.log(data);
    setOpen(false);
    window.location.href = '/admin/management/product';
  };

  return (
    <Wrapper>
      <Container>
        <Large>상품을 등록하시겠습니까?</Large>
        <BtnGroup>
          <Btn onClick={() => submitData()}>등록</Btn>
          <Btn onClick={() => setOpen(false)}>취소</Btn>
        </BtnGroup>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Container = styled.div`
  width: 380px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 0;
  border-radius: 10px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 290px;
    height: 150px;
  }
`;

const Large = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  text-align: center;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const BtnGroup = styled.div`
  width: 80%;
  ${props => props.theme.variables.flex('', 'space-around', 'center')};
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 75%;
  }
`;

const Btn = styled.button`
  width: 45%;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  border: 0;
  border-radius: 999px;
  background-color: #2b66f6;
  margin-top: 15px;
  cursor: pointer;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    height: 30px;
    font-size: 12px;
  }
`;
