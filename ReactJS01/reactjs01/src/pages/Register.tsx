import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/context/AuthContext';

export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();

  const onFinish = async (v: { name: string; email: string; password: string }) => {
    try {
      await register(v);
      message.success('Tạo tài khoản thành công, hãy đăng nhập');
      nav('/login');
    } catch (e) {
      message.error('Email đã tồn tại');
    }
  };

  return (
    <Form onFinish={onFinish} layout="vertical" style={{ maxWidth: 360 }}>
      <Form.Item name="name" label="Họ tên" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Mật khẩu" rules={[{ required: true, min: 6 }]}>
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit">Đăng ký</Button>
    </Form>
  );
}
