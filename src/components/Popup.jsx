import React from 'react';

const Popup = ({ onClose }) => {
    const styles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        },
        content: {
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '10px',
            textAlign: 'center',
            maxWidth: '400px',
            width: '100%',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            transform: 'scale(0.8)',
            opacity: 0,
            animation: 'popupAnimation 0.4s forwards',
        },
        closeBtn: {
            backgroundColor: '#4c2889',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            fontSize: '1.5rem',
            cursor: 'pointer',
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '40px',
            height: '40px',
            lineHeight: '40px',
            textAlign: 'center',
        },
        qrImage: {
            maxWidth: '100%',
            height: 'auto',
            marginTop: '20px',
        },
    };

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.content} onClick={(e) => e.stopPropagation()}>
                <button style={styles.closeBtn} onClick={onClose}>&times;</button>
                <h2>Scan the QR Code</h2>
                <img
                    src="../assets/images/hero-slide-1.jpg"
                    alt="QR Code"
                    style={styles.qrImage}
                />
            </div>
        </div>
    );
};

export default Popup;
