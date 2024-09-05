import React from 'react';
import { useState, useEffect } from 'react';

const TrustedTrading = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sectionStyle = {
        backgroundColor: '#f7fafc',
        padding: '80px 20px',
        textAlign: 'center',
    };

    const headingStyle = {
        fontSize: windowWidth > 560 ? '2.5rem' : "2rem",
        paddingBottom : "40px",
        fontWeight: 'bold',
        color: '#2d3748',
        marginBottom: '8px',
    };

    const cardStyle = {
        background: 'linear-gradient(135deg, black, grey)', 
        color: '#ffffff',
        borderRadius: '15px',
        padding: '40px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '900px',
        margin: '0 auto',
        gap: '24px',
    };

    const cardContentStyle = {
        textAlign: 'left',
        flex: '1',
    };

    const cardHeadingStyle = {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '16px',
    };

    const cardTextStyle = {
        color: '#e2e8f0',
        marginBottom: '32px',
    };

    const buttonStyle = {
        backgroundColor: '#fff',
        color: '#000',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '9999px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
        fontFamily: 'Poppins, Arial, sans-serif',
    };

    const buttonHoverStyle = {
        backgroundColor: '#f1f1f1',
    };

    const imageStyle = {
        maxWidth: '300px',
        borderRadius: '10px',
    };

    return (
        <div style={sectionStyle}>
            <div style={headingStyle}>
            Why Us?
            </div>
            <div style={cardStyle}>
                <div style={cardContentStyle}>
                    <h3 style={cardHeadingStyle}>Trusted trading platforms</h3>
                    <p style={cardTextStyle}>
                        Enjoy the power of MT4 & MT5 trading platforms. Advanced charting, expert advisors, and custom signals.
                    </p>
                    <button
                    onClick={() => {
                        window.open('https://docs.google.com/forms/d/e/1FAIpQLSc8lIZYQml5Q8QrENS99F80sWQeik9Nnl1Dk_KVHZvyQvXIEg/viewform', '_blank');
                    }}
                        style={buttonStyle}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
                    >
                        More about MT5
                    </button>
                </div>

                {/* Right content - Image */}
                {windowWidth > 701 &&
                    <div>
                        <img
                            src="../assets/images/webinar_large.png.webp" // Replace with actual image path
                            alt="Trade Zone banner"
                            style={imageStyle}
                        />
                    </div>}
            </div>
        </div>
    );
};

export default TrustedTrading;
