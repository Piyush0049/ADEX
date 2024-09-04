import React from 'react';
import InfoSection from './Trust';
import { BsQrCode } from "react-icons/bs";
import Popup from './Popup';
import { useState } from 'react';

function Home() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleQrButtonClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };
    const styles = {
        container: {
            position: 'relative',
            minHeight: '100vh',
            color: '#fff',
            fontFamily: 'Poppins, Arial, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'hidden',
        },
        background: {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
            background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/images/hero-slide-1.jpg") no-repeat center center/cover',
            filter: 'blur(9px)',
            zIndex: -1,
        },

        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 40px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            zIndex: 1,
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',
        },
        logo: {
            fontSize: '32px',
            fontWeight: 'bold',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#18e7f3',
        },
        nav: {
            display: 'flex',
            gap: '25px',
        },
        navLink: {
            color: '#fff',
            textDecoration: 'none',
            fontSize: '18px',
            transition: 'color 0.3s ease',
            position: 'relative',
            paddingBottom: '2px',
        },
        navLinkBefore: {
            content: '""',
            position: 'absolute',
            width: '0%',
            height: '2px',
            bottom: '0',
            left: '0',
            backgroundColor: '#18e7f3',
            transition: 'width 0.3s ease',
        },
        navLinkHoverBefore: {
            width: '100%',
        },
        main: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '80px 20px',
            maxWidth: '1200px',
            margin: '0 auto',
            zIndex: 1,
            flexWrap: 'wrap',
        },
        textSection: {
            maxWidth: '500px',
            textShadow: '1px 1px 10px rgba(0, 0, 0, 0.7)',
            marginBottom: '20px',
        },
        headline: {
            fontSize: '60px',
            fontWeight: '800',
            lineHeight: '1.2',
            marginBottom: '20px',
            letterSpacing: '-1px',
        },
        highlight: {
            color: '#18e7f3',
        },
        description: {
            fontSize: '20px',
            lineHeight: '1.6',
            margin: '20px 0',
        },
        buttonContainer: {
            display: 'flex',
            gap: '20px',
            marginTop: '30px',
        },
        button: {
            padding: '15px 30px',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '30px',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
        createAccountButton: {
            backgroundColor: '#18e7f3',
            color: '#4c2889',
        },
        loginButton: {
            backgroundColor: '#fff',
            color: '#4c2889',
        },
        buttonHover: {
            transform: 'translateY(-3px)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
        },
        imageContainer: {
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            maxWidth: '600px',
            transition: 'transform 0.5s ease',
        },
        imageHover: {
            transform: 'scale(1.05)',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.background} />

            <header style={styles.header}>
                <div style={styles.logo}>Adex</div>
                <nav style={styles.nav}>
                    {['Home', 'Trading', 'Tools', 'Insights', 'Talk to us'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                            style={styles.navLink}
                            onMouseEnter={(e) => {
                                e.currentTarget.querySelector('span').style.width = '100%';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.querySelector('span').style.width = '0%';
                            }}
                        >
                            {item}
                            <span style={{ ...styles.navLinkBefore }} />
                        </a>
                    ))}
                </nav>
            </header>

            <main style={styles.main}>
                <div style={styles.textSection}>
                    <h1 style={styles.headline}>
                        TRADE <span style={styles.highlight}>SMARTER</span>
                    </h1>
                    <p style={styles.description}>
                        Find your next opportunity on 800+ CFD markets with TradingView integration, daily trade ideas, professional trading insight, and code-free automation.
                    </p>
                    <div style={styles.buttonContainer}>
                        <button
                            style={{ ...styles.button, ...styles.createAccountButton }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#fff';
                                e.target.style.color = '#4c2889';
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#18e7f3';
                                e.target.style.color = '#4c2889';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                            }}
                        >
                            Create Account
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.loginButton }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#18e7f3';
                                e.target.style.color = '#fff';
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#fff';
                                e.target.style.color = '#4c2889';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                            }}
                        >
                            Login
                        </button>
                            <button
                                style={{
                                    ...styles.button,
                                    ...styles.loginButton,
                                    backgroundColor: '#4c2889',
                                    color: '#fff',
                                    padding: '0.75rem 1.5rem',
                                    fontSize: '1rem',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#18e7f3';
                                    e.target.style.color = '#4c2889';
                                    e.target.style.transform = 'translateY(-3px)';
                                    e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#4c2889';
                                    e.target.style.color = '#fff';
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
                                }}
                                onClick={handleQrButtonClick} // Open popup on click
                            >
                                QR <BsQrCode />
                            </button>

                    </div>
                </div>
                <div
                    style={styles.imageContainer}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    <img
                        src="../assets/images/hero-slide-1.jpg"
                        alt="Professional"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </main>
            {isPopupOpen && <Popup onClose={handleClosePopup}/>}
            <InfoSection />
        </div>
    );
}

export default Home;
