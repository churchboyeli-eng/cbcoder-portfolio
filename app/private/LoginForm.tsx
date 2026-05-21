'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!password.trim()) return;
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/vault-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (data.success) {
        // Refresh the page so the server component re-checks the cookie and renders the dashboard
        router.refresh();
      } else {
        setError(data.error || 'Incorrect password.');
        setPassword('');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="login-screen" style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#050505',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      flexDirection: 'column',
      textAlign: 'center',
      fontFamily: "'Outfit', sans-serif"
    }}>
      <div className="login-title" style={{
        fontSize: '1.5rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        fontWeight: 800,
        marginBottom: '2rem',
        color: '#f5f5f5'
      }}>
        <span style={{ color: '#cc0000' }}>PRIVATE</span> VAULT
      </div>
      <input
        type="password"
        placeholder="Enter Vault Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          padding: '1rem',
          border: '1px solid #cc0000',
          background: 'transparent',
          color: '#fff',
          marginBottom: '1rem',
          textAlign: 'center',
          fontFamily: "'Outfit', sans-serif",
          outline: 'none',
          width: '250px',
        }}
        disabled={loading}
      />
      <button
        onClick={handleLogin}
        className="btn"
        style={{
          padding: '1rem 3rem',
          backgroundColor: '#cc0000',
          color: '#fff',
          border: 'none',
          fontFamily: "'Outfit', sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontWeight: 800,
          fontSize: '0.8rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        disabled={loading}
      >
        {loading ? 'Accessing...' : 'Access Portfolio'}
      </button>
      <p style={{ color: '#cc0000', fontSize: '0.8rem', marginTop: '1rem', height: '1rem' }}>
        {error}
      </p>
    </div>
  );
}
