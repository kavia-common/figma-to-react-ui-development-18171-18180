import React from 'react';
import styles from './QR.module.css';
import tokens from './tokens.module.css';

// PUBLIC_INTERFACE
export default function QRDisplay() {
  /** QR code display panel component showing the current QR code and actions */
  const handleCopy = () => {
    const upiId = '9876543210@qpay'; // In production, get from props/context
    navigator.clipboard.writeText(upiId)
      .then(() => console.log('UPI ID copied'));
  };

  const handleDownload = () => {
    console.log('Download QR clicked');
    // Implement download logic
  };

  const handleShare = () => {
    console.log('Share QR clicked');
    if (navigator.share) {
      navigator.share({
        title: 'My QR Code',
        text: 'Here is my payment QR code',
        url: window.location.href
      });
    }
  };

  return (
    <div className={`${styles.panel} ${styles.qrPanel} ${tokens.style34}`}>
      <div className={`${styles.payBrand} ${tokens.hstack}`}>
        <div className={styles.brandLogo}></div>
        <span className={tokens.typo97}>Pay</span>
      </div>

      <div className={styles.qrDisplay}>
        <img src="/path/to/qr.png" alt="QR Code" className={styles.qrCode} />
      </div>

      <div className={`${styles.qrInfo} ${tokens.vstack}`}>
        <div className={`${styles.upiDetails} ${tokens.hstack}`}>
          <span className={tokens.typo98}>UPI ID:</span>
          <span className={tokens.typo98}>9876543210@qpay</span>
          <button className={styles.copyBtn} onClick={handleCopy} aria-label="Copy UPI ID">
            <span className={styles.copyIcon}></span>
          </button>
        </div>
        <span className={tokens.typo99}>Ibrahim Mohammedali</span>
      </div>

      <div className={`${styles.actionButtons} ${tokens.hstack}`}>
        <button className={`${styles.actionBtn} ${tokens.style72}`} onClick={handleDownload}>
          <span className={styles.downloadIcon}></span>
          <span className={tokens.typo67}>Download</span>
        </button>
        <button className={`${styles.actionBtn} ${tokens.style72}`} onClick={handleShare}>
          <span className={styles.shareIcon}></span>
          <span className={tokens.typo67}>Share</span>
        </button>
      </div>
    </div>
  );
}
