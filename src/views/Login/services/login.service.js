import { useState, useEffect } from 'react';

export function useValidateLogin(data) {
  const [loginStatus, setLoginStatus] = useState({
    status: 0,
    message: "",
    data: {}
  });
  useEffect(() => {
    if (data.email && data.password) {
      setLoginStatus({
        status: 1,
        message: "Loading..",
        data: {}
      });
      fetch(`http://www.mocky.io/v2/5d9d9219310000153650e30b`)
        .then(response => response.json())
        .then(response => {
          setLoginStatus({
            status: 2,
            message: "Success",
            data: response.result
          });
        })
        .catch(err => {
          setLoginStatus({
            status: 3,
            message: err.message,
            data: err
          });
        })
    }
    return () => {};
  },[data.email, data.password]);

  return loginStatus;
}
