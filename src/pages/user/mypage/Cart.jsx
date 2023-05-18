import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CartCount from '../../../components/mypage/CartCount';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../../../helper/formatNumber';

export default function Cart() {
  // 경로이동
  const navigate = useNavigate();
  // 사용자id
  const [userId, setUserId] = useState();
  // 장바구니상품
  const [cartList, setCartList] = useState();
  // 장바구니 count
  const [productCount, setProductCount] = useState(0);
  // 장바구니 check 여부
  const [isCheck, setIsCheck] = useState({ allCheck: true });
  // 구매상품 선택 개수
  const [length, setLength] = useState(0);
  // window 크기
  const [width, setWidth] = useState(window.innerWidth);
  // 결제금액
  const [charge, setCharge] = useState(0);

  const allCheck = document.getElementById('allChecked');
  const checkboxList = document.querySelectorAll(
    'input[type="checkbox"]:not(#allChecked)'
  );

  // width 변경 => "<" 아이콘 추가
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  // 장바구니요청
  useEffect(() => {
    fetch('/mock/user/cart.json')
      .then(res => res.json())
      .then(data => {
        setUserId(data.user_id);
        setCartList(data.cart);
      });
  }, []);

  // 전체 선택 버튼 설정
  const handleAllcheck = e => {
    e.target.checked ? setLength(cartList.length) : setLength(0);
    setIsCheck({ allCheck: allCheck.checked });
    checkboxList.forEach(el => {
      // 해당 요소의 checked 속성을 변경
      el.checked = e.target.checked;
    });
  };

  // 개별 선택 설정
  const handleCheck = e => {
    let checkNum = 0;
    if (!e.target.checked) {
      // 체크가 해제되면 => 전체 선택 해제
      allCheck.checked = false;
      setIsCheck({ ...isCheck, [e.target.id]: false, allCheck: false });
      setLength(length - 1);
    } else {
      setIsCheck({ ...isCheck, [e.target.id]: true });
      setLength(length + 1);
    }
    // 개별 선택 시 => 전체 선택 확인
    checkboxList.forEach(el => {
      if (el.checked) {
        checkNum = checkNum + 1;
      } else {
        checkNum = checkNum - 1;
      }
    });
    if (checkNum === cartList.length) {
      allCheck.checked = true;
      setIsCheck({ ...isCheck, allCheck: true });
    }
  };

  // 총 결제 금액 계산
  useEffect(() => {
    let money = 0;
    if (isCheck.allCheck) {
      if (cartList) {
        setLength(cartList.length);
        cartList.forEach(el => {
          money += el.count * el.product_price;
        });
      }
    } else {
      checkboxList.forEach(checkbox => {
        if (checkbox.id !== 'allCheck') {
          if (checkbox.checked) {
            cartList.forEach(el => {
              if (el.id === parseInt(checkbox.id)) {
                money += el.count * el.product_price;
              }
            });
          }
        }
      });
    }
    setCharge(money);
  }, [isCheck, cartList, productCount, checkboxList]);

  console.log(isCheck);

  return (
    <Wrapper bin={cartList === undefined}>
      <Article>
        {width <= 768 && (
          <Icon onClick={() => navigate('/mypage')}>
            <IoIosArrowBack />
          </Icon>
        )}
        장바구니
      </Article>
      <SelectContainer>
        {/* 전체 선택 버튼 */}
        <Label>
          <CheckBox
            type="checkbox"
            id="allChecked"
            onChange={handleAllcheck}
            defaultChecked
          />
          전체선택
        </Label>
        {/* 선택 상품 삭제 */}
        <Label button={true}>선택 상품 삭제</Label>
      </SelectContainer>
      {/* 장바구니 상품 */}
      {cartList &&
        cartList.map(cart => (
          <Container key={cart.id}>
            {/* 관심상품 info */}
            <Top>
              <DeliveryDate>
                지금 주문시 {cart.delivery_date}일 이내 도착!
              </DeliveryDate>
              {/* 개별 선택 버튼 */}
              <CheckBox
                type="checkbox"
                id={cart.id}
                onChange={handleCheck}
                defaultChecked
              />
            </Top>
            <Middle>
              <Img src={`${cart.product_img}`} alt={cart.product_name} />
              <ProductInfo>
                <ProductName>
                  {cart.product_name.length >= 40
                    ? cart.product_name.substr(0, 40) + '...'
                    : cart.product_name}
                </ProductName>
                <Manufacturer>{cart.manufacturer}</Manufacturer>
              </ProductInfo>
            </Middle>
            <CartCount
              setProductCount={setProductCount}
              productCount={productCount}
              cart={cart}
            />
          </Container>
        ))}
      <ChargeContainer>
        <ChargePrice>총 {formatNumber(charge)}원</ChargePrice>
        <ChargeBtn>구매하기 ({length})</ChargeBtn>
      </ChargeContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: ${props => (props.bin ? '100vh' : '100%')};
  background-color: #f5f5f5;
`;

const Article = styled.div`
  width: 100%;
  height: 80px;
  ${props => props.theme.variables.flex('', 'center', 'center')};
  background-color: #fff;
  font-size: 24px;
  font-weight: 600;
  color: #2b66f6;
  margin: 0 auto;
  border-bottom: 1px solid #f1f5ff;
  position: sticky;
  top: 0;
  z-index: 1;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    height: 50px;
    font-size: 18px;
    color: #fff;
    background-color: #2b66f6;
  }
`;

const SelectContainer = styled.div`
  width: 100%;
  height: 50px;
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  background-color: #fff;
  color: #797979;
  border-bottom: 1px solid #f1f5ff;
  margin: 0 auto 20px;
  padding: 0 30%;
  position: sticky;
  top: 80px;
  z-index: 1;
  box-shadow: 0px 3px 3px #f1f5ff;
  @media (max-width: 1024px) {
    padding: 0 10%;
  }
  @media (max-width: 768px) {
    height: 40px;
    padding: 0 3%;
    top: 50px;
  }
`;

const Label = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  font-size: 13px;
  cursor: ${props => (props.button ? 'pointer' : '')};
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Icon = styled.div`
  font-size: 24px;
  position: absolute;
  left: 3%;
  cursor: pointer;
  :hover {
    color: #b5cdfa;
  }
`;

const CheckBox = styled.input`
  width: 18px;
  height: 18px;
  border: 2px solid #b5cdfa;
  border-radius: 100%;
  margin-right: 5px;
  position: relative;
  &:checked {
    border: 0;
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
    top: 10%;
    left: 28%;
  }
  @media (max-width: 480px) {
    width: 15px;
    height: 15px;
    &:checked::before {
      top: 4%;
      left: 20%;
    }
  }
`;

const Container = styled.div`
  width: 45%;
  height: 230px;
  ${props => props.theme.variables.flex('column', 'space-evenly', 'center')};
  margin: 0 auto 20px;
  border-radius: 15px;
  background-color: #fff;
  transition: 0.3s ease;
  position: relative;
  @media (max-width: 1024px) {
    width: 80%;
    height: 200px;
  }
  @media (max-width: 480px) {
    width: 95%;
  }
`;

const Top = styled.div`
  width: 90%;
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
`;

const Middle = styled.div`
  width: 90%;
  height: 50%;
  ${props => props.theme.variables.flex('', 'space-between', 'flex-start')};
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DeliveryDate = styled.p`
  font-size: 12px;
  color: #2b66f6;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Img = styled.img`
  width: 120px;
  height: 100%;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  background-color: #fff;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 100px;
  }
  @media (max-width: 480px) {
    width: 85px;
    height: 85px;
  }
`;

const ProductInfo = styled.div`
  text-overflow: ellipsis;
  width: 70%;
  height: 100%;
  line-height: 1.3;
  @media (max-width: 768px) {
    width: 60%;
  }
`;

const ProductName = styled.p`
  color: #181818;
  margin-bottom: 5px;
  transition: 0.3s ease;
`;

const Manufacturer = styled.p`
  color: #797979;
  transition: 0.3s ease;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const ChargeContainer = styled.div`
  width: 45%;
  height: 100px;
  ${props => props.theme.variables.flex('', 'space-evenly', 'center')};
  border-radius: 10px 10px 0 0;
  margin: 30px auto 0;
  background-color: #fff;
  position: sticky;
  bottom: 0;
  box-shadow: 0px -3px 3px #f1f5ff;
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 95px;
    border-radius: 0;
  }
  @media (max-width: 480px) {
    height: 85px;
  }
`;

const ChargePrice = styled.p`
  color: #181818;
  font-size: 18px;
  font-weight: 600;
`;

const ChargeBtn = styled.button`
  width: 45%;
  height: 50px;
  border: 0;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #2b66f6;
  transition: 0.3s ease;
  &:hover {
    background-color: #164ac9;
  }
  @media (max-width: 768px) {
    width: 40%;
    height: 45px;
    font-size: 14px;
  }
`;
