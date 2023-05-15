import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ManagementButton from './ManagementButton';
import { TbTriangleFilled, TbTriangleInvertedFilled } from 'react-icons/tb';

export default function UserInfo({ userInfo }) {
  const { role, company, email, id, manager_name, phone_number } = userInfo;
  const [isToggled, setIsToggled] = useState(false);
  const [outerWidth, setOuterWidth] = useState(window.outerWidth);

  useEffect(() => {
    const handleResize = () => {
      setOuterWidth(window.outerWidth);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  const toggleAnimation = () => {
    setIsToggled(prev => !prev);
  };

  return (
    <Container
      role={role}
      width={outerWidth}
      isToggled={isToggled}
      onClick={toggleAnimation}
    >
      <UserInfoItem>
        <InfoKey>담당자</InfoKey>
        <InfoValue>
          {manager_name}
          <VerticalBar />
          {role === 'ROLE_STANDBY' ? (
            <RoleStandBy />
          ) : role === 'ROLE_USER' ? (
            <RoleUser />
          ) : (
            <RoleRefuse />
          )}
        </InfoValue>
      </UserInfoItem>
      <UserInfoItem>
        <InfoKey>업체명</InfoKey>
        <InfoValue>{company.company_name}</InfoValue>
      </UserInfoItem>
      {isToggled && (
        <>
          <UserInfoItem>
            <InfoKey>아이디</InfoKey>
            <InfoValue>{id}</InfoValue>
          </UserInfoItem>
          <UserInfoItem>
            <InfoKey>이메일</InfoKey>
            <InfoValue>{email}</InfoValue>
          </UserInfoItem>

          <UserInfoItem>
            <InfoKey>연락처</InfoKey>
            <InfoValue>{phone_number}</InfoValue>
          </UserInfoItem>
          <ManagementButton />
        </>
      )}
      <ToggleButton>
        {isToggled ? <TbTriangleFilled /> : <TbTriangleInvertedFilled />}
      </ToggleButton>
    </Container>
  );
}

const Container = styled.li`
  ${props => props.theme.variables.flex('column', '', 'flex-start')}
  position: relative;
  width: 100%;
  height: ${props => (props.isToggled ? '194px' : '77px')};
  background-color: ${props =>
    props.role === 'ROLE_USER'
      ? '#ffffff'
      : props.role === 'ROLE_STANDBY'
      ? '#f1f5ff'
      : '#F5F5F5'};
  border-bottom: 1px solid #d0d0d0;
  padding: 14px;

  @media (max-width: 480px) {
    height: ${props => (props.isToggled ? '240px' : '')};
  }
  transition: height 0.2s ease-in;
  cursor: pointer;
`;

const UserInfoItem = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'center')}
  width: 100%;
`;
const InfoKey = styled.div`
  width: 10%;
  padding: 5px;
  font-size: 14px;
  font-weight: bold;

  @media (max-width: 1440px) {
    width: 15%;
  }
  @media (max-width: 768px) {
    width: 25%;
    font-size: 12px;
  }
`;
const InfoValue = styled.div`
  display: flex;
  font-size: 14px;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 31px;
  right: 3%;
  color: #434343;

  @media (max-width: 768px) {
    right: 5%;
  }
`;

const VerticalBar = styled.div`
  color: #d0d0d0;
  &::before {
    margin: 0 10px;
    content: '|';
  }
`;
const RoleUser = styled.span`
  color: #d30000;
  &::before {
    content: '승인완료';
  }
`;

const RoleStandBy = styled.span`
  color: #2b66f6;
  &::before {
    content: '승인대기';
  }
`;

const RoleRefuse = styled.span`
  color: #797979;
  &::before {
    content: '승인반려';
  }
`;
