
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Neptune Indonesia</title>
      </Head>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        backgroundColor: '#0a0a23',
        color: '#fff'
      }}>
        <div style={{ fontWeight: 'bold' }}>Neptune Indonesia</div>
        <nav>
          <Link href="/" style={{ margin: '0 1rem', color: '#fff' }}>Home</Link>
          <Link href="/about" style={{ margin: '0 1rem', color: '#fff' }}>Tentang Kami</Link>
          <Link href="/services" style={{ margin: '0 1rem', color: '#fff' }}>Layanan</Link>
          <Link href="/portfolio" style={{ margin: '0 1rem', color: '#fff' }}>Portfolio</Link>
          <Link href="/contact" style={{ margin: '0 1rem', color: '#fff' }}>Kontak</Link>
        </nav>
      </header>
      <main style={{
        backgroundImage: 'url("/images/hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Solusi Interior Profesional</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Desain dan renovasi ruangan Anda bersama Neptune Indonesia.</p>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
            style={{
              backgroundColor: '#25D366',
              padding: '0.75rem 1.5rem',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '8px'
            }}>
            Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </main>
    </>
  );
}
