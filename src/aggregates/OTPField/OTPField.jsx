import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Container, MessageSpace } from "./style";
import Text from '../../components/Text/Text';
import TextInput from '../../components/TextInput/TextInput';
import {
  OTP_REGEX
} from '../../constants/general.constants';

const OTPField = function (props) {
  const [showMessage, setShowMessage] = useState('');
  const [valid, setValid] = useState(false);
  const otpRef = useRef('');
  useEffect(() => {
    props.updateOTP({
      value: otpRef.current,
      status: valid
    })
  }, [valid]);
  const handleTextChange = (e) => {
    const data = e.target.value;
    if (showMessage) setShowMessage("");
    if (valid) setValid(false);
    otpRef.current = data;
    verifyOTP(data, false);
  };
  const handleVerify = (e) => {
    const data = e.target.value;
    verifyOTP(data, true);
  };
  const verifyOTP = (data, error) => {
    if (data.length === 0 && error) {
      setShowMessage("This field is mandatory");
    } else if (data.length !== 6 && error) {
      setShowMessage("Should be 6 characters long");
    } else {
      if (OTP_REGEX.test(data)) {
        setValid(true);
      } else {
        if (error) setShowMessage("Invalid OTP");
      }
    }
  };
  return (
    <Container
      data-test="otp-field-container"
    >
      <TextInput
        elementType="text"
        marginTop={10}
        marginBottom={0}
        paddingTop={10}
        paddingBottom={10}
        paddingLeft={10}
        paddingRight={10}
        width="100%"
        placeHolder="Enter your OTP"
        onChange={handleTextChange}
        onBlur={handleVerify}
      />
      <MessageSpace>
        {showMessage && <Text
          text={showMessage}
          color="#ec445c"
          paddingTop={5}
          paddingLeft={5}
        />}
      </MessageSpace>
    </Container>
  );
};
OTPField.propTypes = {
};

OTPField.defaultProps = {
};

export default OTPField;
