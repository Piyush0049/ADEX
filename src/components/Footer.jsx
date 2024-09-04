import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f9fafb', padding: '3rem 0' }}>
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          padding: '0 1rem',
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
          {
            title: 'Follow us',
            social: [
              { icon: 'fab fa-facebook-f', link: '#' },
              { icon: 'fab fa-twitter', link: '#' },
              { icon: 'fab fa-linkedin-in', link: '#' },
              { icon: 'fab fa-instagram', link: '#' },
              { icon: 'fab fa-youtube', link: '#' },
            ],
          },
        ].map((section, index) => (
          <div key={index}>
            <h4
              style={{
                fontWeight: '700',
                fontSize: '1.25rem',
                marginBottom: '1rem',
                color: '#111827',
              }}
            >
              {section.title}
            </h4>
            {section.links && (
              <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                {section.links.map((link, i) => (
                  <li key={i} style={{ marginBottom: '0.75rem' }}>
                    <a
                      href="#"
                      style={{
                        color: '#6b7280',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease, transform 0.3s ease',
                        cursor: 'pointer',
                        display: 'block',
                        fontSize: '0.9375rem',
                      }}
                      onClick={(e) => e.preventDefault()}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#111827';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#6b7280';
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
                  margin: '0',
                  gap: '1rem',
                }}
              >
                {section.social.map((social, i) => (
                  <li key={i}>
                    <a
                      href={social.link}
                      style={{
                        color: '#6b7280',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease, transform 0.3s ease',
                        fontSize: '1.25rem',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#111827';
                        e.currentTarget.style.transform = 'scale(1.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#6b7280';
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
          margin: '2.5rem auto 0',
          paddingTop: '1.5rem',
          borderTop: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 1rem',
        }}
      >
        <div style={{
          fontSize: '32px',
          fontWeight: 'bold',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#18e7f3',
        }}>Adex</div>
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
          © 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
