import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyPageWishBtn from '../../../components/mypage/MyPageWishBtn';

export default function WishList() {
  // 사용자id
  const [userId, setUserId] = useState();
  // 관심상품
  const [wishList, setWishList] = useState();

  // 관심상품요청
  useEffect(() => {
    fetch('/mock/user/wishlist.json')
      .then(res => res.json())
      .then(data => {
        setUserId(data.userId);
        setWishList(data.wishlist);
      });
  }, []);

  return (
    <Wrapper>
      <Article>관심상품</Article>
      {wishList &&
        wishList.map(wish =>
          wish.id % 3 === 0 ? (
            <>
              <Container key={wish.id} id="wishContainer">
                {/* 관심상품 info */}
                <Content>
                  <Img src={`${wish.product_img}`} alt={wish.product_name} />
                  <ProductInfo>
                    <ProductName>
                      {wish.product_name.length >= 40
                        ? wish.product_name.substr(0, 40) + '...'
                        : wish.product_name}
                    </ProductName>
                    <Manufacturer>{wish.manufacturer}</Manufacturer>
                    <Price>{wish.product_price}</Price>
                  </ProductInfo>
                  {/* 관심상품 버튼 */}
                  <MyPageWishBtn userId={userId} productId={wish.id} />
                </Content>
                <CartBtn>장바구니 담기</CartBtn>
              </Container>
              <Discount>관심있는 상품들, 대량으로 구매하면 할인 적용!</Discount>
            </>
          ) : (
            <Container key={wish.id} id="wishContainer">
              {/* 관심상품 info */}
              <Content>
                <Img src={`${wish.product_img}`} alt={wish.product_name} />
                <ProductInfo>
                  <ProductName>
                    {wish.product_name.length >= 40
                      ? wish.product_name.substr(0, 40) + '...'
                      : wish.product_name}
                  </ProductName>
                  <Manufacturer>{wish.manufacturer}</Manufacturer>
                  <Price>{wish.product_price}</Price>
                </ProductInfo>
                {/* 관심상품 버튼 */}
                <MyPageWishBtn userId={userId} productId={wish.id} />
              </Content>
              <CartBtn>장바구니 담기</CartBtn>
            </Container>
          )
        )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
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
  ${props => props.theme.variables.flex('column', 'center', 'center')};
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #d0d0d0;
  border-radius: 15px;
  transition: 0.3s ease;
  position: relative;
  @media (max-width: 768px) {
    height: 210px;
    font-size: 14px;
  }
`;

const Content = styled.div`
  width: 90%;
  ${props => props.theme.variables.flex('', 'space-evenly', '')};
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  background-color: #f5f5f5;
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
  word-break: keep-all;
  text-overflow: ellipsis;
  width: 65%;
  height: 90%;
  line-height: 1.3;
  ${props => props.theme.variables.flex('column', 'center', '')};
`;

const ProductName = styled.p`
  color: #181818;
  margin-bottom: 10px;
  transition: 0.3s ease;
  @media (max-width: 480px) {
    margin-bottom: 5px;
  }
`;

const Manufacturer = styled.p`
  color: #797979;
  margin-bottom: 10px;
  transition: 0.3s ease;
  @media (max-width: 480px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    margin-bottom: 5px;
  }
`;

const Price = styled.p`
  font-weight: 600;
  color: #181818;
`;

const CartBtn = styled.button`
  width: 90%;
  height: 50px;
  border: 0;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #2b66f6;
  margin-top: 15px;
  transition: 0.3s ease;
  &:hover {
    background-color: #164ac9;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 40px;
    font-size: 14px;
  }
`;

const Discount = styled.div`
  width: 100%;
  height: 30px;
  font-size: 14px;
  font-weight: 600;
  color: #2b66f6;
  text-align: center;
  margin: 10px 0 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
