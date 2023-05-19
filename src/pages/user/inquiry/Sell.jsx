import React, { useState } from 'react';
import styled from 'styled-components';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import HouseIcon from '@mui/icons-material/House';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import EmailIcon from '@mui/icons-material/Email';
import DaumPostCode from 'react-daum-postcode';
import AttachedIcon from '@mui/icons-material/AttachFile';
import DownloadIcon from '@mui/icons-material/Download';

const Sell = () => {
  const [isHovered, setIsHovered] = useState(false); //제품 등록 상세 문의가 필요하신가요? 호버창
  const [companyName, setCompanyName] = useState(''); //기업명
  const [companyBaseAddress, setCompanyBaseAddress] = useState(''); //기업 기본 주소
  const [postalCode, setPostalCode] = useState(''); //우편번호
  const [companyFullAddress, setCompanyFullAddress] = useState(''); //기업 상세 주소
  const [isDaumPost, setIsDaumPost] = useState(false); //다음 주소 API 모달창
  const [addressFocused, setAddressFocused] = useState(false);
  const [manufacturer, setManufacturer] = useState(''); //제조사
  const [manufacturerFocused, setManufacturerFocused] = useState(false);
  const [shoppingMallAddress, setShoppingMallAddress] = useState(''); //자사 쇼핑몰 주소
  const [shoppingMallAddressFocused, setShoppingMallAddressFocused] =
    useState(false);
  const [productRegistrationFile, setProductRegistrationFile] = useState(null); //제품 등록파일 업로드
  const [inputFocused, setInputFocused] = useState(false); //작성 여부
  const [isOperating, setIsOperating] = useState(null); //예/아니오 버튼 클릭 여부
  const [showMallAddress, setShowMallAddress] = useState(false); //자사 쇼핑몰 주소 노출 여부
  const [file, setFile] = useState(null); //파일 업로드

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

  const handleOpenPost = () => {
    setIsDaumPost(true); //다음 주소 API 모달창 열기
  };

  const handleButtonClick = operationStatus => {
    //예/아니오 버튼 클릭 시
    setIsOperating(operationStatus);
    setShowMallAddress(operationStatus);
  };

  const handleFileButtonClick = () => {
    // 파일 입력 버튼 클릭 시 input 요소 클릭
    const fileInput = document.getElementById('fileInput');
    fileInput.click(); //파일 업로드 버튼 클릭
  };

  const handleAddress = data => {
    //다음 주소 API 모달창에서 주소 선택 시
    let postalCodes = data.zonecode; //우편번호
    let AllAddress = data.address; //기업 기본 주소
    let extraAddress = ''; //기업 상세 주소

    if (data.addressType === 'R') {
      //도로명 주소일 경우
      if (data.bname !== '') {
        //법정동명이 있을 경우 추가
        extraAddress += data.bname; //법정동명
      }
      if (data.buildingName !== '') {
        //건물명이 있을 경우 추가
        extraAddress += //법정동명 + 건물명
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName; //법정동명 + 건물명
      }
      AllAddress += extraAddress !== '' ? ` (${extraAddress})` : ''; //기업 기본 주소 + 기업 상세 주소
    }

    setPostalCode(postalCodes); //우편번호
    setCompanyBaseAddress(AllAddress); //기업 기본 주소
  };

  const handleFileChange = e => {
    // 파일 업로드
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleClick = () => {
    // 제품 일괄등록양식 다운로드
    window.open(
      'https://form.office.naver.com/form/responseView.cmd?formkey=Yzc2NWRmNjktNzgyZC00MzRjLWJhZjUtMzc4M2Q2ZjZjNDlk&sourceId=urlshare',
      '_blank'
    );
  };

  const handleContactClick = () => {
    // 문의하기 버튼 클릭 시 다른 페이지로 이동. (수정필요) 현재는 console.log만
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
            (!inputFocused && !companyName) || window.innerWidth <= 480
              ? '사업자 등록증과 일치하는 기업명을 입력'
              : '사업자 등록증과 일치하는 기업명을 입력해주세요'
          }
        />
      </InputContainer>
      <InputLabel>본사 주소 *</InputLabel>
      <AddressContainer>
        <AddressInputContainer focused={addressFocused}>
          <Input
            value={postalCode} //우편번호
            readOnly
            onChange={handleInputChange(setPostalCode)}
            onFocus={() => setAddressFocused(true)}
            onBlur={() => setAddressFocused(false)}
            placeholder=""
          />
        </AddressInputContainer>
        <AddressSearchButton onClick={handleOpenPost}>
          주소 검색
        </AddressSearchButton>
      </AddressContainer>
      <div>
        {isDaumPost ? (
          <StyledDaumPostCode
            onComplete={handleAddress}
            autoClose
            isDaumPost={isDaumPost}
          />
        ) : null}
      </div>
      <AddressContainer>
        <AddressInputContainer focused={addressFocused}>
          <Input
            value={companyBaseAddress} //기본주소
            readOnly
            onChange={handleInputChange(setCompanyBaseAddress)}
            onFocus={() => setAddressFocused(true)}
            onBlur={() => setAddressFocused(false)}
            placeholder="기본 주소를 입력하세요"
          />
        </AddressInputContainer>
      </AddressContainer>
      <AddressContainer>
        <AddressInputContainer focused={addressFocused}>
          <Input
            value={companyFullAddress} //상세주소
            onChange={handleInputChange(setCompanyFullAddress)}
            onFocus={() => setAddressFocused(true)}
            onBlur={() => setAddressFocused(false)}
            placeholder="상세 주소를 입력하세요"
          />
        </AddressInputContainer>
      </AddressContainer>
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
      <InputLabel>제품 등록 파일 업로드 </InputLabel>
      <UploadText>
        *여러 제품을 한번에 등록하시려면, 양식을 다운로드하신 후 첨부해주세요{' '}
      </UploadText>
      <FileInputButton onClick={handleFileButtonClick} file={file}>
        {file ? (
          <FileName>{file.name}</FileName>
        ) : (
          <>
            파일 첨부 <StyledAttachedIcon />
          </>
        )}
        <FileInput id="fileInput" type="file" onChange={handleFileChange} />
      </FileInputButton>
      <FileDownloadButton onClick={handleClick}>
        <>
          제품 일괄 등록 양식 다운로드 <StyledDownloadIcon />
        </>
      </FileDownloadButton>
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

  @media (max-width: 480px) {
    padding: 1rem;
    justify-content: space-around;
    flex-direction: column;
  }
`;

const Text = styled.div`
  font-size: 1.7rem;
  font-weight: 550;
  margin-right: 1rem;
  color: #181818;
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    justify-content: space-around;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    margin-right: -2.5rem;
    font-size: 1.5rem;
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

  @media (max-width: 1024px) {
    width: 115%;
    justify-content: space-around;
    flex-direction: column;
    margin-left: -3.5rem;
  }

  @media (max-width: 768px) {
    width: 135%;
    justify-content: space-around;
    flex-direction: column;
    margin-left: -2.5rem;
  }

  @media (max-width: 480px) {
    justify-content: space-around;
    flex-direction: column;
    width: 175%;
    margin-left: -5.5rem;
  }
`;

//제품 등록 상세 문의가 필요하신가요?
const ModalText = styled.p`
  color: #2b66f6;
  margin: 0;
  text-align: left;
  display: flex;
  align-items: center;
  font-weight: bold;

  @media (max-width: 768px) {
    justify-content: space-around;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    justify-content: space-around;
    flex-direction: column;
  }
`;

const HelpIcon = styled(LiveHelpOutlinedIcon)`
  font-size: 0.8rem;
  color: #b5cdfa;
  margin-left: 0.5rem;

  @media (max-width: 480px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

const HelpIconHovered = styled(LiveHelpIcon)`
  font-size: 0.8rem;
  color: #b5cdfa;
  margin-left: 0.5rem;

  @media (max-width: 480px) {
    justify-content: flex-start;
    flex-direction: column;
  }
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

  @media (max-width: 480px) {
    justify-content: space-around;
    flex-direction: column;
    width: 80%;
    height: 200px;
    align-items: center;
    margin-left: 6rem;
  }
`;

const ModalContent = styled.div`
  padding: 1rem;

  @media (max-width: 480px) {
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }
`;

const ModalRow = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #181818;
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    justify-content: space-around;
    flex-direction: column;
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
  color: #434343;
  font-size: 1rem;
  display: block;
  text-align: left;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  margin-left: 1.5rem;
  font-weight: bold;

  @media (max-width: 1024px) {
    width: 115%;
    justify-content: space-around;
    flex-direction: column;
    margin-left: -3.5rem;
  }

  @media (max-width: 768px) {
    width: 135%;
    justify-content: space-around;
    flex-direction: column;
    margin-left: -2rem;
  }

  @media (max-width: 480px) {
    justify-content: space-around;
    flex-direction: column;
    width: 175%;
    margin-left: -5.5rem;
  }
`;

const InputContainer = styled.div`
  background-color: white;
  border: 2px solid
    ${({ focused, isValid }) =>
      isValid ? '#2b66f6' : focused ? '#B5CDFA' : '#d0d0d0'};
  border-radius: 0.5rem;
  padding: 1.3rem;
  margin-top: 1rem;

  @media (max-width: 1024px) {
    width: 115%;
    justify-content: space-around;
    flex-direction: column;
    margin-left: -3.5rem;
  }

  @media (max-width: 768px) {
    width: 135%;
    justify-content: space-around;
    flex-direction: column;
    margin-left: -2rem;
  }

  @media (max-width: 480px) {
    justify-content: space-around;
    flex-direction: column;
    width: 175%;
    margin-left: -5.5rem;
  }
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

  @media (max-width: 1024px) {
    width: 118%;
    justify-content: space-around;
    margin-left: -3.5rem;
  }

  @media (max-width: 768px) {
    width: 135%;
    justify-content: space-around;
    margin-left: -2rem;
  }

  @media (max-width: 480px) {
    justify-content: space-around;
    width: 175%;
    margin-left: -5.5rem;
  }
`;

const AddressInputContainer = styled(InputContainer)`
  flex: 2;
  margin-right: 10px;

  @media (max-width: 1024px) {
    flex: 2;
    width: 100%;
    justify-content: space-around;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    flex: 2;
    width: 100%;
    justify-content: space-around;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    flex: 2;
    justify-content: space-around;
    width: 100%;
    margin-left: 0;
  }
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

  @media (max-width: 1024px) {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    justify-content: space-around;
    flex-direction: column;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    justify-content: space-around;
    flex-direction: column;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    margin-left: 0;
  }
`;

const StyledDaumPostCode = styled(DaumPostCode)`
  position: 'absolute';
  top: 0;
  left: 0;
  width: 100%;
  align-items: 'center';
  justify-content: 'center';
  line-height: '400px';
  border: '1px solid #000000';
  overflow: 'hidden';

  @media (max-width: 480px) {
    justify-content: space-around;
    width: 220%;
    margin-left: -2rem;
  }
`;

//제조사

//자사쇼핑몰운영여부
const YesNoContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 1024px) {
    display: flex;
    width: 110%;
    margin-left: -3rem;
    justify-content: space-around;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 135%;
    justify-content: space-around;
    margin-left: -2rem;
  }

  @media (max-width: 480px) {
    display: flex;
    width: 170%;
    align-items: center;
    margin-left: -5rem;
  }
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

const UploadText = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  color: black;
  text-align: left;
  margin-top: 0;
  margin-left: 1.5rem;
  white-space: nowrap;

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
    justify-content: space-around;
    margin-left: -2rem;
    font-size: 0.7rem;
  }

  @media (max-width: 768px) {
    width: 125%;
    text-align: center;
    justify-content: space-around;
    margin-left: -3rem;
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    width: 150%;
    text-align: center;
    justify-content: space-around;
    margin-left: -5rem;
    font-size: 0.6rem;
  }
`;

const FileInputButton = styled(InputContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 2px solid ${({ file }) => (file ? '#2b66f6' : '#d0d0d0')};
  border-radius: 0.5rem;
  padding: 1.3rem;
  margin-top: 1rem;
  gap: 0.5rem;
  cursor: pointer;
  color: #797979;
  font-weight: bold;
  text-align: left;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: #b5cdfa;
  }

  @media (max-width: 1024px) {
    justify-content: space-around;
    flex-direction: row;
  }

  @media (max-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
  }

  @media (max-width: 480px) {
    justify-content: space-around;
    flex-direction: row;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileName = styled.span`
  font-size: 0.9rem;
  color: #434343;
  margin-left: 1rem;
  font-weight: bold;
`;

const StyledAttachedIcon = styled(AttachedIcon)`
  margin-left: 0.5rem;
  color: #b5cdfa;

  @media (max-width: 1024px) {
    justify-content: space-around;
    flex-direction: inline-block;
  }

  @media (max-width: 768px) {
    justify-content: space-around;
    flex-direction: inline-block;
  }

  @media (max-width: 480px) {
    justify-content: space-around;
    flex-direction: inline-block;
  }
`;

//제품 일괄양식 다운로드
const FileDownloadButton = styled(InputContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 2px solid #b5cdfa;
  border-radius: 0.5rem;
  padding: 1.3rem;
  margin-top: 1rem;
  gap: 0.5rem;
  cursor: pointer;
  color: #000000;
  font-weight: bold;
  text-align: center;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: #2b66f6;
  }

  @media (max-width: 1024px) {
    justify-content: space-around;
    flex-direction: row;
  }

  @media (max-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
  }

  @media (max-width: 480px) {
    justify-content: space-around;
    flex-direction: row;
  }
`;

const StyledDownloadIcon = styled(DownloadIcon)`
  margin-left: 0.5rem;
  color: #b5cdfa;

  @media (max-width: 1024px) {
    justify-content: space-around;
    flex-direction: inline-block;
  }

  @media (max-width: 768px) {
    justify-content: space-around;
    flex-direction: inline-block;
  }

  @media (max-width: 480px) {
    justify-content: space-around;
    flex-direction: inline-block;
  }
`;
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

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
    justify-content: space-around;
  }

  @media (max-width: 768px) {
    width: 125%;
    text-align: center;
    justify-content: space-around;
    margin-left: -1rem;
  }

  @media (max-width: 480px) {
    width: 145%;
    text-align: center;
    justify-content: space-around;
    margin-left: -3rem;
  }
`;
