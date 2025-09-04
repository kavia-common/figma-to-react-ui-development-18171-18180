import React, { useState } from 'react';
import styles from './QR.module.css';
import tokens from './tokens.module.css';

// Mock data for QR codes
const mockQRs = [
  {
    id: 'Q201946579',
    description: 'All Marketing Sales-MS1903041155331648980231',
    terminal: 'Terminal 1',
    image: '/path/to/qr.png'
  }
  // Add more mock QRs as needed
];

// PUBLIC_INTERFACE
export default function QRManagement() {
  /** QR code management panel component for handling multiple QR codes */
  const [activeTab, setActiveTab] = useState('active'); // 'active' or 'requests'

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleQRItemClick = (qrId) => {
    console.log('QR item clicked:', qrId);
    // Implement expansion/details view
  };

  const handleRequestMore = () => {
    console.log('Request more QR codes clicked');
    // Implement request flow
  };

  return (
    <div className={`${styles.panel} ${styles.managementPanel} ${tokens.style34}`}>
      <div className={`${styles.tabHeader} ${tokens.style73}`}>
        <button
          className={`${styles.tab} ${activeTab === 'active' ? styles.active : ''} ${tokens.style74}`}
          onClick={() => handleTabChange('active')}
        >
          <span className={tokens.typo100}>Active QR Codes</span>
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'requests' ? styles.active : ''} ${tokens.style75}`}
          onClick={() => handleTabChange('requests')}
        >
          <span className={tokens.typo101}>QR Code Requests</span>
        </button>
      </div>

      <div className={styles.qrList}>
        {mockQRs.map((qr) => (
          <React.Fragment key={qr.id}>
            <div className={styles.qrItem} onClick={() => handleQRItemClick(qr.id)}>
              <div className={`${styles.qrPreview} ${tokens.style78}`}>
                <img src={qr.image} alt={`QR Preview - ${qr.id}`} />
              </div>
              <div className={`${styles.qrDetails} ${tokens.vstack}`}>
                <span className={tokens.typo93}>{qr.id}</span>
                <span className={tokens.typo102}>{qr.description}</span>
                <span className={tokens.typo103}>{qr.terminal}</span>
              </div>
              <span className={styles.expandIcon}></span>
            </div>
            <hr className={`${styles.divider} ${tokens.style35}`} />
          </React.Fragment>
        ))}
      </div>

      <button className={`${styles.requestMore} ${tokens.style137}`} onClick={handleRequestMore}>
        <span className={tokens.typo94}>Request more QR Codes</span>
      </button>
    </div>
  );
}
