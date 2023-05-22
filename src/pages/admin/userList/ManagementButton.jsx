/* eslint-disable default-case */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useService } from '../../../context/context';
import Service from '../../../service/Service';
import ApprovalModal from './modal/ApprovalModal';
import RefuseModal from './modal/RefuseModal';

export default function ManagementButton({
  role,
  additionalData,
  businessLicense,
  userId,
  handleRefuseModal,
  handleApprovalModal,
}) {
  const [refuseModal, setRefuseModal] = useState(false);
  const [approvalModal, setApprovalModal] = useState(false);
  const { service } = useService();

  function handleRefuseModal() {
    setRefuseModal(prev => !prev);
  }
  function handleApprovalModal() {
    setApprovalModal(prev => !prev);
  }
  const roleChange = (e, userId) => {
    switch (e.target.innerText) {
      case '가입승인':
        service.roleChangeUser(userId);
        handleApprovalModal();
        break;
      case '가입반려':
        service.roleChangeRefuse(userId);
        handleRefuseModal();
        break;
    }
  };

  return (
    <Container>
      {refuseModal && <RefuseModal handleRefuseModal={handleRefuseModal} />}
      {approvalModal && (
        <ApprovalModal handleApprovalModal={handleApprovalModal} />
      )}
      <Row1>
        <Button className={businessLicense ? 'active' : ''}>
          사업자등록증
        </Button>
        <Button className={additionalData.length !== 0 ? 'active' : ''}>
          추가첨부서류
        </Button>
      </Row1>
      <Row2>
        <Button
          className={role === 'ROLE_USER' ? 'active' : ''}
          onClick={e => {
            roleChange(e, userId);
          }}
        >
          가입승인
        </Button>
        <Button
          onClick={e => {
            roleChange(e, userId);
          }}
        >
          가입반려
        </Button>
      </Row2>
    </Container>
  );
}

const Container = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'center')}
  width:100%;
  margin-top: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Row1 = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'center')}
  width: 49%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;
const Row2 = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'center')}
  width: 49%;

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 5px;
  }
`;
const Button = styled.button`
  width: 48%;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  border: 1.5px solid #2b66f6;
  border-radius: 10px;
  background-color: #ffffff;
  color: #2b66f6;

  &.active {
    background-color: #2b66f6;
    color: #ffffff;
  }
`;
