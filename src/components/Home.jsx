import React, { useState, useEffect } from 'react';
import InfoSection from './Trust';
import { BsQrCode } from "react-icons/bs";
import Popup from './Popup';
import AccountSection from './Openacc';
import TradeZoneSection from './TradeZone';
import TrustedTrading from './TrustedTrading';

function Home() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            padding: '20px 30px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            zIndex: 1,
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',
            position: 'relative',
        },
        logo: {
            fontSize: '32px',
            fontWeight: 'bold',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#176da8',
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
            backgroundColor: '#176da8',
            transition: 'width 0.3s ease',
        },
        navLinkHoverBefore: {
            width: '100%',
        },
        main: {
            display: 'flex',
            justifyContent: windowWidth > 1180 ? 'space-between' : "center",
            alignItems: 'center',
            padding: '80px 20px',
            maxWidth: windowWidth > 1180 ? '1200px' : null,
            width: "100%",
            margin: '0 auto',
            zIndex: 1,
            flexWrap: 'wrap',
            gap: "40px"
        },
        textSection: {
            maxWidth: windowWidth > 1180 ? '500px' : "900px",
            textShadow: '1px 1px 10px rgba(0, 0, 0, 0.7)',
            marginBottom: '20px',
        },
        headline: {
            fontSize: windowWidth > 443 ? '55px' : "40px",
            fontWeight: '800',
            lineHeight: '1.2',
            marginBottom: '20px',
            letterSpacing: '-1px',
        },
        highlight: {
            color: '#176da8',
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
            fontFamily: 'Poppins, Arial, sans-serif',
        },
        createAccountButton: {
            backgroundColor: '#176da8',
            color: 'white',
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
                <img
                    src="../assets/images/Fastone-pngLogo.png"
                    alt="Hero"
                    style={{ width: windowWidth > 990 ? '5%' : windowWidth > 682 ? "10%" : "20%", height: 'auto', ...styles.imageHover }}
                />

            </header>


            <main style={styles.main}>
                <section style={styles.textSection}>
                    <h1 style={styles.headline}>
                        Explore <span style={styles.highlight}>FastOne</span> Markets
                    </h1>
                    <p style={styles.description}>
                        Super Fast execution<br/>
                        Super Fast Customer Service<br/>
                        Super Fast payments and withdrawals<br/>
                        Register your interest today.

                    </p>
                    <div style={styles.buttonContainer}>
                        <button
                            style={{ ...styles.button, ...styles.createAccountButton }}
                            onClick={() => {
                                window.open('https://docs.google.com/forms/d/e/1FAIpQLSc8lIZYQml5Q8QrENS99F80sWQeik9Nnl1Dk_KVHZvyQvXIEg/viewform', '_blank');
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            Register Today
                        </button>
                    </div>
                </section>
                {windowWidth > 1180 && (
                    <div style={styles.imageContainer}>
                        <img
                            src="../assets/images/hero-slide-1.jpg"
                            alt="Hero"
                            style={{ width: '100%', height: 'auto', ...styles.imageHover }}
                        />
                    </div>
                )}

            </main>
            <InfoSection />
            <TradeZoneSection />
            <AccountSection />
            <button onClick={handleQrButtonClick} style={{ position: 'fixed', bottom: '20px', right: '20px', background: '#176da8', border: 'none', borderRadius: '100%', padding: '20px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', zIndex: 1000 }}>
                <BsQrCode style={{ color: '#fff', fontSize: '35px' }} />
            </button>
            {isPopupOpen && <Popup onClose={handleClosePopup} />}
        </div>
    );
}

export default Home;

