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
    <footer style={{ background: 'linear-gradient(135deg, #6b7280, #4b5563)', padding: '4rem 0', color: '#fff', fontFamily: 'Poppins, sans-serif', borderTop: '1px solid #e5e7eb' }}>
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
        {[
          {
            title: 'Compare',
            links: [
              'Trading Costs',
              'Accounts',
              'Deposits and Withdrawals',
              'About us',
              'News & Media',
              'Partner with Eightcap',
            ],
          },
          {
            title: 'Trading',
            links: [
              'The most popular',
              'Trading Forex CFDs',
              'Trading Commodity CFDs',
              'Trading Crypto CFDs',
              'Trading Index CFDs',
              'Trading Share CFDs',
            ],
          },
          {
            title: 'Insights',
            links: ['Eightcap Labs', 'Trade Zone', 'Events & Webinars'],
          },
          //{
          //  title: 'Follow us',
          //  social: [
          //    { icon: 'fab fa-facebook-f', link: '#' },
          //    { icon: 'fab fa-twitter', link: '#' },
          //    { icon: 'fab fa-linkedin-in', link: '#' },
          //    { icon: 'fab fa-instagram', link: '#' },
          //    { icon: 'fab fa-youtube', link: '#' },
          //  ],
          //},
        ].map((section, index) => (
          <div key={index}>
            <h4
              style={{
                fontWeight: '700',
                fontSize: '1.375rem',
                marginBottom: '1.5rem',
                color: '#f3f4f6',
              }}
            >
              {section.title}
            </h4>
            {section.links && (
              <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                {section.links.map((link, i) => (
                  <li key={i} style={{ marginBottom: '0.85rem' }}>
                    <a
                      href="#"
                      style={{
                        color: '#d1d5db',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease, transform 0.3s ease',
                        cursor: 'pointer',
                        fontSize: '0.95rem',
                      }}
                      onClick={(e) => e.preventDefault()}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateX(6px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#d1d5db';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {section.social && (
              <ul
                style={{
                  display: 'flex',
                  listStyleType: 'none',
                  padding: '0',
                  marginTop: '1.5rem',
                  gap: '1.2rem',
                }}
              >
                {section.social.map((social, i) => (
                  <li key={i}>
                    <a
                      href={social.link}
                      style={{
                        color: '#d1d5db',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease, transform 0.3s ease',
                        fontSize: '1.5rem',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#18e7f3';
                        e.currentTarget.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#d1d5db';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
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
          style={{ width: windowWidth > 990 ? '6%' : "10%", height: 'auto', paddingTop : "5px" }}
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
