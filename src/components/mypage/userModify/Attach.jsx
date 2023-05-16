import React from 'react';
import styled from 'styled-components';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export default function Attach({ userInfo }) {
  // 파일첨부
  const handleFile = (e, string) => {
    console.log(e.target.files);
    alert(`${string} 첨부가 완료되었습니다.`);
  };
  return (
    <AttachSection>
      {userInfo ? (
        <Div>
          {userInfo?.bussinessLicense ? (
            <>
              {/* 사업자등록증첨부 전 */}
              <LargeP>
                <ColorLarge>세금계산서</ColorLarge>발행이 필요하신가요?
              </LargeP>
              <FileLabel htmlFor="file">사업자등록증 첨부</FileLabel>
              <File
                type="file"
                id="file"
                onChange={e => handleFile(e, '사업자등록증')}
              />
            </>
          ) : (
            <>
              {/* 사업자등록증첨부 완료 */}
              <LargeP>
                UserName 님! <ColorLarge>사업자등록증</ColorLarge>이
                등록되었습니다.
              </LargeP>
              <FileSection>
                <BussinessLicense>사업자등록증</BussinessLicense>
                <DateSection>
                  <p>등록일자</p>
                  <Date>2023.05.16</Date>
                </DateSection>
                <FileName>FileName</FileName>
                <MoreBtn>
                  자세히 보기
                  <Icon>
                    <MdOutlineArrowForwardIos />
                  </Icon>
                </MoreBtn>
              </FileSection>
            </>
          )}
        </Div>
      ) : (
        <>
          {/* 가입승인대기중 */}
          <LargeP>
            <ColorLarge>추가서류</ColorLarge>를 첨부해주세요.
          </LargeP>
          <SmallP>
            사업자등록증 명의와 회원 이름이 <span />
            일치하지 않아 가입대기 중이에요.
          </SmallP>
          <SmallP>
            <ColorSmall>재직여부를 확인할 수 있는 추가서류</ColorSmall>를
            첨부해주세요.
          </SmallP>
          <FileLabel htmlFor="file">추가첨부서류 업로드</FileLabel>
          <File
            type="file"
            id="file"
            onChange={e => handleFile(e, '추가첨부서류')}
          />
        </>
      )}
    </AttachSection>
  );
}

const AttachSection = styled.form`
  width: 100%;
  ${props => props.theme.variables.flex('column', '', 'center')};
  font-size: 18px;
  margin: 60px auto;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    margin: 30px auto;
    font-size: 16px;
  }
`;

const Div = styled.div`
  width: 100%;
  ${props => props.theme.variables.flex('column', '', 'center')};
`;

const LargeP = styled.p`
  word-break: keep-all;
  text-align: center;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 5px;
  word-break: keep-all;
  transition: 0.3s ease;
`;

const SmallP = styled.p`
  display: block;
  width: 100%;
  word-break: keep-all;
  text-align: center;
  color: #434343;
  font-size: 14px;
  line-height: 1.5;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ColorLarge = styled.span`
  word-break: keep-all;
  text-align: center;
  font-weight: 600;
  color: #2b66f6;
`;

const ColorSmall = styled.span`
  word-break: keep-all;
  text-align: center;
  font-weight: 600;
  color: #434343;
`;

const FileLabel = styled.label`
  width: 100%;
  height: 50px;
  border: 1px solid #2b66f6;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  color: #2b66f6;
  ${props => props.theme.variables.flex('', 'center', 'center')};
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s ease;
  &:hover {
    border: 1px solid #164ac9;
    color: #164ac9;
  }
  @media (max-width: 768px) {
    height: 45px;
    font-size: 14px;
  }
`;

const File = styled.input`
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const FileSection = styled.div`
  width: 90%;
  height: 110px;
  ${props =>
    props.theme.variables.flex('column', 'space-around', 'flex-start')};
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  position: relative;
  transition: 0.3s ease;
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 100px;
    margin: 20px 0;
  }
`;

const BussinessLicense = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #434343;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

const DateSection = styled.div`
  width: 100%;
  ${props => props.theme.variables.flex('', 'flex-start', 'center')};
  margin: 5px 0;
  font-size: 14px;
  color: #434343;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

const Date = styled.p`
  margin-left: 10px;
`;

const FileName = styled.p`
  font-size: 14px;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

const MoreBtn = styled.button`
  font-size: 13px;
  color: #5f5f5f;
  border: 0;
  background-color: transparent;
  position: absolute;
  right: 8%;
  bottom: 15%;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

const Icon = styled.div`
  font-size: 12px;
  position: absolute;
  right: -10%;
  top: 12%;
`;
