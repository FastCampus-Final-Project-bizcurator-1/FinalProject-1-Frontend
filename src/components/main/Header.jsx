import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const token = localStorage.getItem('token') || '';
  const navigate = useNavigate();
  const onClick = () => {
    localStorage.clear();
    navigate('/');
    alert('로그아웃 되었습니다.');
  };

  return (
    <Container>
      <TopContainer>
        <TopTextContainer>
          <Text1>1분이면 등록완료!</Text1>
          <Text2>문의만 해주세요! 찾고싶은 상품, 모두 찾아드립니다</Text2>
        </TopTextContainer>
      </TopContainer>
      <SecondContainer>
        <ImgContainer>
          <Link to="/">
            <Img src="/images/logo.png" />
          </Link>
        </ImgContainer>
        <TextContainer>
          <NavLinks>
            {token ? (
              <NavLink>
                <Link to="/mypage">상품구매</Link>
                <Link to="/mypage">문의하기</Link>
                <Link to="/mypage">마이페이지</Link>
                <Link to="/mypage">장바구니</Link>
              </NavLink>
            ) : (
              <NavLink>
                <Link to="/login">로그인</Link>
              </NavLink>
            )}
            {token ? (
              <NavLink>
                <a onClick={onClick} href="/">
                  로그아웃
                </a>
              </NavLink>
            ) : (
              <NavLink>
                <Link to="/signup">가입혜택받기</Link>
              </NavLink>
            )}
          </NavLinks>
        </TextContainer>
      </SecondContainer>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: auto;
  font-size: 12px;

  @media (max-width: 768px) {
    padding: 35px;
    align-items: stretch;
    flex-direction: column;
    width: 768px;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: #000000;
  position: relative;
  display: flex;
  justify-content: center;
`;

const TopTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  position: absolute;
  top: 35%;
`;

const Text1 = styled.div`
  color: #ffffff;
  font-size: 8px;
  font-weight: 300;
  margin-right: 5px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
`;
const Text2 = styled.div`
  color: #b5cdfa;
  font-size: 8px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
`;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  padding: 15px 0;
`;

const ImgContainer = styled.div`
  margin: auto;
  margin-left: 80px;
  justify-content: center;
  display: flex;
  flex-grow: 1;
`;

const Img = styled.img`
  width: 11vw;
`;

const TextContainer = styled.div`
  display: flex;
  flex-grow: 4;
  position: relative;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  position: absolute;
  top: 25%;
  right: 20%;
`;

const NavLink = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  :last-child {
    color: #2b66f6;
  }

  display: flex;
  flex-direction: row;
  gap: 50px;
`;
