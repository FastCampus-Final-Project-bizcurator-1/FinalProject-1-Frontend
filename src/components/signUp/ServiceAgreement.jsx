import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function ServiceAgreement() {
  // 서비스정책 내용보기 open 버튼
  const [open, setOpen] = useState({
    first: false,
    second: false,
  });
  // 체크 개수 세기
  let count = 0;

  // 전체동의 설정
  const handleAllcheck = e => {
    let checkboxList = document.querySelectorAll(
      '.serviceArea input[type="checkbox"]:not(#allChecked)'
    );
    checkboxList.forEach(el => {
      // 해당 요소의 checked 속성을 변경
      el.checked = e.target.checked;
      // 전체동의이므로, count = 4
      count = 4;
    });
  };

  const handleCheck = e => {
    const allCheck = document.getElementById('allChecked');
    if (!e.target.checked) {
      // 체크가 해제되면 => 전체동의도 체크해제
      allCheck.checked = false;
      // 체크 해제되면 => count -1
      count -= 1;
    } else {
      // 체크 되면 => count +1
      count += 1;
    }
    // 모든 옵션 선택되면 => 전체동의도 체크
    if (count === 4) {
      allCheck.checked = true;
    }
    // 필수 항목이면 value 설정
    if (e.required) {
      e.target.value = 'done';
    }
  };

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
          <CheckBox required type="checkbox" onChange={handleCheck} />
          관리자 승인 후 서비스 이용이 가능합니다. (필수)
        </Label>
        <Label>
          <CheckBox required type="checkbox" onChange={handleCheck} />
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
          <CheckBox required type="checkbox" onChange={handleCheck} />
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
          <CheckBox type="checkbox" onChange={handleCheck} />
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
