import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../Context/UserContext';
import { ApiFetchers } from '../Utils/ApiFetcher';

const useUserContext = () => {
  const {
    accessToken,
    refreshToken,
    userId,
    setAccessToken,
    setRefreshToken,
    setUserId,
  } = useContext(UserContext);
  const history = useHistory();
  const { tokenRefreshReq, signupReq, loginReq } = ApiFetchers;

  const getAccessToken = () => accessToken;
  const getRefreshToken = () => refreshToken;
  const getUserId = () => userId;

  const isLoggedIn = () => !!getAccessToken();
  const isTokenAvailable = () => {
    tokenRefreshReq({ accessToken })
      .then(({ result }) => {
        setAccessToken(result.accessToken);
        setRefreshToken(result.refreshToken);
      })
      .catch((err) => {
        if (!accessToken) {
          alert('로그인이 필요합니다!');
        }
      });
  };

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

        setAccessToken(res.data.result.accessToken);
        setRefreshToken(res.data.result.refreshToken);
        setUserId(res.data.result.userId);
        history.push('/trend');
      })
      .catch((err) => {
        console.error(err);
        alert('로그인에 실패하였습니다.');
      });
  };

  return { signup, login, getAccessToken, getRefreshToken, getUserId };
};

export default useUserContext;
