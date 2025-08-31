import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const { Header, Content } = Layout;

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  const onLogout = () => {
    logout();
    nav('/login');
  };

  return (
    <Layout style={{ minHeight: '100vh', width: '100vw' }}>
      <Header style={{ width: '100vw' }}>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
          {!user && <Menu.Item key="login"><Link to="/login">Login</Link></Menu.Item>}
          {!user && <Menu.Item key="register"><Link to="/register">Register</Link></Menu.Item>}
          {user && <Menu.Item key="profile"><Link to="/profile">Profile</Link></Menu.Item>}
          {user && <Menu.Item key="logout" onClick={onLogout}>Logout</Menu.Item>}
        </Menu>
      </Header>

      <Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: 'calc(100vh - 64px)', // trừ header
          backgroundColor: '#dad3d3ff', // hoặc màu bạn muốn
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}
