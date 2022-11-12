import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../Context/UserContext';
import { ApiFetchers } from '../Utils/ApiFetcher';

const useUserContext = () => {
  const {
    accessToken,
    refreshToken,
    setAccessToken,
    setRefreshToken,
    setUserId,
  } = useContext(UserContext);
  const history = useHistory();
  const { signupReq, loginReq } = ApiFetchers;

  const signup = (data) => {
    signupReq(data)
      .then((res) => {
        history.push('/taste/step1');

        if (res.status === 200) {
          return res;
        }
      })
      .then((res) => {
        loginReq(data)
          .then((res) => {
            setAccessToken(res.result.accessToken);
            setRefreshToken(res.result.refreshToken);
          })
          .catch((err) => console.log(err));
      });
  };

  const login = (data) => {
    if (!data.userId || !data.password) {
      alert('잘못된 로그인 시도입니다.');
      return;
    }

    loginReq(data)
      .then((res) => {
        console.log(res);

        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setUserId(res.data.result.userId);
        history.push('/trend');
      })
      .catch((err) => {
        console.error(err);
        alert('로그인에 실패하였습니다.');
      });
  };

  return { signup, login };
};

export default useUserContext;
