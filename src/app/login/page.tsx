// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#f0f2f5'
    }}>
      <h1>Arama Kurtarma Derneği Uygulaması</h1>
      <p>Lütfen giriş yaparak devam edin.</p>
      <Link 
        href="/login"
        style={{
          padding: '10px 20px',
          background: '#4285F4',
          color: '#fff',
          borderRadius: '4px',
          textDecoration: 'none',
          marginTop: '20px'
        }}
      >
        Giriş Yap
      </Link>
    </div>
  );
}
