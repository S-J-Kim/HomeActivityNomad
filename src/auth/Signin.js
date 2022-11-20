import React from 'react';
import styled from 'styled-components';
import { Form, Button, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, HomeTwoTone } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import Container from '../Components/base/Container';
import useUserContext from '../hooks/useUserContext';
import { useForm } from 'antd/lib/form/Form';

const Signin = (props) => {
  const { login } = useUserContext();
  const [form] = useForm();

  const handleLoginButtonClick = ({ userId, password }) => {
    login({ userId, password });
  };

  return (
    <SigninContainer style={{ height: '100v' }}>
      <MainLogo style={{ fontSize: '155px' }} />
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        size="large"
        requiredMark="optional"
        onFinish={handleLoginButtonClick}
      >
        <Form.Item
          name="userId"
          label="userId"
          required
          rules={[{ message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          required
          rules={[{ message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          {/* <a className="login-form-forgot" href="">
            Forgot password
          </a> */}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            Log in
          </Button>
        </Form.Item>
        <Button
          type="default"
          block
          onClick={() => window.history.push('/signup')}
        >
          Signup
        </Button>
      </Form>
    </SigninContainer>
  );
};

const MainLogo = styled(HomeTwoTone)`
  margin: 100px auto;
`;

const SigninContainer = styled(Container)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export default Signin;
