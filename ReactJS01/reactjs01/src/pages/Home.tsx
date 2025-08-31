import { useEffect, useState } from 'react';
import api from '../api/request';

export default function Home() {
  const [msg, setMsg] = useState('Welcome to My Home✨');

  useEffect(() => {
    api.get('/home')
      .then(res => setMsg(res.data.message))
      .catch(() => {});
  }, []);

  return <h1>{msg}</h1>;
}
