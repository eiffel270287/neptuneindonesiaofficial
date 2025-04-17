import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Neptune Indonesia</title>
      </Head>
      <div
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          color: 'white',
          textShadow: '1px 1px 6px rgba(0,0,0,0.7)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Neptune Indonesia</h1>
        <p style={{ fontSize: '1.2rem', color: '#ddd' }}>Interior Design & Contractor</p>
      </div>
    </>
  );
}
