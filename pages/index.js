import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Neptune Indonesia</title>
      </Head>
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          height: '100vh',
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textShadow: '1px 1px 8px rgba(0,0,0,0.7)',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Neptune Indonesia
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#ddd' }}>
          Interior Design & Contractor
        </p>
      </div>
    </>
  );
}
