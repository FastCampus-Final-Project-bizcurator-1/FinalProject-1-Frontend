import React from 'react';
import styled from 'styled-components';

export default function RoleModal() {
  <Wrapper>
    <Container>
      <Large>사업자 등록증이 되지 않았습니다..</Large>
      <Small>사업자 등록증 적합성 검사 후 이용가능합니다..</Small>
      <Btn>확인</Btn>
      <Notice>
        사업자등록이 완료된 후 전체 서비스 이용이 가능합니다. 자세한 사항은
        고객센터로 문의해 주세요.
      </Notice>
    </Container>
  </Wrapper>;
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
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Small = styled.p`
  font-size: 13px;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Btn = styled.button`
  width: 70%;
  height: 40px;
  font-weight: 600;
  color: #fff;
  border: 0;
  border-radius: 999px;
  background-color: #2b66f6;
  margin-top: 15px;
  cursor: pointer;
`;

const Notice = styled.p`
  color: #d30000;
  margin: 10px 0;
  font-size: 12px;
`;
