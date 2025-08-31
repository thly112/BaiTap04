import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      await login(values.email, values.password);
      message.success('Đăng nhập thành công');
      nav('/');
    } catch (e) {
      message.error('Email hoặc mật khẩu không đúng');
    }
  };

  return (
    <Form onFinish={onFinish} layout="vertical" style={{ maxWidth: 360 }}>
      <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Mật khẩu" rules={[{ required: true, min: 6 }]}>
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit">Đăng nhập</Button>
    </Form>
  );
}
