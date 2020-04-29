import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Container, MessageSpace } from "./style";
import Text from '../../components/Text/Text';
import TextInput from '../../components/TextInput/TextInput';
import {
  PASSWORD_REGEX
} from '../../constants/general.constants';

const PasswordField = function (props) {
  const [showMessage, setShowMessage] = useState('');
  const [valid, setValid] = useState(false);
  const passwordRef = useRef('');
  useEffect(() => {
    props.updatePassword({
      value: passwordRef.current,
      status: valid
    })
  }, [valid]);
  const handleTextChange = (e) => {
    const data = e.target.value;
    if (showMessage) setShowMessage("");
    if (valid) setValid(false);
    passwordRef.current = data;
    verifyPassword(data, false);
  };
  const handleVerify = (e) => {
    const data = e.target.value;
    verifyPassword(data, true);
  };
  const verifyPassword = (data, error) => {
    if (data.length === 0 && error) {
      setShowMessage("Password is mandatory");
    } else if (data.length > 0 && data.length <= 6 && error) {
      setShowMessage("Should me more than 6 characters long");
    } else {
      if (PASSWORD_REGEX.test(data)) {
        setValid(true);
      } else {
        if (error) setShowMessage("Should contain 1 uppercase letter");
      }
    }
  };
  return (
    <Container>
      <TextInput
        elementType="password"
        marginTop={10}
        marginBottom={0}
        paddingTop={10}
        paddingBottom={10}
        paddingLeft={10}
        paddingRight={10}
        width="100%"
        placeHolder="Enter your Password"
        borderColor={showMessage ? '#ec445c' : '#eee'}
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
PasswordField.propTypes = {
  updatePassword: PropTypes.func
};

PasswordField.defaultProps = {
  updatePassword: () => {}
};

export default PasswordField;
