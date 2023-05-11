import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function ServiceAgreement({ setCheckService, clickStart }) {
  // 필수 체크 항목
  const [checkRequired, setCheckRequired] = useState({
    requiredValue1: false,
    requiredValue2: false,
  });
  // 서비스정책 내용보기 open 버튼
  const [open, setOpen] = useState({
    first: false,
    second: false,
  });

  // 필수 체크 항목 선택여부 변경
  const hadleRequired = e => {
    if (e.target.checked) {
      setCheckRequired({
        ...checkRequired,
        [e.target.value]: true,
      });
    } else {
      setCheckRequired({
        ...checkRequired,
        [e.target.value]: false,
      });
    }
  };

  // 전체동의 설정
  const handleAllcheck = e => {
    let checkboxList = document.querySelectorAll(
      '.serviceArea input[type="checkbox"]:not(#allChecked)'
    );
    // 전체동의 버튼 checked에 따라 isCheck true/false
    const isCheck = e.target.checked;
    checkboxList.forEach(el => {
      // 해당 요소의 checked 속성을 변경
      el.checked = isCheck;
      // 필수 요소의 checked 속성 변경
      setCheckRequired({
        requiredValue1: isCheck,
        requiredValue2: isCheck,
      });
    });
  };

  // 시작버튼 클릭시, 필수체크 여부 확인
  useEffect(() => {
    if (checkRequired.requiredValue1 && checkRequired.requiredValue2) {
      // console.log('체크완료');
      setCheckService(true);
    } else {
      setCheckService(false);
      // console.log('체크미완료');
    }
  }, [clickStart]);

  // 서비스정책 내용
  const [text, setText] = useState('');
  useEffect(() => {
    if (open.first) {
      fetch('./text/signup_first.txt')
        .then(data => data.text())
        .then(text => setText(text));
    } else if (open.second) {
      fetch('./text/signup_second.txt')
        .then(data => data.text())
        .then(text => setText(text));
    }
  }, [open]);

  return (
    <Container>
      <ServiceTitle>서비스 정책</ServiceTitle>

      <Service className="serviceArea">
        <Label>
          <CheckBox type="checkbox" id="allChecked" onChange={handleAllcheck} />
          전체동의
        </Label>
        <ServiceLine />
        <Label>
          <CheckBox type="checkbox" id="option" value="optionValue1" />
          관리자 승인 후 서비스 이용이 가능합니다.
        </Label>
        <Label>
          <CheckBox
            type="checkbox"
            id="required"
            value="requiredValue1"
            onChange={hadleRequired}
          />
          이용약관 (필수)
          <MoreBtn
            onClick={() => setOpen({ first: !open.first, second: false })}
          >
            내용보기
          </MoreBtn>
          {open.first && (
            <Content
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          )}
        </Label>
        <Label>
          <CheckBox
            type="checkbox"
            id="required"
            value="requiredValue2"
            onChange={hadleRequired}
          />
          개인정보 수집 및 이용 안내 (필수)
          <MoreBtn
            onClick={() => setOpen({ first: false, second: !open.second })}
          >
            내용보기
          </MoreBtn>
          {open.second && (
            <Content
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          )}
        </Label>
        <Label>
          <CheckBox type="checkbox" id="option" value="optionValue2" />
          이벤트/프로모션 등 알림 수신 (선택)
        </Label>
      </Service>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 25px;
`;

const ServiceTitle = styled.p`
  font-size: 20px;
  color: #434343;
  margin-bottom: 15px;
`;

const Service = styled.div`
  width: 100%;
  border: 1px solid #797979;
  border-radius: 10px;
  padding: 10px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #797979;
  margin: 10px 0;
  position: relative;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const CheckBox = styled.input`
  width: 16px;
  height: 16px;
  border: 2px solid #d0d0d0;
  border-radius: 3px;
  margin-right: 5px;
  position: relative;
  &:checked {
    background-color: #2b66f6;
  }
  &:checked::before {
    content: '✔';
    display: inline-block;
    font-size: 10px;
    font-weight: 600;
    color: #fff;
    transition: 0.2s;
    text-align: center;
    position: absolute;
    top: -10%;
    left: 20%;
  }
`;

const ServiceLine = styled.hr`
  width: 100%;
`;

const MoreBtn = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 12px;
  font-weight: 600;
  color: #797979;
  text-decoration: underline;
  cursor: pointer;
  position: absolute;
  top: 5%;
  right: 0;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 200px;
  font-size: 12px;
  font-weight: 500;
  overflow: auto;
  line-height: 1.3;
`;
