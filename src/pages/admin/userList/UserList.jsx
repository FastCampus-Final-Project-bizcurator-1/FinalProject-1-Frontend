/* eslint-disable default-case */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import { useService } from '../../../context/context';
import { getCookie } from '../../../cookie';
import { useQuery } from '@tanstack/react-query';

export default function UserList() {
  const [select, setSelect] = useState('ALL');
  const [userCount, setUserCount] = useState({});
  // const [refuseModal, setRefuseModal] = useState(false);
  // const [approvalModal, setApprovalModal] = useState(false);
  const { service } = useService();

  service.setAuthToken(getCookie('accessToken'));

  const QueryOption = {
    staleTime: 5 * 60 * 1000,
    enabled: true,
  };

  useEffect(() => {
    service.getUserCount().then(res => setUserCount(res.data));
  }, [userCount]);

  const { data: userList, isLoading } = useQuery(
    ['userList', select],
    () => {
      switch (select) {
        case 'ALL':
          return service.userListRoleAll(1).then(res => res.data.content);
        case 'ROLE_STANDBY':
          return service.userListRoleStandBy(1).then(res => res.data.content);
        case 'ROLE_REFUSE':
          return service.userListRoleRefuse(1).then(res => res.data.content);
        case 'ROLE_USER':
          return service.userListRoleUser(1).then(res => res.data.content);
      }
    },
    QueryOption
  );

  const handleSelect = e => {
    const tagName = e.target.tagName;
    if (tagName === 'div') {
      setSelect(e.target.dataset.id);
    } else {
      setSelect(e.currentTarget.dataset.id);
    }
  };

  return (
    <Container>
      <RoleStateContainer>
        <RoleState
          className={select === 'ALL' ? 'active' : ''}
          data-id="ALL"
          onClick={handleSelect}
        >
          {userCount?.standbyCount +
            userCount?.refuseCount +
            userCount?.userCount}
          <Text>전체</Text>
        </RoleState>
        <RoleState
          className={select === 'ROLE_STANDBY' ? 'active' : ''}
          data-id="ROLE_STANDBY"
          onClick={handleSelect}
        >
          {userCount?.standbyCount}
          <Text>승인대기</Text>
        </RoleState>
        <RoleState
          className={select === 'ROLE_REFUSE' ? 'active' : ''}
          data-id="ROLE_REFUSE"
          onClick={handleSelect}
        >
          {userCount?.refuseCount}
          <Text className={select === 'ROLE_REFUSE' ? 'active' : ''}>반려</Text>
        </RoleState>
        <RoleState
          className={select === 'ROLE_USER' ? 'active' : ''}
          data-id="ROLE_USER"
          onClick={handleSelect}
        >
          {userCount?.userCount}
          <Text className={select === 'ROLE_USER' ? 'active' : ''}>
            승인완료
          </Text>
        </RoleState>
      </RoleStateContainer>
      <SearchContainer>
        <SelectOption onChange={handleSelect}>
          <option value="company_name">업체명</option>
          <option value="role">상태</option>
          <option value="manager_name">담당자명</option>
        </SelectOption>
        <Input />
      </SearchContainer>
      {isLoading ? (
        <div>Loadingf...</div>
      ) : (
        <UserListContainer>
          <UserInfoList>
            {userList &&
              userList.map((userInfo, i) => (
                <UserInfo userInfo={userInfo} key={i} />
              ))}
          </UserInfoList>
        </UserListContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')}
  width: 50%;
  font-size: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  margin: 30px auto;
  padding: 15px;

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

const RoleStateContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'space-around', 'center')}
  width: 80%;
  height: 50px;
  line-height: 1.3;
  @media (max-width: 1024px) {
  width: 100%;
`;

const RoleState = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  width: 15%;
  text-align: center;
  font-weight: bold;
  color: #797979;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #d30000;
  }

  &.active {
    color: #d30000;
  }
`;

const Text = styled.span`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  margin-top: 12px;
  color: #434343;
  letter-spacing: -1px;
`;

const SearchContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  width: 80%;
  height: 40px;
  margin: 12px 0;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const SelectOption = styled.select`
  width: 20%;
  height: 40px;
  margin-right: 4px;
  color: #616161;
  font-size: 15px;
  border: 1px solid #dadada;
  border-radius: 10px;
  padding: 6px;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 2px;
  }
`;

const Input = styled.input`
  width: 80%;
  height: 40px;
  flow-grow: 4;
  border: 1px solid #dadada;
  border-radius: 10px;
  color: #616161;
  font-size: 15px;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const UserListContainer = styled.div`
  width: 80%;
  margin-top: 10px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const UserInfoList = styled.ul`
  width: 100%;
`;
