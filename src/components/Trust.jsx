import React, { useState, useEffect } from 'react';

const InfoSection = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sectionStyle = {
        backgroundColor: '#ffffff',
        padding: '64px 32px',
        textAlign: 'center',
    };

    const headingStyle = {
        fontSize: windowWidth > 560 ? '2.5rem' : "2rem",
        fontWeight: 'bold',
        color: '#2d3748',
    };

    const subheadingStyle = {
        marginTop: '16px',
        color: '#718096',
    };

    const cardContainerStyle = {
        display: 'flex',
        flexDirection: windowWidth > 830 ? "row" : "column",
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
        maxWidth: windowWidth > 830 ? '400px' : null,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    };

    const cardHoverEffect = {
        transform: 'translateY(-10px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    };

    const greenCardStyle = {
        ...cardStyle,
        background: 'linear-gradient(135deg, #48bb78, #da5600)',
        color: '#ffffff',
    };

    const whiteCardStyle = {
        ...cardStyle,
        background: 'linear-gradient(135deg, #48bb78, pink)',
        color: '#2d3748',
        border: '1px solid #e2e8f0',
    };

    const cardTitleStyle = {
        fontSize: '1.75rem',
        fontWeight: '600',
        marginBottom: '16px',
    };

    const buttonStyle = {
        backgroundColor: '#ffffff',
        color: '#48bb78',
        fontWeight: '600',
        padding: '10px 20px',
        borderRadius: '9999px',
        cursor: 'pointer',
        border: 'none',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        fontFamily: 'Poppins, Arial, sans-serif',
    };

    const buttonHoverStyle = {
        backgroundColor: '#f7fafc',
    };

    const imageStyle = {
        width: '64px',
        height: '64px',
    };

    return (
        <div style={sectionStyle}>
            <div style={headingStyle}>
                Trust. Confidence. Transparency.
            </div>
            <p style={subheadingStyle}>
                There’s a reason why so many traders have been choosing us.
            </p>

            <div style={cardContainerStyle}>
                {/* Card 1 */}
                <div style={greenCardStyle}>
                    <div>
                        <h2 style={cardTitleStyle}>Compare our costs</h2>
                        <p>Keep your trading costs down with our tight spreads.</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <button
                            onClick={() => {
                                window.open('https://docs.google.com/forms/d/e/1FAIpQLSc8lIZYQml5Q8QrENS99F80sWQeik9Nnl1Dk_KVHZvyQvXIEg/viewform', '_blank');
                            }}
                            style={buttonStyle}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                        >
                            Compare now
                        </button>
                        <img
                            src="../assets/images/compare-prices.png.webp"
                            alt="Cost comparison icon"
                            style={imageStyle}
                        />
                    </div>
                </div>

                {/* Card 2 - Launching this Diwali */}
                <div
                    style={{...whiteCardStyle, marginTop : "16px"}}
                    onMouseEnter={(e) => Object.assign(e.currentTarget.style, cardHoverEffect)}
                    onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
                >
                    <div>
                        <h2 style={cardTitleStyle}>
                            Launching this Diwali
                        </h2>
                        <p style={{ color: '#4e5866' }}>
                            Be part of something big this festive season.
                        </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <button
                            style={buttonStyle}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            onClick={() => {
                                window.open('https://docs.google.com/forms/d/e/1FAIpQLSc8lIZYQml5Q8QrENS99F80sWQeik9Nnl1Dk_KVHZvyQvXIEg/viewform', '_blank');
                            }}
                        >
                            Register Today
                        </button>
                        <img
                            src="../assets/images/favpng_diya.png"
                            alt="Diwali icon"
                            style={imageStyle}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
