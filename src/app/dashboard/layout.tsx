// app/dashboard/layout.tsx
import Link from 'next/link';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Yan menü (Sidebar) */}
      <aside style={{
        width: '250px',
        background: '#2c3e50',
        color: '#ecf0f1',
        padding: '20px'
      }}>
        <h2>Menü</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link href="/volunteers">Gönüllü Yönetimi</Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link href="/inventory">Envanter Yönetimi</Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link href="/operations">Operasyon Raporlama</Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link href="/profile">Profil</Link>
            </li>
          </ul>
        </nav>
      </aside>
      {/* İçerik Alanı */}
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
    </div>
  );
}
