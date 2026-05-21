import { cookies } from 'next/headers';
import PrivateVaultDashboard from './PrivateVaultDashboard';
import LoginForm from './LoginForm';

export const metadata = {
  title: 'Private Vault | CBCODER',
  description: 'Secure, client-only visual archive and investment packages.',
};

export default function PrivatePage() {
  const cookieStore = cookies();
  const isAuthenticated = cookieStore.get('vault_session')?.value === 'authenticated';

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return <PrivateVaultDashboard />;
}
