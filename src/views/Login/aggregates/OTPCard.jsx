import React, { useState, useEffect } from 'react';
import Text from '../../../components/Text/Text';
import Image from '../../../components/Image/Image';
import Button from '../../../components/Button/Button';
import OTPField from '../../../aggregates/OTPField/OTPField';
import Card from '../../../components/Card/Card';
import {
  Duolgo,
  MessageSpace
} from '../styles/style';
import {
  useValidateOtp
} from '../services/login.service';

const OTPCard = function (props) {
  const [test, setTest] = useState({ otp: "" });
  const otpStatus = useValidateOtp(test);
  const [data, setData] = useState({
    otp: ""
  });
  useEffect(() => {
    if (otpStatus.status === 2) {
      // props.handleUpdateView(1);
      alert("welcome");
    }
    return () => { }
  }, [otpStatus.status]);
  const handleSetOTP = (inData) => {
    setData(data => ({
      ...data,
      otp: inData.status ? inData.value : ""
    }));
  };
  const handleOnClick = () => {
    if (data.otp !== "") {
      setTest(data);
    }
  };
  return (
    <Card
      width={430}
      textAlign="center"
      paddingLeft={20}
      paddingRight={20}
      paddingTop={25}
      paddingBottom={25}
    >
      <div>
        <Image
          src="https://s3.ap-south-1.amazonaws.com/tpng-images/random/original/6be52f0b-56bf-4fdc-abd3-0bec9e58610c.png"
          width={130}
          paddingTop={10}
          paddingBottom={10}
        />
      </div>
      <Text
        text="Verify OTP"
        color="#343434"
        fontSize={24}
        textAlign="center"
        paddingTop={10}
        paddingBottom={10}
      />
      <Text
        text="Use SMS or Google Authenticator"
        color="#343434"
        fontSize={16}
        textAlign="center"
        paddingTop={10}
        paddingBottom={10}
      />
      <OTPField
        updateOTP={handleSetOTP}
      />
      <MessageSpace>
        {otpStatus.status !== 0 && <Text
          text={otpStatus.message}
          color="#343434"
        />}
      </MessageSpace>
      <Duolgo>
        <Button
          buttonText="Get SMS OTP"
          width="100%"
          marginTop={9}
          backgroundColor="#fff"
          color="#ec445c"
        />
        <Button
          buttonText="Verify"
          width="100%"
          marginTop={9}
          isDisabled={data.otp === ""}
          onClick={handleOnClick}
        />
      </Duolgo>
    </Card>
  )
};

export default OTPCard;