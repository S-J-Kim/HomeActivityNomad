import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button, Space } from 'antd';
import { HomeTwoTone } from '@ant-design/icons';
import './index.css';
import Container from './Components/base/Container';

const Splash = (props) => {
  const history = useHistory();

  return (
    <MainPageContainer>
      <MainLogo style={{ fontSize: '155px' }} />
      <Space direction="vertical" align="center">
        <Button
          type="primary"
          size="large"
          onClick={() => {
            history.push('/signin');
          }}
        >
          로그인
        </Button>
        <Button
          type="default"
          size="large"
          onClick={() => history.push('/signup')}
        >
          회원가입
        </Button>
      </Space>
    </MainPageContainer>
  );
};

const MainLogo = styled(HomeTwoTone)`
  margin: 150px auto;
`;

const MainPageContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Splash;
