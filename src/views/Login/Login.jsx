import React, {useState} from 'react';
import LoginCard from './aggregates/LoginCard';
import OTPCard from './aggregates/OTPCard';
import {
  Container
} from './styles/style';

const Login = function (props) {
  const [view, setView] = useState(0);
  const handleUpdateView = (newView) => {
    setView(newView);
  };
  return (
    <Container>
      {view === 0
      ? <LoginCard handleUpdateView={handleUpdateView} />
        : <OTPCard />}
    </Container>
  )
};

export default Login;

