import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CartCount from '../../../components/mypage/CartCount';
import CheckProduct from '../../../components/mypage/CheckProduct';

export default function Cart() {
  // 사용자id
  const [userId, setUserId] = useState();
  // 장바구니상품
  const [cartList, setCartList] = useState();
  // 장바구니 count
  const [productCount, setProductCount] = useState(1);
  // 장바구니 check 여구
  const [isCheck, setIsCheck] = useState({});

  // 장바구니요청
  useEffect(() => {
    fetch('/mock/user/cart.json')
      .then(res => res.json())
      .then(data => {
        setUserId(data.user_id);
        setCartList(data.cart);
      });
  }, []);

  // console.log(isCheck);

  return (
    <Wrapper>
      <Article>장바구니</Article>
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
            />
          </Container>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 45%;
  ${props => props.theme.variables.flex('column', '', 'center')};
  margin: 30px auto;
  transition: 0.3s ease;
  @media (max-width: 1024px) {
    padding: 0 15px;
    width: 80%;
  }
  @media (max-width: 480px) {
    padding: 0 15px;
    width: 100%;
  }
`;

const Article = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #2b66f6;
  margin-bottom: 40px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 230px;
  ${props => props.theme.variables.flex('column', 'space-evenly', 'center')};
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: #f5f5f5;
  transition: 0.3s ease;
  position: relative;
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const Top = styled.div`
  width: 90%;
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
`;

const Middle = styled.div`
  width: 90%;
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
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

const CheckBtn = styled.div`
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
  border: 1px solid #d0d0d0;
  border-radius: 10px;
  background-color: #fff;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 480px) {
    width: 85px;
    height: 85px;
  }
`;

const ProductInfo = styled.div`
  text-overflow: ellipsis;
  width: 70%;
  height: 90%;
  line-height: 1.3;
  ${props => props.theme.variables.flex('column', 'center', '')};
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
