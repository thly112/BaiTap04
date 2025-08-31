import { useAuth } from '../components/context/AuthContext';

export default function Profile() {
  const { user } = useAuth();
  if (!user) return null;
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
}
