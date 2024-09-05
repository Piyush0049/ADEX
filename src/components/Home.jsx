import React, { useState, useEffect } from 'react';
import InfoSection from './Trust';
import { BsQrCode, BsList } from "react-icons/bs";
import Popup from './Popup';
import AccountSection from './Openacc';
import TradeZoneSection from './TradeZone';
import TrustedTrading from './TrustedTrading';
import { IoClose } from "react-icons/io5";

function Home() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const isMobileView = windowWidth < 670;

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
            position: 'relative',
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
            fontSize: '55px',
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
            fontFamily: 'Poppins, Arial, sans-serif',
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
        sidebar: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '300px',
            height: '100%',
            background: 'linear-gradient(145deg, rgba(76, 40, 137, 0.9), rgba(24, 231, 243, 0.5))',
            color: '#fff',
            padding: '20px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
            transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.5s ease-in-out, opacity 0.3s ease', // Added opacity transition
            zIndex: 1001,
            backdropFilter: 'blur(10px)',
            borderRight: '1px solid rgba(255, 255, 255, 0.2)',
            overflowY: 'auto',
            opacity: isSidebarOpen ? '1' : '0', // Added opacity for smooth fading
        },
        sidebarLink: {
            display: 'block',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '20px',
            margin: '20px 0',
            padding: '15px 10px',
            borderRadius: '10px', // Rounded corners for the links
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background for links
            transition: 'background-color 0.3s ease, padding-left 0.3s ease', // Smooth transition for hover effects
        },
        sidebarLinkHover: {
            backgroundColor: 'rgba(24, 231, 243, 0.2)', // Subtle color change on hover
            paddingLeft: '20px', // Left padding on hover
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', // Adds a subtle shadow effect on hover
        },
        closeSidebar: {
            fontSize: '24px',
            cursor: 'pointer',
            color: '#fff',
            marginTop: '20px',
            transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth hover effect for the close button
        },
        closeSidebarHover: {
            backgroundColor: 'rgba(255, 255, 255, 0.3)', // Hover effect for the close button
            transform: 'rotate(90deg)', // Rotate effect for close button on hover
        },
        hamburger: {
            fontSize: "15px" // Hide hamburger for larger screens
        },
        '@media (max-width: 670px)': {
            header: {
                padding: '20px',
                flexDirection: 'column',
                alignItems: 'flex-start',
            },
            nav: {
                display: 'none',
            },
            hamburger: {
                display: 'block', // Show hamburger for mobile view
            },
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.background} />
            <header style={styles.header}>
                {isMobileView && (
                    <nav style={styles.nav}>
                        <div style={{ ...styles.hamburger, fontSize: '30px' }} onClick={handleSidebarToggle}>
                            <BsList />
                        </div>
                    </nav>
                )}
                <img
                    src="../assets/images/Fastone-pngLogo.png"
                    alt="Hero"
                    style={{ width: windowWidth > 990 ? '5%' : windowWidth > 682 ?  "10%" : "15%", height: 'auto', ...styles.imageHover }}
                />
                {!isMobileView && (
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
                                <span style={styles.navLinkBefore}></span>
                            </a>
                        ))}
                    </nav>
                )}
            </header>
            {isMobileView && isSidebarOpen && (
                <div style={styles.sidebar}>
                    <button
                        style={styles.closeSidebar}
                        onClick={handleSidebarToggle}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(90deg)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(0deg)')}
                    >
                        <IoClose />
                    </button>

                    {['Home', 'Trading', 'Tools', 'Insights', 'Talk to us'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                            style={styles.sidebarLink}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(24, 231, 243, 0.2)';
                                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
                                e.currentTarget.style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.paddingLeft = '10px';
                            }}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}

            <main style={styles.main}>
                <section style={styles.textSection}>
                    <h1 style={styles.headline}>
                        Discover the <span style={styles.highlight}>Best</span> Solutions
                    </h1>
                    <p style={styles.description}>
                        Explore our range of services and find the perfect fit for your needs. Whether you're looking for a day pass or a dedicated office space, we have flexible options tailored for you.
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
                            Sign up
                        </button>
                        <button
                            style={{ ...styles.button, ...styles.loginButton }}
                            onClick={() => {
                                window.open('https://docs.google.com/forms/d/e/1FAIpQLSc8lIZYQml5Q8QrENS99F80sWQeik9Nnl1Dk_KVHZvyQvXIEg/viewform', '_blank');
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            Login
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
            <TrustedTrading />
            <button onClick={handleQrButtonClick} style={{ position: 'fixed', bottom: '20px', right: '20px', background: '#18e7f3', border: 'none', borderRadius: '100%', padding: '20px', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)', zIndex: 1000 }}>
                <BsQrCode style={{ color: '#fff', fontSize: '35px' }} />
            </button>
            {isPopupOpen && <Popup onClose={handleClosePopup} />}
        </div>
    );
}

export default Home;

