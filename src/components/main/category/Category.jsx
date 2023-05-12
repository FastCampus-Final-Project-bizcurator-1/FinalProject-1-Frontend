import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CategoryItem from './CategoryItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Category() {
  const [outerWidth, setOuterWidth] = useState(window.outerWidth);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.outerWidth);
      setOuterWidth(window.outerWidth);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 800,
    slidesToShow:
      outerWidth > 1440 ? 4 : outerWidth > 1024 ? 3 : outerWidth > 600 ? 2 : 1,
    slidesToScroll: 1,
    variableHeight: true,
    centerMode: true,
    centerPadding: '0px',
    touchThreshold: 20,
  };

  return (
    <Container>
      <Row1>
        <TextContainer>
          <Text1>
            비즈큐레이터가 엄격한 검증절차로 선별된 다양한 국내 제품
          </Text1>
          <Text2>
            <Bold>가격</Bold>은 낮추고 <Bold>퀄리티</Bold>는 높이고!
          </Text2>
        </TextContainer>
      </Row1>
      <Row2>
        <Slider {...settings}>
          <CategoryItem
            src="/images/categoryImage/욕실용품.png"
            name="욕실용품"
            description="객실에 비치되는 다양한 용품"
            tag1="샤워용품"
            tag2="면도/구강용품"
            tag3="타월"
          />
          <CategoryItem
            src="/images/categoryImage/객실용품.png"
            name="객실용품"
            description="객실에 비치되는 다양한 용품"
            tag1="인테리어소품"
            tag2="객실화류"
            tag3="양치컵"
          />
          <CategoryItem
            src="/images/categoryImage/욕실용품02.png"
            name="욕실용품"
            description="객실에 비치되는 다양한 용품"
            tag1="샤워용품"
            tag2="면도/구강용품"
            tag3="타월"
          />
          <CategoryItem
            src="/images/categoryImage/객실용품02.png"
            name="객실용품"
            description="객실에 비치되는 다양한 용품"
            tag1="인테리어소품"
            tag2="객실화류"
            tag3="양치컵"
          />
          <CategoryItem
            src="/images/categoryImage/사무용품.png"
            name="사무용품"
            description="객실에 비치되는 다양한 용품"
            tag1="인테리어소품"
            tag2="객실화류"
            tag3="양치컵"
          />
          <CategoryItem
            src="/images/categoryImage/욕실용품.png"
            name="욕실용품"
            description="객실에 비치되는 다양한 용품"
            tag1="샤워용품"
            tag2="면도/구강용품"
            tag3="타월"
          />
          <CategoryItem
            src="/images/categoryImage/객실용품.png"
            name="객실용품"
            description="객실에 비치되는 다양한 용품"
            tag1="인테리어소품"
            tag2="객실화류"
            tag3="양치컵"
          />
          <CategoryItem
            src="/images/categoryImage/욕실용품02.png"
            name="욕실용품"
            description="객실에 비치되는 다양한 용품"
            tag1="샤워용품"
            tag2="면도/구강용품"
            tag3="타월"
          />
          <CategoryItem
            src="/images/categoryImage/객실용품02.png"
            name="객실용품"
            description="객실에 비치되는 다양한 용품"
            tag1="인테리어소품"
            tag2="객실화류"
            tag3="양치컵"
          />
          <CategoryItem
            src="/images/categoryImage/사무용품.png"
            name="사무용품"
            description="객실에 비치되는 다양한 용품"
            tag1="인테리어소품"
            tag2="객실화류"
            tag3="양치컵"
          />
        </Slider>
      </Row2>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 690px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: auto;
  background-color: #ffffff;
  line-height: 20px;
  font-family: GmarketSansTTFMedium;
`;

const Row1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Row2 = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 72px 0;
  overflow: hidden;
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 40%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100px;
  margin: auto;
  font-size: 48px;
  line-height: 52px;
  opacity: 0;

  ${Container}.active & {
    animation: ${fadeInUp} 0.5s linear;
    opacity: 1;
  }
`;

const Text1 = styled.div`
  font-color: #181818;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -1px;
  @media (max-width: 510px) {
    font-size: 15px;
  }
`;
const Text2 = styled.div`
  font-color: #181818;
  font-size: 36px;
  font-weight: bold;
  @media (max-width: 510px) {
    font-size: 27px;
  }
`;

const Bold = styled.span`
  color: #3e55ef;
  font-weight: 700;
`;

// const SliderContainer = styled(slider)`
//   .slick-track {
//     height: 400px;
//   }
// `;
