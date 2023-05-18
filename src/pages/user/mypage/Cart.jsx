import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CartCount from '../../../components/mypage/CartCount';
import CheckProduct from '../../../components/mypage/CheckProduct';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  // 경로이동
  const navigate = useNavigate();
  // 사용자id
  const [userId, setUserId] = useState();
  // 장바구니상품
  const [cartList, setCartList] = useState();
  // 장바구니 count
  const [productCount, setProductCount] = useState();
  // 장바구니 check 여부
  const [isCheck, setIsCheck] = useState({});
  // 구매상품 선택 개수
  const [length, setLength] = useState(0);
  // window 크기
  const [width, setWidth] = useState(window.innerWidth);

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

  return (
    <Wrapper>
      <Article>
        {width <= 768 && (
          <Icon onClick={() => navigate('/mypage')}>
            <IoIosArrowBack />
          </Icon>
        )}
        장바구니
      </Article>
      {/* 장바구니 상품 */}
      {cartList &&
        cartList.map(cart => (
          <Container key={cart.id}>
            {/* 관심상품 info */}
            <Top>
              <DeliveryDate>
                지금 주문시 {cart.delivery_date}일 이내 도착!
              </DeliveryDate>
              {/* check 버튼 */}
              <CheckProduct
                productId={cart.id}
                setIsCheck={setIsCheck}
                isCheck={isCheck}
                setLength={setLength}
                length={length}
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
              initialCount={cart.count}
              productPrice={cart.product_price}
              productId={cart.id}
              productCount={productCount}
            />
          </Container>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;

const Article = styled.div`
  width: 100%;
  height: 100px;
  ${props => props.theme.variables.flex('', 'center', 'center')};
  background-color: #fff;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #2b66f6;
  margin: 0 auto 20px;
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

const Icon = styled.div`
  font-size: 24px;
  position: absolute;
  left: 3%;
  cursor: pointer;
  :hover {
    color: #b5cdfa;
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
  border-radius: 10px;
  margin: 30px auto 0;
  background-color: #fff;
  position: sticky;
  bottom: 0;
  box-shadow: 0px -3px 10px #d0d0d0;
  // padding: 0 25%;
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
