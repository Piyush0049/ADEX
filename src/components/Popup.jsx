import React from 'react';

const Popup= ({ onClose }) => {
    const styles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        },
        content: {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            width: '90%',
            maxWidth: '400px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            position: 'relative',
        },
        closeBtn: {
            backgroundColor: '#ff5c5c',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            fontSize: '1.2rem',
            cursor: 'pointer',
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '30px',
            height: '30px',
            lineHeight: '30px',
            textAlign: 'center',
        },
        qrImage: {
            maxWidth: '100%',
            height: 'auto',
            marginTop: '15px',
        },
    };

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.content} onClick={(e) => e.stopPropagation()}>
                <button style={styles.closeBtn} onClick={onClose}>&times;</button>
                <h2>Scan the QR Code</h2>
                <img
                    src="../assets/images/Qr.jpg" // Update the path as needed
                    alt="QR Code"
                    style={styles.qrImage}
                />
            </div>
        </div>
    );
};

export default Popup;
