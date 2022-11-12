import axios from 'axios';

const serverUrl = 'http://43.201.94.9/web';
const loginAccessToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJ1c2VySWRcIjpcImFkbWluXCIsXCJ0eXBlXCI6XCJhdGtcIn0iLCJpYXQiOjE2NjY3NjYwMzAsImV4cCI6MTY2Njc2OTYzMH0.yoCNQGPpKNY3gwdLPzQrBikzi6yHKTHpGZXcvx-Onls';

const ApiUrlMap = {
  signup: '/auth/sign-up',
  login: '/auth/login',
  tokenReisuue: '/auth/token-reissue',
  like: 'member/like',
  tasteCheck: 'member/poll',
  media: '/media/',
  curation: '/media/recommand',
};

const ApiMethod = {
  post: 'POST',
  get: 'GET',
  delete: 'DELETE',
  put: 'PUT',
};

const getConfig = (method, url, data, accessToken) => {
  return {
    method,
    url: url,
    headers: {
      'Content-Type': 'application/json',
      'X-ACCESS-TOKEN': accessToken,
    },
    data,
  };
};

const signupReq = async (data) => {
  try {
    const res = await axios(
      getConfig(ApiMethod['post'], ApiUrlMap['signup'], data, '')
    );

    if (res.status !== 200) {
      console.log(res);
    }

    return res;
  } catch (e) {}
};

const loginReq = async (data) => {
  const res = await axios(
    getConfig(ApiMethod['post'], ApiUrlMap['login'], data, loginAccessToken)
  );

  if (res.status != 200) {
    console.log(res);
  }

  return res;
};

export const ApiFetchers = {
  signupReq,
  loginReq,
};
