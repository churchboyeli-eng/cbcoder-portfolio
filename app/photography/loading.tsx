'use client';
export default function Loading() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#050505',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '2px solid rgba(204,0,0,0.1)',
        borderTop: '2px solid #cc0000',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <p style={{
        marginTop: '1.5rem',
        fontSize: '0.7rem',
        letterSpacing: '0.4em',
        color: '#555',
        textTransform: 'uppercase',
        fontWeight: 700
      }}>Initializing Gallery</p>
    </div>
  );
}
