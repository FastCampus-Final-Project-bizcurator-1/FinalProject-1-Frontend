import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdArrowBackIos } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { TiDeleteOutline } from 'react-icons/ti';

export default function ProductAdd() {
  const [subList, setSubList] = useState();
  const [imgList, setImgList] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCategory = e => {
    console.log(e.target.value);
    // api 연결 => 서브카테고리 가져오기
    // setSubList()
  };

  const handleDeleteImg = name => {
    // 삭제 구현하기
    console.log(name);
  };

  const onSubmit = data => {
    data.productImgfile = imgList;
    // data 전송
    console.log(data);
  };

  return (
    <Wrapper>
      <ListPage href="/admin/management/product">
        <MdArrowBackIos />
        상품 목록
      </ListPage>
      <Article>상품 등록</Article>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <P>상품명</P>
          <TextField>
            <Input
              type="text"
              {...register('productName', { required: true })}
            />
          </TextField>
        </Section>
        <Section>
          <P>카테고리</P>
          <SelectField>
            <SelectBox
              {...register('mainategory', {
                required: true,
              })}
              onChange={e => handleCategory(e)}
            >
              <option value="">---대분류 선택---</option>
              <option value="GUEST_ROOM_SUPPLIES">객실용품</option>
              <option value="BATHROOM_SUPPLIES">욕실용품</option>
              <option value="BERVAGE">식음료</option>
              <option value="HYGIENE_SUPPLIES">위생용품</option>
              <option value="BEDDING">침구류</option>
              <option value="SAFETY_EQUIPMENT">소방/안전설비</option>
              <option value="ELECTRONIC_APPLIANCES">전자제품</option>
              <option value="CLEANING_FACILITY_MANAGEMENT">
                청소/시설관리
              </option>
              <option value="OFFICE_SUPPLIES">사무용품</option>
              <option value="ETC">기타</option>
            </SelectBox>
            <SelectBox {...register('subcategory', { required: true })}>
              <option value="소분류선택">---소분류 선택---</option>
              {/* {subList &&
                subList.map(sub => {
                  return <option value={`${sub}`}>{sub}</option>;
                })} */}
            </SelectBox>
          </SelectField>
        </Section>
        <Section>
          <P>
            썸네일 이미지
            <br /> (최대5개)
          </P>
          <TextField>
            <Label htmlFor="productImgfile">추가하기</Label>
            <File
              type="file"
              id="productImgfile"
              multiple
              onChange={e => setImgList([...e.target.files])}
            />
          </TextField>
        </Section>
        {imgList.length > 0 && (
          <FileNameSection>
            {imgList.map((img, index) => (
              <FileName key={index}>
                {img.name}
                <FileDeleteBtn onClick={() => handleDeleteImg(img.name)}>
                  <TiDeleteOutline />
                </FileDeleteBtn>
              </FileName>
            ))}
          </FileNameSection>
        )}
        <Section>
          <P>노출상태</P>
          <RadioField>
            <RadioLabel>
              <RadioBtn
                type="radio"
                name="productStatus"
                value="PUBLIC"
                defaultChecked
                {...register('productStatus')}
              />
              공개
            </RadioLabel>
            <RadioLabel>
              <RadioBtn
                type="radio"
                name="productStatus"
                value="PRIVATE"
                {...register('productStatus')}
              />
              비공개
            </RadioLabel>
          </RadioField>
        </Section>
        <Section>
          <P>소비자가</P>
          <TextField>
            <Input
              type="text"
              {...register('consumerPrice', { required: true })}
            />{' '}
            원
          </TextField>
        </Section>
        <Section>
          <P>판매가</P>
          <TextField>
            <Input
              type="text"
              {...register('productPrice', { required: true })}
            />{' '}
            원
          </TextField>
        </Section>
        <Section>
          <P>제조사</P>
          <TextField>
            <Input
              type="text"
              {...register('manufacturer', { required: true })}
            />
          </TextField>
        </Section>
        <Section>
          <P>배송방법</P>
          <RadioField>
            <RadioLabel>
              <RadioBtn
                defaultChecked
                type="radio"
                name="delivery"
                value="DOMESTIC"
                {...register('delivery')}
              />
              국내배송
            </RadioLabel>
            <RadioLabel>
              <RadioBtn
                type="radio"
                name="delivery"
                value="OVERSEA"
                {...register('delivery')}
              />
              해외배송
            </RadioLabel>
          </RadioField>
        </Section>
        <Section>
          <P>배송비</P>
          <TextField>
            <Input
              type="text"
              {...register('deliveryCharge', { required: true })}
            />{' '}
            원
          </TextField>
        </Section>
        <Section>
          <P>배송기간</P>
          <TextField>
            <Input
              type="date"
              {...register('deliveryDate', { required: true })}
            />{' '}
            일
          </TextField>
        </Section>
        <Section>
          <P>최소구매수량</P>
          <TextField>
            <Input
              type="text"
              {...register('minimumQuantity', { required: true })}
            />{' '}
            개
          </TextField>
        </Section>
        <Notice>
          수량에 대한 옵션이 있을 경우, 총 수량을 입력하세요. (옵션X구매개수)
        </Notice>
        <Section>
          <P>옵션</P>
          <TextField>
            <Input type="text" {...register('option', { required: true })} />
            <OptionBtn onClick={() => console.log('추가')}> + 추가</OptionBtn>
          </TextField>
        </Section>
        <Section>
          <P>상품설명</P>
          <div>에디터추가하기 !</div>
        </Section>
        <SubmitBtn type="submit">등록하기</SubmitBtn>
        {(errors.productName ||
          errors.mainategory ||
          errors.subcategory ||
          errors.productImgFile ||
          errors.productStatus ||
          errors.consumerPrice ||
          errors.productPrice ||
          errors.manufacturer ||
          errors.delivery ||
          errors.deliveryCharge ||
          errors.deliveryDate ||
          errors.minimumQuantity ||
          errors.oprion) && <Error>* 필수 입력 항목을 작성해주세요.</Error>}
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  margin: 30px auto 0;
  padding: 0 15px;
  transition: 0.3s ease;
  @media (max-width: 1024px) {
    width: 80%;
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ListPage = styled.a`
  width: 100%;
  height: 35px;
  display: block;
  color: #2b66f6;
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Article = styled.p`
  width: 30%;
  font-size: 16px;
  color: #797979;
  font-weight: 600;
  text-align: center;
  margin: 0 auto 50px;
  padding-bottom: 10px;
  border-bottom: 2px solid #dadada;
  transition: 0.3s ease;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

const Form = styled.form`
  width: 100%;
  ${props => props.theme.variables.flex('column', 'center', 'center')};
`;

const Section = styled.div`
  width: 100%;
  height: 40px;
  font-size: 14px;
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  margin-bottom: 15px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 12px;
    height: 35px;
  }
`;

const P = styled.p`
  color: #434343;
  font-weight: 600;
  line-height: 1.3;
`;

const TextField = styled.div`
  width: 55%;
  height: 100%;
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  transition: 0.3s ease;
  @media (max-width: 480px) {
    width: 70%;
    height: 90%;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 2px solid #dadada;
  border-radius: 5px;
  padding: 5px 10px;
  outline: none;
  margin-right: 5px;
`;

const SelectField = styled.div`
  width: 55%;
  height: 100%;
  ${props => props.theme.variables.flex('', 'space-around', 'center')};
  transition: 0.3s ease;
  @media (max-width: 480px) {
    width: 70%;
    height: 90%;
  }
`;

const SelectBox = styled.select`
  width: 46%;
  height: 100%;
  outline: none;
  border: 1px solid #616161;
  border-radius: 10px;
  color: #616161;
  font-size: 14px;
  padding: 0 10px;
  transition: 0.3s ease;
  @media (max-width: 426px) {
    width: 48%;
    font-size: 12px;
  }
`;

const RadioField = styled.div`
  width: 55%;
  height: 100%;
  ${props => props.theme.variables.flex('', 'flex-start', 'center')};
  transition: 0.3s ease;
  @media (max-width: 480px) {
    width: 70%;
    height: 90%;
  }
`;

const RadioLabel = styled.label`
  width: 40%;
  ${props => props.theme.variables.flex('', '', 'center')};
  color: #434343;
`;

const RadioBtn = styled.input`
  width: 15px;
  height: 15px;
  border: 1px solid #797979;
  border-radius: 100%;
  position: relative;
  &:checked::before {
    content: '';
    width: 8px;
    height: 8px;
    display: inline-block;
    background-color: #2b66f6;
    border-radius: 100%;
    transition: 0.2s;
    position: absolute;
    top: 22%;
    left: 22%;
  }
`;

const Notice = styled.p`
  width: 95%;
  font-size: 12px;
  color: #797979;
  text-align: right;
  line-height: 1.3;
  margin-bottom: 15px;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 10px;
  }
`;

const Label = styled.label`
  width: 100%;
  height: 100%;
  ${props => props.theme.variables.flex('', 'center', 'center')};
  cursor: pointer;
  border: 1px solid #2b66f6;
  border-radius: 10px;
  color: #2b66f6;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const File = styled.input`
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const FileNameSection = styled.div`
  width: 100%;
  height: 100%;
  ${props => props.theme.variables.flex('', 'flex-start', 'center')};
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const FileName = styled.div`
  height: 100%;
  ${props => props.theme.variables.flex('', 'center', 'center')};
  color: #434343;
  font-size: 12px;
  margin-right: 25px;
  transition: 0.3s ease;
  @media (max-width: 480px) {
    font-size: 10px;
    margin-right: 15px;
  }
`;

const FileDeleteBtn = styled.div`
  color: #b5cdfa;
  font-size: 20px;
  margin-left: 3px;
  cursor : pointer;
  transition : .3s ease;
  :hover{
    color : #2b66f6;
  }
   @media (max-width: 480px) {
   font-size: 18px;
`;

const OptionBtn = styled.div`
  width: 25%;
  height: 100%;
  ${props => props.theme.variables.flex('', 'center', 'center')};
  color: #2b66f6;
  font-size: 14px;
  border: 1px solid #2b66f6;
  border-radius: 10px;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s ease;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    width: 35%;
    padding: 5px;
  }
`;

const SubmitBtn = styled.button`
  width: 45%;
  height: 45px;
  border: 0;
  background-color: #2b66f6;
  color: #fff;
  border-radius: 10px;
  transition: 0.3s ease;
  @media (max-width: 426px) {
    width: 65%;
    height: 40px;
  }
`;

const Error = styled.p`
  color: #d30000;
  margin: 10px 0;
  font-size: 12px;
`;
