import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { HiOutlineShoppingCart, HiOutlineHeart } from 'react-icons/hi';
import { RiFileList2Line, RiShoppingBagLine } from 'react-icons/ri';
import MyPagePaymentHistoryItem from './MyPagePaymentHistoryItem';

export default function MyPage() {
  const [userInfo, setUserInfo] = useState({});
  const { ownerName, businessLicense, payment_history } = userInfo;

  useEffect(() => {
    fetch(`/mock/user/mypage.json`)
      .then(res => res.json())
      .then(data => setUserInfo(data));
  }, []);

  return (
    <Container>
      <Column>
        <TitleContainer>
          <Title size={32} margin="0 0 44px 8px">
            마이페이지
          </Title>
        </TitleContainer>
        <CursorContainer>
          <UserContainer>
            <Title size={28}>
              {ownerName}
              <Title size={28} weight={500}>
                님
              </Title>
            </Title>
            <IconContainer size={25} margin="15px 0 0 0">
              <MdOutlineArrowForwardIos />
            </IconContainer>
          </UserContainer>
          {businessLicense ? (
            <LicenseContainer>
              <BusinessLicense businessLicense={businessLicense}>
                등록
              </BusinessLicense>
              <Text color="#797979">사업자등록증을 첨부하셨습니다.</Text>
            </LicenseContainer>
          ) : (
            <LicenseContainer>
              <BusinessLicense businessLicense={businessLicense}>
                미등록
              </BusinessLicense>
              <Text color="#797979">사업자등록증을 첨부해 주세요</Text>
            </LicenseContainer>
          )}
        </CursorContainer>
      </Column>
      <Column>
        <UserActivityContainer>
          <ActivityItem>
            <IconContainer size={32} margin="0 0 15px 0" color="#181818">
              <HiOutlineShoppingCart />
            </IconContainer>
            <Text>문의 내역</Text>
          </ActivityItem>
          <ActivityItem>
            <IconContainer size={32} margin="0 0 15px 0" color="#181818">
              <RiShoppingBagLine />
            </IconContainer>
            <Text>내 거래</Text>
          </ActivityItem>
          <ActivityItem>
            <IconContainer size={32} margin="0 0 15px 0" color="#181818">
              <RiFileList2Line />
            </IconContainer>
            <Text>장바구니</Text>
          </ActivityItem>
          <ActivityItem>
            <IconContainer size={32} margin="0 0 15px 0" color="#181818">
              <HiOutlineHeart />
            </IconContainer>
            <Text>관심상품</Text>
          </ActivityItem>
        </UserActivityContainer>
      </Column>
      <Column>
        <TitleContainer margin="0 0 60px 0">
          <Title size={28} margin="0 0 15px 0 ">
            최근 거래 내역
          </Title>
          <Text color="#797979">최근 1달, 최대 20개까지</Text>
        </TitleContainer>
        <UserPaymentHistoryContainer>
          {payment_history?.map((paymenthistory, i) => {
            return <MyPagePaymentHistoryItem paymenthistory={paymenthistory} />;
          })}
        </UserPaymentHistoryContainer>
      </Column>
    </Container>
  );
}
const Container = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')}
  width: 50%;
  font-family: 'Noto Sans KR', sans-serif;
  left: 10%;
  margin: 60px auto;
  padding: 0 10px;

  @media (max-width: 1440px) {
    width: 60%;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 15px;
  }
`;

const CursorContainer = styled.div`
  cursor: pointer;
`;

const Column = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 60px;
`;
const TitleContainer = styled.div`
  margin: ${props => (props.margin ? props.margin : '')};

  @media (max-width: 480px) {
    margin: 0 0 30px 0;
  }
`;
const Title = styled.div`
  ${props => props.theme.variables.flex('row', '', 'center')}
  font-size: ${props => (props.size ? props.size : 28)}px;
  font-weight ${props => (props.weight ? props.weight : 'bold')};
  margin: ${props => (props.margin ? props.margin : '')};

  text-align: left;
  letter-spacing: -1px;
`;

const Text = styled.div`
  font-size: ${props => (props.size ? props.size : 20)}px;
  font-weight: 500;
  color: ${props => (props.color ? props.color : '#000000')};
  letter-spacing: -1px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const UserContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'center')}
  position:relative;
  width: 100%;
`;

const LicenseContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'center')}
  height: 27px;
  margin-top: 20px;
`;

const BusinessLicense = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 87px;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid #2b66f6;
  border-radius: 40px;
  background-color: ${props => (props.businessLicense ? '#2b66f6' : '#ffffff')};
  color: ${props => (props.businessLicense ? '#ffffff' : '#2b66f6')};
  margin-right: 8px;
`;

const IconContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  font-size: ${props => (props.size ? props.size : 20)}px;
  color: ${props => (props.color ? props.color : '#797979')};
  margin: ${props => (props.margin ? props.margin : '')};
`;

const UserActivityContainer = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
`;
const ActivityItem = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  width: 90px;
  cursor: pointer;
`;

const UserPaymentHistoryContainer = styled.ul``;
