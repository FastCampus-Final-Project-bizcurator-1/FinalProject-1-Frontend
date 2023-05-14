import React from 'react';
import { useForm } from 'react-hook-form';
import { BiSearchAlt2 } from 'react-icons/bi';
import styled from 'styled-components';

export default function ProductSearch() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = data => {
    // 검색 api 연결
    console.log(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          id="search"
          placeholder="상품명을 입력해주세요"
          {...register('search', {
            required: true,
          })}
        />
        <SearchBtn disable={isSubmitting}>
          <BiSearchAlt2 />
        </SearchBtn>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
  position: relative;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 2px solid #dadada;
  border-radius: 10px;
  padding: 5px 10px;
  ::placeholder {
    color: #d0d0d0;
  }
`;

const SearchBtn = styled.button`
  font-size: 20px;
  color: #d0d0d0;
  background-color: transparent;
  border: 0;
  position: absolute;
  top: 25%;
  right: 2%;
`;
