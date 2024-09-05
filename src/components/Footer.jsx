import React from 'react';

const Footer = () => {

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
          width : "100%"
,          margin: '3rem auto 0',
          paddingTop: '2rem',
          borderTop: '1px solid #9ca3af',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 1.5rem',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <p style={{ color: '#d1d5db', fontSize: '0.875rem', paddingTop : "20px" }}>
          © 2024 FastOne Global Financial Markets. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
