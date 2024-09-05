import React from 'react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #6b7280, #4b5563)',
        padding: '4rem 0',
        color: '#fff',
        fontFamily: 'Poppins, sans-serif',
        borderTop: '1px solid #e5e7eb',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2.5rem',
          padding: '0 1.5rem',
        }}
      >
        <div>
          <h4
            style={{
              fontWeight: '700',
              fontSize: '1.375rem',
              marginBottom: '1.5rem',
              color: '#f3f4f6',
            }}
          >
            FastOne Global Financial Markets
          </h4>
          <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
            <li style={{ marginBottom: '0.85rem', color: '#d1d5db' }}>
              Dedicated to providing top-notch services and experiences for our clients.
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          maxWidth: '1280px',
          margin: '3rem auto 0',
          paddingTop: '2rem',
          borderTop: '1px solid #9ca3af',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 1.5rem',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        {windowWidth > 611 && (
          <img
            src="../assets/images/Fastone-pngLogo.png"
            alt="Hero"
            style={{ width: windowWidth > 990 ? '6%' : '10%', height: 'auto', paddingTop: '5px' }}
          />
        )}
        <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>
          © 2024 FastOne Global Financial Markets. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
