import React from 'react';
import styles from './QR.module.css';
import tokens from './tokens.module.css';
import QRDisplay from './QRDisplay';
import QRManagement from './QRManagement';

/**
 * Manage QR screen component that handles QR code display and management functionality.
 * Preserves the Figma layout and style tokens while providing interactive features.
 */
// PUBLIC_INTERFACE
export default function QR() {
  return (
    <div className={`${styles.manageQrCanvas} ${tokens.frame}`}>
      <main className={styles.main}>
        <h1 className={`${styles.pageTitle} ${tokens.typo96}`}>Manage QR/POS</h1>
        
        <div className={styles.contentGrid}>
          <QRDisplay />
          <QRManagement />
        </div>
      </main>
    </div>
  );
}
