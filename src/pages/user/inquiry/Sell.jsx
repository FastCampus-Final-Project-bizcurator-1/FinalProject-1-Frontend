import React, { useState } from 'react';
import styled from 'styled-components';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import HouseIcon from '@mui/icons-material/House';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import EmailIcon from '@mui/icons-material/Email';

const Sell = () => {
  const [isHovered, setIsHovered] = useState(false); //제품 등록 상세 문의가 필요하신가요? 호버창
  const [companyName, setCompanyName] = useState(''); //기업명
  const [headOfficeAddress, setHeadOfficeAddress] = useState(''); //본사주소
  const [HeadOfficeFocused, setHeadOfficeFocused] = useState(false);
  const [manufacturer, setManufacturer] = useState(''); //제조사
  const [manufacturerFocused, setManufacturerFocused] = useState(false);
  const [shoppingMallAddress, setShoppingMallAddress] = useState(''); //자사 쇼핑몰 주소
  const [shoppingMallAddressFocused, setShoppingMallAddressFocused] =
    useState(false);
  const [productRegistrationFile, setProductRegistrationFile] = useState(null); //제품 등록파일 업로드
  const [inputFocused, setInputFocused] = useState(false); //작성 여부
  const [isOperating, setIsOperating] = useState(null); //예/아니오 버튼 클릭 여부
  const [showMallAddress, setShowMallAddress] = useState(false); //자사 쇼핑몰 주소 노출 여부

  const handleInputChange = setFunc => e => {
    //input 요소 값 변경
    setFunc(e.target.value);
  };

  const handleInputFocus = () => {
    //input 요소 클릭 시
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    //input 요소 클릭 해제 시
    setInputFocused(false);
  };

  const handleButtonClick = operationStatus => {
    //예/아니오 버튼 클릭 시
    setIsOperating(operationStatus);
    setShowMallAddress(operationStatus);
  };

  const handleContactClick = () => {
    // 문의하기 버튼 클릭 시 다른 페이지로 이동.현재는 console.log만
    console.log('Contact button clicked');
  };

  return (
    <Container>
      <TextContainer>
        <Text>우리 회사 제품 등록하기</Text>
      </TextContainer>
      <ModalContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ModalText>
          제품 등록 상세 문의가 필요하신가요?
          {isHovered ? <HelpIconHovered /> : <HelpIcon />}
        </ModalText>
        {isHovered && <Modal />}
      </ModalContainer>
      <InputLabel>기업명 *</InputLabel>
      <InputContainer
        focused={inputFocused}
        isValid={companyName === '사업자 등록증과 일치하는 기업명'}
      >
        <Input
          value={companyName}
          onChange={handleInputChange(setCompanyName)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={
            !inputFocused && !companyName
              ? '사업자 등록증과 일치하는 기업명을 입력해주세요'
              : ''
          }
        />
      </InputContainer>
      <InputLabel>본사 주소 *</InputLabel>
      <AddressContainer>
        <AddressInputContainer focused={HeadOfficeFocused}>
          <Input
            value={headOfficeAddress}
            onChange={handleInputChange(setHeadOfficeAddress)}
            onFocus={() => setHeadOfficeFocused(true)}
            onBlur={() => setHeadOfficeFocused(false)}
            placeholder=""
          />
        </AddressInputContainer>
        <AddressSearchButton>주소 검색</AddressSearchButton>
      </AddressContainer>
      <InputContainer>
        <Input value={manufacturer} /> //
      </InputContainer>
      <InputContainer>
        <Input value={manufacturer} /> //
      </InputContainer>
      <InputLabel>제조사 *</InputLabel>
      <InputContainer focused={manufacturerFocused}>
        <Input
          value={manufacturer}
          onChange={handleInputChange(setManufacturer)}
          onFocus={() => setManufacturerFocused(true)}
          onBlur={() => setManufacturerFocused(false)}
          placeholder=""
        />
      </InputContainer>
      <InputLabel>자사 쇼핑몰 운영 여부 *</InputLabel>
      <YesNoContainer>
        <YesNoButton
          operationStatus={isOperating === true}
          onClick={() => handleButtonClick(true)}
        >
          예
        </YesNoButton>
        <YesNoButton
          operationStatus={isOperating === false}
          onClick={() => handleButtonClick(false)}
        >
          아니오
        </YesNoButton>
      </YesNoContainer>
      {showMallAddress && (
        <>
          <InputLabel>자사 쇼핑몰 주소 *</InputLabel>
          <InputContainer focused={shoppingMallAddressFocused}>
            <Input
              value={shoppingMallAddress}
              onChange={handleInputChange(setShoppingMallAddress)}
              onFocus={() => setShoppingMallAddressFocused(true)}
              onBlur={() => setShoppingMallAddressFocused(false)}
              placeholder=""
            />
          </InputContainer>
        </>
      )}
      <InputLabel>제품 등록 파일 업로드 *</InputLabel>
      <InputContainer />
      <InputContainer />
      <ContactButton onClick={handleContactClick}>문의하기</ContactButton>
    </Container>
  );
};

const Modal = () => (
  <ModalWrapper>
    <ModalContent>
      <ModalRow>
        <StyledHouseIcon />
        서울특별시 용산구 원효로 90길 11비전포트, 1608호
      </ModalRow>
      <ModalRow>
        <StyledLocalPhoneIcon />
        (+82) 0507-1387-5624
      </ModalRow>
      <ModalRow>
        <StyledChatBubbleIcon />
        bizcurator (비즈 큐레이터) 검색
      </ModalRow>
      <ModalRow>
        <StyledEmailIcon />
        ebnatural_corp@naver.com
      </ModalRow>
    </ModalContent>
  </ModalWrapper>
);

export default Sell;

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 1.5em;
  padding-bottom: 2rem;
`;

//우리 회사 제품 등록하기
const TextContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    justify-content: space-around;
    flex-direction: column;
  }
`;

const Text = styled.div`
  font-size: 1.7rem;
  font-weight: 550;
  margin-right: 1rem;
  color: black;
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    justify-content: space-around;
    flex-direction: column;
  }
`;

const ModalContainer = styled.div`
  background-color: #f1f5ff;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: left;
  justify-content: left;
  margin-top: 0.5rem;
  position: relative;
`;

//제품 등록 상세 문의가 필요하신가요?
const ModalText = styled.p`
  color: #2b66f6;
  margin: 0;
  text-align: left;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const HelpIcon = styled(LiveHelpOutlinedIcon)`
  font-size: 0.8rem;
  color: #b5cdfa;
  margin-left: 0.5rem;
`;

const HelpIconHovered = styled(LiveHelpIcon)`
  font-size: 0.8rem;
  color: #b5cdfa;
  margin-left: 0.5rem;
`;

const ModalWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 388px;
  height: 164px;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const ModalContent = styled.div`
  padding: 1rem;
`;

const ModalRow = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: black;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const iconStyles = `
  font-size: 1.2rem;
  background-color: #b5cdfa;
  color: #2b66f6;
  margin-right: 0.5rem;
  border-radius: 50%;
  padding: 0.2rem;
`;

const StyledHouseIcon = styled(HouseIcon)`
  ${iconStyles}
`;

const StyledLocalPhoneIcon = styled(LocalPhoneIcon)`
  ${iconStyles}
`;

const StyledChatBubbleIcon = styled(ChatBubbleIcon)`
  ${iconStyles}
`;

const StyledEmailIcon = styled(EmailIcon)`
  ${iconStyles}
`;

//기업명

const InputLabel = styled.label`
  color: black;
  font-size: 1rem;
  display: block;
  text-align: left;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  margin-left: 1.5rem;
  font-weight: bold;
`;

const InputContainer = styled.div`
  background-color: white;
  border: 2px solid
    ${({ focused, isValid }) =>
      isValid ? '#2b66f6' : focused ? '#B5CDFA' : '#d0d0d0'};
  border-radius: 0.5rem;
  padding: 1.3rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-size: 0.9rem;
  color: ${({ onFocus }) => (onFocus ? '#434343' : '#797979')};
  font-weight: bold;

  &::placeholder {
    color: #797979;
  }
`;

//본사주소

const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const AddressInputContainer = styled(InputContainer)`
  flex: 2;
  margin-right: 10px;
`;

const AddressSearchButton = styled.button`
  flex: 1;
  border: none;
  margin-top: 1rem;
  width: 50%;
  height: 65px;
  background-color: #2b66f6;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #164ac9;
  }
`;

//제조사

//자사쇼핑몰운영여부
const YesNoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const YesNoButton = styled.button`
  width: 50%;
  height: 50px;
  border-radius: 2rem;
  text-align: center;
  background-color: ${props => (props.operationStatus ? '#2b66f6' : '#ffffff')};
  color: ${props => (props.operationStatus ? '#ffffff' : '#434343')};
  border: ${props => (props.operationStatus ? 'none' : '1px solid #B5CDFA')};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: bold;

  &:hover {
    background-color: ${props =>
      props.operationStatus ? '#164ac9' : '#B5CDFA'};
  }
`;
//자사쇼핑몰 주소

//제품 등록 파일 업로드

//문의하기 버튼

const ContactButton = styled(YesNoButton)`
  width: 100%;
  margin-top: 1rem;
  height: 60px;
  background-color: #2b66f6;
  color: #ffffff;
  margin-top: 3rem;
  margin-bottom: 3rem;

  &:hover {
    background-color: #164ac9;
  }
`;
