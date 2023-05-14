import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as KakaotalkIcon } from '../fonts/kakaotalk.svg';
import { ReactComponent as MailIcon } from '../fonts/mail.svg';
import { ReactComponent as PhonecallIcon } from '../fonts/phonecall.svg';
import { ReactComponent as ArrowUpwardIcon } from '../fonts/arrow.svg';

const FloatingButton = () => {
  const handleClick1 = () => {
    window.open('http://pf.kakao.com/_xoPaYxj');
  };

  const handleClick4 = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Tooltip = ({ children, message, color }) => {
    return (
      <Container>
        {children}
        <Content className="tooltip" color={color}>
          {message}
        </Content>
      </Container>
    );
  };

  return (
    <FloatingButtonContainer>
      <FloatingButtonIconButton onClick={handleClick1}>
        <KakaotalkIcon />
      </FloatingButtonIconButton>
      <Tooltip message="(+82)0507-1387-5624" color="#49be3a">
        <FloatingButtonIconButton>
          <PhonecallIcon width="41" height="41" />
        </FloatingButtonIconButton>
      </Tooltip>
      <Tooltip message="bizcurator@naver.com" color="#000000">
        <FloatingButtonIconButton>
          <MailIcon />
        </FloatingButtonIconButton>
      </Tooltip>
      <FloatingButtonIconButton onClick={handleClick4}>
        <ArrowUpwardIcon width="41" height="41" />
      </FloatingButtonIconButton>
    </FloatingButtonContainer>
  );
};

const FloatingButtonContainer = styled.div`
  position: fixed;
  right: 50px;
  bottom: 15px;
  width: 67px;
  height: 340px;
  background-color: transparent;
  z-index: 999;
`;

const FloatingButtonIconButton = styled(IconButton)`
  display: block;
  width: 76px;
  height: 76px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Container = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;

  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
  }
`;

const Content = styled.div`
  display: none;
  position: absolute;
  z-index: 200;
  background-color: ${props => props.color};
  color: #fff;
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 10px;
  font-size: 12px;
  white-space: nowrap;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 10px;
`;

export default FloatingButton;
