import React from 'react';
import { useState, useEffect } from 'react';
const AccountSection = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sectionStyle = {
        backgroundColor: '#ffffff',
        padding: '60px 32px',
        textAlign: 'center',
    };

    const headingStyle = {
        fontSize: windowWidth > 560 ? '2.5rem' : "2rem",
        fontWeight: 'bold',
        color: '#2d3748',
    };

    const cardContainerStyle = {
        display: 'flex',
        flexDirection : windowWidth > 830 ? "row" : "column",
        justifyContent: 'center',
        gap: '24px',
        alignItems: 'center',
        marginTop: '48px',
    };

    const cardStyle = {
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: windowWidth > 830 ? '400px ' : null,
    };

    const greenCardStyle = {
        ...cardStyle,
        background: 'linear-gradient(135deg, #48bb78, #00b6da)', // Gradient from one shade of green to another
        color: '#ffffff',
    };
    
    const whiteCardStyle = {
        ...cardStyle,
        background: 'linear-gradient(135deg, #48bb78, white)', 
        color: '#2d3748',
        border: '1px solid #e2e8f0',
    };

    const cardTitleStyle = {
        fontSize: '1.75rem',
        fontWeight: '600',
        marginBottom: '16px',
    };

    const cardTextStyle = {
        marginBottom: '24px',
        color: 'white',
    };

    const buttonStyle = {
        backgroundColor: '#ffffff',
        color: '#48bb78',
        fontWeight: '600',
        padding: '10px 20px',
        borderRadius: '9999px',
        cursor: 'pointer',
        border: 'none',
        transition: 'background-color 0.3s ease',
        fontFamily: 'Poppins, Arial, sans-serif',
    };

    const buttonHoverStyle = {
        backgroundColor: '#f7fafc',
    };

    return (
        <div style={sectionStyle}>
            <div style={headingStyle}>Open an account today</div>

            <div style={cardContainerStyle}>
                {/* Card 1 - Create an Account */}
                <div style={greenCardStyle}>
                    <div>
                        <h2 style={cardTitleStyle}>Create an account</h2>
                        <p style={cardTextStyle}>
                            Sign up, create an account and start trading on low spreads with us today.
                        </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <button
                            style={buttonStyle}
                            onClick={() => {
                                window.open('https://docs.google.com/forms/d/e/1FAIpQLSc8lIZYQml5Q8QrENS99F80sWQeik9Nnl1Dk_KVHZvyQvXIEg/viewform', '_blank');
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                        >
                            Open an account
                        </button>
                        <img
                            src="../assets/images/open-account-on-black.png.webp" // Replace with the actual image path
                            alt="Account icon"
                            style={{ width: '64px', height: '64px' }}
                        />
                    </div>
                </div>

                {/* Card 2 - Not Sure */}
                <div style={whiteCardStyle}>
                    <div>
                        <h2 style={{...cardTitleStyle, color : "black"}}>Not sure?</h2>
                        <p style={{...cardTextStyle, color : "black"}}>
                            Take our demo account for a spin in a risk-free environment.
                        </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <button
                        onClick={() => {
                            window.open('https://docs.google.com/forms/d/e/1FAIpQLSc8lIZYQml5Q8QrENS99F80sWQeik9Nnl1Dk_KVHZvyQvXIEg/viewform', '_blank');
                        }}
                            style={{ ...buttonStyle, backgroundColor: '#000', color: '#fff' }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#333')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#000')}
                        >
                            Try a demo
                        </button>
                        <img
                            src="../assets/images/small_box_illustrator_create_account.png" // Replace with the actual image path
                            alt="Demo icon"
                            style={{ width: '64px', height: '64px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSection;
