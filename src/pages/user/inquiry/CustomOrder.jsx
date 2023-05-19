import React, { useState } from 'react';
import styled from 'styled-components';
import AttachedIcon from '@mui/icons-material/AttachFile'; //이미지 첨부
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'; //요청사항 작성
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'; //캘린더
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const CustomOrder = () => {
  const [productName, setProductName] = useState(''); //구매 희망 제품
  const [productNameFocused, setProductNameFocused] = useState(false);
  const [purchaseQuantity, setPurchaseQuantity] = useState(''); //구매 수량
  const [purchaseQuantityFocused, setPurchaseQuantityFocused] = useState(false);
  const [imageFiles, setImageFiles] = useState([]); //제품 이미지 첨부
  const [request, setRequest] = useState(defaultText); // 요청사항 작성
  const [requestFocused, setRequestFocused] = useState(false);
  const [date, setDate] = useState(''); //견적수령 희망일
  const [deliveryDate, setDeliveryDate] = useState(''); //제품 배송 희망일

  const handleInputChange = setFunc => e => {
    //input 요소 값 변경
    setFunc(e.target.value);
  };

  const handleFileButtonClick = () => {
    // 파일 입력 버튼 클릭 시 input 요소 클릭
    if (imageFiles.length >= 5) {
      alert('최대 5개의 파일만 첨부 가능합니다.');
    } else {
      const fileInput = document.getElementById('fileInput');
      fileInput.click();
    }
  };

  const handleFileChange = e => {
    // 파일 업로드
    const selectedFiles = Array.from(e.target.files);
    setImageFiles([
      ...imageFiles,
      ...selectedFiles.slice(0, 5 - imageFiles.length),
    ]);
  };

  const handleDeleteFile = index => {
    //파일 삭제
    setImageFiles(imageFiles.filter((_, i) => i !== index));
  };

  const handleContactClick = () => {
    // 문의하기 버튼 클릭 시 다른 페이지로 이동. (수정필요) 현재는 console.log만
    console.log('Contact button clicked');
  };

  return (
    <Container>
      <InputLabel> 구매 희망 제품 </InputLabel>
      <InputContainer focused={productNameFocused}>
        <Input
          value={productName}
          onChange={handleInputChange(setProductName)}
          onFocus={() => setProductNameFocused(true)}
          onBlur={() => setProductNameFocused(false)}
          placeholder="구매를 원하시는 제품명을 입력해주세요. "
        />
      </InputContainer>
      <InputLabel> 구매 수량 </InputLabel>
      <InputContainer focused={purchaseQuantityFocused}>
        <Input
          value={purchaseQuantity}
          onChange={handleInputChange(setPurchaseQuantity)}
          onFocus={() => setPurchaseQuantityFocused(true)}
          onBlur={() => setPurchaseQuantityFocused(false)}
          placeholder="구매 예상 수량을 작성해주세요. (예시 40박스)"
        />
      </InputContainer>
      <InputLabel> 제품 이미지 첨부 </InputLabel>
      <UploadText>
        유사 컨셉의 제품 혹은 현재 사용 중인 제품 이미지를 첨부해주세요 (최대
        5개){' '}
      </UploadText>
      <FileInputButton
        onClick={handleFileButtonClick}
        file={imageFiles.length > 0}
      >
        파일 첨부 <StyledAttachedIcon />
        <FileInput id="fileInput" type="file" onChange={handleFileChange} />
      </FileInputButton>
      <FileDisplayContainer>
        {imageFiles.map((file, index) => (
          <FileCard key={index}>
            <FileName>{file.name}</FileName>
            <DeleteButton onClick={() => handleDeleteFile(index)}>
              <HighlightOffIcon style={{ marginBottom: '-0.5rem' }} />
            </DeleteButton>
          </FileCard>
        ))}
      </FileDisplayContainer>
      <InputLabel>
        요청사항 작성 <StyledInfoOutlinedIcon />
      </InputLabel>
      <InfoContainer>
        <InfoText>
          상세 요청사항이 있다면 알려주세요.
          <br />
          <br />
          상세 요청사항을 작성하시면 최대한 일치하는 조건의 제품 견적을 받을
          확률이 높아집니다.
        </InfoText>
      </InfoContainer>
      <TextAreaContainer focused={requestFocused}>
        <TextArea
          value={request}
          onChange={handleInputChange(setRequest)}
          onFocus={() => setRequestFocused(true)}
          onBlur={() => setRequestFocused(false)}
        />
      </TextAreaContainer>
      <DateDisplayContainer>
        <SectionContainer>
          <DateLabel>견적 수령 희망일</DateLabel>
          <DateText>비교견적을 받아보고 싶은 날짜를 선택해 주세요. </DateText>
          <DateInputContainer>
            <StyledCalendarTodayOutlinedIcon />
            <DateInput
              type="text"
              placeholder="YYYY-MM-DD"
              value={date}
              onChange={handleInputChange(setDate)}
            />
          </DateInputContainer>
        </SectionContainer>
        <SectionContainer>
          <DateLabel>제품 배송 희망일</DateLabel>
          <DateText>
            거래 확정 후, 희망 납품(예상)일 / 기한을 작성해 주세요.
          </DateText>
          <DateInputContainer>
            <StyledCalendarTodayOutlinedIcon />
            <DateInput
              type="text"
              placeholder="YYYY-MM-DD"
              value={deliveryDate}
              onChange={handleInputChange(setDeliveryDate)}
            />
          </DateInputContainer>
        </SectionContainer>
      </DateDisplayContainer>
      <ContactButton onClick={handleContactClick}>문의하기</ContactButton>
    </Container>
  );
};

export default CustomOrder;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

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

//제품 이미지 첨부

const UploadText = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  color: #797979;
  text-align: left;
  margin-top: 0;
  margin-left: 1.5rem;
  white-space: nowrap;

  @media (max-width: 1024px) {
    margin-left: -3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.6rem;
    margin-left: -2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.5rem;
    margin-left: -5.5rem;
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
`;

const FileDisplayContainer = styled.div`
  display: column;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
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

const FileCard = styled.div`
  border: 1px solid #d0d0d0;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
`;

const DeleteButton = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;
  color: #b5cdfa;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;

  &:hover {
    color: #2b66f6;
  }
`;

//요청사항 작성

const StyledInfoOutlinedIcon = styled(InfoOutlinedIcon)`
  color: #b5cdfa;
  margin-bottom: -0.5rem;
`;

const defaultText = `1. 성분 : \n` + `2. 색상 :  \n` + `3. 기타 요청사항 : `;

const InfoContainer = styled(InputContainer)`
  background-color: #f5f5f5;
  margin-top: 1rem;
`;

const InfoText = styled.p`
  font-size: 0.8rem;
  color: #797979;
  text-align: left;
  margin: 0;
  padding: 0.5rem;
  white-space: pre-line;
`;

const TextAreaContainer = styled(InputContainer)`
  white-space: pre-wrap;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 8rem;
  border: none;
  background: transparent;
  outline: none;
  font-size: 0.9rem;
  color: #797979;
  white-space: pre-wrap;
  resize: auto;
`;

//날짜 선택
const DateDisplayContainer = styled(InputContainer)`
  display: flex;
  border: none;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-between;
`;

const SectionContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  border: none;
  padding: 0;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1024px) {
    justify-content: space-around;
    flex-direction: column;
    margin-right: 0;
  }

  @media (max-width: 768px) {
    justify-content: space-around;
    flex-direction: column;
    margin-right: 0;
  }

  @media (max-width: 480px) {
    justify-content: space-around;
    flex-direction: column;
    margin-right: 0;
  }
`;

const DateLabel = styled.label`
  font-size: 0.9rem;
  color: #434343;
  text-align: left;
  margin: 0;
  padding: 0.5rem;
  font-weight: 550;
  white-space: nowrap;
`;

const DateText = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  color: #797979;
  text-align: left;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: 0.6rem;
  }

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

const StyledCalendarTodayOutlinedIcon = styled(CalendarTodayOutlinedIcon)`
  color: #b5cdfa;
  margin-left: 0.2rem;
  margin-right: 0.5rem;
`;

const DateInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid ${({ focused }) => (focused ? '#B5CDFA' : '#d0d0d0')};
  border-radius: 0.5rem;
  padding: 1.3rem;
  margin-top: 1rem;
  cursor: pointer;
`;

const DateInput = styled.input`
  flex: 1;
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

//문의하기 버튼

const ContactButton = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 1rem;
  border-radius: 2rem;
  text-align: center;
  border: none;
  background-color: #2b66f6;
  color: #ffffff;
  margin-top: 3rem;
  margin-bottom: 3rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: bold;

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
