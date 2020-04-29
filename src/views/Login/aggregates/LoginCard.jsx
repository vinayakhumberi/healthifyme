import React, { useState, useEffect } from 'react';
import Text from '../../../components/Text/Text';
import Image from '../../../components/Image/Image';
import Button from '../../../components/Button/Button';
import EmailField from '../../../aggregates/EmailField/EmailField';
import PasswordField from '../../../aggregates/PasswordField/PasswordField';
import Card from '../../../components/Card/Card';
import {
  MessageSpace
} from '../styles/style';
import {
  useValidateLogin
} from '../services/login.service';

const LoginCard = function (props) {
  const [test, setTest] = useState({email: "", password: ""});
  const loginStatus = useValidateLogin(test);
  const [ data, setData ] = useState({
    email: "",
    password: ""
  });
  useEffect(() => {
    if(loginStatus.status === 2) {
      props.handleUpdateView(1);
    }
    return () => {}
  },[loginStatus.status]);
  const handleSetEmail = (inData) => {
    setData(data => ({
      ...data,
      email: inData.status ? inData.value : ""
    }));
  };
  const handleSetPassword = (inData) => {
    setData(data => ({
      ...data,
      password: inData.status ? inData.value : ""
    }));
  };
  const handleOnClick = () => {
    if (data.email !== "" && data.password !== "") {
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
          text="Sign in"
          color="#343434"
          fontSize={24}
          textAlign="center"
          paddingTop={10}
          paddingBottom={10}
        />
        <Text
          text="Use your HealthifyMe account"
          color="#343434"
          fontSize={16}
          textAlign="center"
          paddingTop={10}
          paddingBottom={10}
        />
        <EmailField
          updateEmail={handleSetEmail}
        />
        <PasswordField
          updatePassword={handleSetPassword}
        />
        <MessageSpace>
          {loginStatus.status !== 0 && <Text
            text={loginStatus.message}
            color="#343434"
          />}
        </MessageSpace>
        <Button
          buttonText="Login"
          width="100%"
          marginTop={4}
          isDisabled={data.email === "" || data.password === "" || loginStatus.status !== 0}
          onClick={handleOnClick}
        />
      </Card>
  )
};

export default LoginCard;

