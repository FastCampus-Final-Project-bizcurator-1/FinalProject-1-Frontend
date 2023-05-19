import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPostCode from 'react-daum-postcode';

function AddressModal({ isModalShow, isModalClose }) {
  const [companyBaseAddress, setCompanyBaseAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [companyFullAddress, setCompanyFullAddress] = useState('');
  const [isDaumPost, setIsDaumPost] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [register, setRegister] = useState([]);

  const handleOpenPost = () => {
    setIsDaumPost(true);
  };

  const handleAddress = data => {
    let AllAddress = data.address;
    let extraAddress = '';
    let postalCodes = data.zonecode;

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      AllAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setPostalCode(postalCodes);
    setCompanyFullAddress(AllAddress);
  };

  const width = 595;
  const height = 450;
  const modalStyle = {
    position: 'absolute',
    top: 0,
    left: '-178px',
    zIndex: '100',
    border: '1px solid #000000',
    overflow: 'hidden',
  };

  return (
    <div className="modalRow">
      <div className="modalCell cellTit">
        <div>
          <span>
            <b>*</b>주소
          </span>
        </div>
      </div>
      <div className="modalCell">
        <div className="cellFirst">
          <div className="zipCode">{postalCode}</div>
          <button type="button" onClick={handleOpenPost}>
            <span>우편번호 찾기</span>
          </button>
        </div>
        {isDaumPost ? (
          <DaumPostCode
            onComplete={handleAddress}
            autoClose
            width={width}
            height={height}
            style={modalStyle}
            isDaumPost={isDaumPost}
          />
        ) : null}
        <div className="address">{companyFullAddress}</div>
        <div className="addressBox">
          <input
            type="text"
            value={companyBaseAddress}
            name="companyBaseAddress"
            onChange={this.handleInput}
          />
        </div>
      </div>
    </div>
  );
}

export default AddressModal;
