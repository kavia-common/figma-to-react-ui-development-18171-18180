import React from 'react';
import styles from './Home.module.css';
import tokens from './tokens.module.css';

/**
 * Home screen composed from extracted HTML/CSS.
 * The layout preserves fixed-width canvas consistent with the Figma desktop frame (1440px).
 * Interactive elements provide basic click handlers for demonstration.
 */

// PUBLIC_INTERFACE
export default function Home() {
  /** This is the public Home screen component for the application. It renders header, sidebar, hero, stats, and panels. */

  // PUBLIC_INTERFACE
  const handleCtaClick = (e) => {
    e.preventDefault();
    // Mirrors assets/app.js behavior
    // eslint-disable-next-line no-console
    console.log('Download App Now clicked');
  };

  // PUBLIC_INTERFACE
  const handleNavClick = (e, target) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Navigate to:', target);
  };

  return (
    <div className={`${tokens.frame} ${tokens.homeCanvas}`}>
      <Header />
      <Sidebar onNavClick={handleNavClick} />
      <Main onDownloadClick={handleCtaClick} />
    </div>
  );
}

function Header() {
  return (
    <header className={`${styles.header} ${tokens.frame}`}>
      <div className={`${styles.brandGroup} ${tokens.frame}`} aria-label="Brand">
        <div className={`${styles.brandEmblem} ${tokens.frame}`} aria-hidden="true">
          <span className={`${styles.emblemVec} ${styles.vecA}`} />
          <span className={`${styles.emblemVec} ${styles.vecB}`} />
          <span className={`${styles.emblemVec} ${styles.vecC}`} />
          <span className={`${styles.emblemVec} ${styles.vecD}`} />
          <span className={`${styles.emblemVec} ${styles.vecE}`} />
          <span className={`${styles.emblemVec} ${styles.vecF}`} />
        </div>
        <div className={styles.brandWordmark} aria-label="Pay BUSINESS">
          <div className={`${tokens.typo83} ${styles.pay}`}>Pay</div>
          <div className={`${tokens.typo84} ${styles.business}`}>BUSINESS</div>
        </div>
      </div>

      <div className={`${styles.headerRight} ${tokens.hstack}`}>
        <div className={`${tokens.style1} ${styles.avatar}`} />
        <div className={`${tokens.vstack} ${styles.nameStack}`}>
          <div className={tokens.typo85} style={{ color: 'var(--color-999999)' }}>
            Hello
          </div>
          <div
            className={styles.fullName}
            style={{
              color: 'var(--color-252525)',
              fontFamily: 'var(--font-gilroy)',
              fontSize: 20,
              fontWeight: 600,
              lineHeight: '24px',
            }}
          >
            Thomas Shelby
          </div>
        </div>
        <div className={styles.chev} aria-hidden="true">
          <span className={styles.chevIcon} />
        </div>
      </div>
    </header>
  );
}

function Sidebar({ onNavClick }) {
  return (
    <aside className={`${styles.sidebar} ${tokens.frame} ${tokens.style56}`}>
      <nav className={`${tokens.vstack} ${styles.navStack}`} aria-label="Sidebar navigation">
        <a
          href="#"
          className={`${styles.navItem} ${tokens.hstack} ${tokens.style23}`}
          onClick={(e) => onNavClick(e, 'home')}
          data-nav="home"
        >
          <span className={`${styles.navIcon} ${styles.homeIcon}`} />
          <span className={tokens.typo85}>Home</span>
        </a>

        <a
          href="#"
          className={`${styles.navItem} ${tokens.hstack}`}
          onClick={(e) => onNavClick(e, 'qr')}
          data-nav="qr"
        >
          <span className={`${styles.navIcon} ${styles.qrIcon}`} />
          <span className={tokens.typo86}>QR</span>
        </a>

        <a
          href="#"
          className={`${styles.navItem} ${tokens.hstack}`}
          onClick={(e) => onNavClick(e, 'history')}
          data-nav="history"
        >
          <span className={`${styles.navIcon} ${styles.historyIcon}`} />
          <span className={tokens.typo86}>History</span>
          <span className={styles.navCaret} />
        </a>

        <a
          href="#"
          className={`${styles.navItem} ${tokens.hstack}`}
          onClick={(e) => onNavClick(e, 'profile')}
          data-nav="profile"
        >
          <span className={`${styles.navIcon} ${styles.profileIcon}`} />
          <span className={tokens.typo86}>Profile</span>
        </a>
      </nav>

      <div className={`${styles.sidebarBottom} ${tokens.frame}`}>
        <div className={styles.bharatConnectLogo} aria-label="Bharat Connect">
          <span className={`${styles.bvec} ${styles.b1}`} />
          <span className={`${styles.bvec} ${styles.b2}`} />
          <span className={`${styles.bvec} ${styles.b3}`} />
          <span className={`${styles.bvec} ${styles.b4}`} />
          <span className={`${styles.bvec} ${styles.b5}`} />
          <span className={`${styles.bvec} ${styles.b6}`} />
          <span className={`${styles.bvec} ${styles.b7}`} />
          <span className={`${styles.bvec} ${styles.b8}`} />
          <span className={`${styles.bvec} ${styles.b9}`} />
          <span className={`${styles.bvec} ${styles.b10}`} />
          <span className={`${styles.bvec} ${styles.b11}`} />
          <span className={`${styles.bvec} ${styles.b12}`} />
          <span className={`${styles.bvec} ${styles.b13}`} />
          <span className={`${styles.bvec} ${styles.b14}`} />
        </div>
      </div>
    </aside>
  );
}

function Main({ onDownloadClick }) {
  return (
    <main className={`${styles.main} ${tokens.frame}`}>
      <section className={`${styles.hero} ${tokens.frame}`}>
        <div className={`${styles.heroGraphic} ${tokens.frame}`} aria-hidden="true">
          <span className={`${styles.hg} ${styles.hv1} ${tokens.style10}`} />
          <span className={`${styles.hg} ${styles.hv2} ${tokens.style60}`} />
          <span className={`${styles.hg} ${styles.hv3} ${tokens.style10}`} />
          <span className={`${styles.hg} ${styles.hv4} ${tokens.style10}`} />
          <span className={`${styles.hg} ${styles.hv5} ${tokens.style61}`} />
          <span className={`${styles.hg} ${styles.hv6} ${tokens.style60}`} />
        </div>
        <div className={`${tokens.vstack} ${styles.heroCopy}`}>
          <h1 className={tokens.typo87}>
            Pay ₹1/month* for the QPay
            <br />
            POS Device
          </h1>
          <p className={tokens.typo88}>One device for accepting all modes of payments</p>
          <a
            href="#"
            id="download-app-cta"
            className={`${tokens.cta} ${tokens.style62} ${tokens.typo85}`}
            onClick={onDownloadClick}
          >
            Download App Now!
          </a>
        </div>
      </section>

      <section className={`${styles.stats} ${tokens.hstack}`} aria-label="Stats">
        <StatCard value="1.5k" label="Account Holders" />
        <StatCard value="2.1k" label="Transactions" />
        <StatCard value="2.3k" label="Settlement" />
        <StatCard value="45k" label="QR Orders" />
      </section>

      <section className={`${styles.dual} ${tokens.hstack}`} aria-label="Profile and QR">
        <Panel title="Profile" ctaText="Next">
          <div className={tokens.hstack}>
            <Donut percentage={30} />
            <div className={`${tokens.vstack} ${styles.checklist}`}>
              <div className={tokens.typo93} style={{ color: 'var(--color-252525)' }}>
                Complete your profile
              </div>
              <div className={`${tokens.vstack} ${styles.items}`}>
                <div className={tokens.typo90}>Personal KYC</div>
                <div className={tokens.typo90}>Company KYC</div>
                <div className={tokens.typo90}>Onboarding details</div>
              </div>
            </div>
          </div>
        </Panel>

        <Panel title="QR" ctaText="View more">
          <div className={tokens.hstack}>
            <div className={styles.qrPreview} />
            <div className={`${tokens.vstack} ${styles.checklist}`}>
              <div className={tokens.typo93} style={{ color: 'var(--color-252525)' }}>
                Order QR
              </div>
              <div className={`${tokens.vstack} ${styles.items}`}>
                <div className={tokens.typo90}>Receive Payment</div>
                <div className={tokens.typo90}>Order new QRs</div>
                <div className={tokens.typo90}>Download QR</div>
              </div>
            </div>
          </div>
        </Panel>
      </section>

      <section className={`${styles.dualSecond} ${tokens.hstack}`} aria-label="Settlement and Transactions">
        <PanelHeaded
          title="Settlement"
          total="₹1,23,816.19"
          ctaText="Settle Now"
          rows={[
            { name: 'Ibrahim', time: '23 Oct, 09:15 AM', amount: '+₹90' },
            { name: 'Ibrahim', time: '23 Oct, 09:15 AM', amount: '+₹90' },
            { name: 'Ibrahim', time: '23 Oct, 09:15 AM', amount: '+₹90' },
          ]}
        />

        <PanelHeaded
          title="Total Transactions"
          total="₹1,23,816.19"
          ctaText="View All"
          rows={[
            { name: 'Ibrahim', time: '23 Oct, 09:15 AM', amount: '+₹90' },
            { name: 'Ibrahim', time: '23 Oct, 09:15 AM', amount: '+₹90' },
            { name: 'Ibrahim', time: '23 Oct, 09:15 AM', amount: '+₹90' },
          ]}
        />
      </section>
    </main>
  );
}

function StatCard({ value, label }) {
  return (
    <div className={`${styles.statCard} ${tokens.vstack} ${tokens.style63}`}>
      <div className={tokens.typo89} style={{ color: 'var(--color-42794a)' }}>
        {value}
      </div>
      <div className={tokens.typo90} style={{ color: 'var(--color-999999)' }}>
        {label}
      </div>
    </div>
  );
}

function Panel({ title, ctaText, children }) {
  return (
    <div className={`${styles.panel} ${tokens.vstack} ${tokens.style34}`}>
      <div className={`${styles.panelTitle} ${tokens.typo91}`}>{title}</div>
      <div className={`${styles.panelBody} ${tokens.hstack}`}>{children}</div>
      <div className={`${styles.divider} ${tokens.style35}`} />
      <div className={`${styles.panelCta} ${tokens.style137} ${tokens.cta}`}>
        <span className={tokens.typo94}>{ctaText}</span>
      </div>
    </div>
  );
}

function PanelHeaded({ title, total, rows, ctaText }) {
  return (
    <div className={`${styles.panel} ${tokens.vstack} ${tokens.style34}`}>
      <div className={`${styles.panelHead} ${tokens.hstack}`}>
        <div className={tokens.vstack}>
          <div className={tokens.typo91}>{title}</div>
          <div className={tokens.typo93}>{total}</div>
        </div>
        <div className={styles.chevNarrow} aria-hidden="true" />
      </div>

      <div className={`${styles.divider} ${tokens.style35}`} />
      <div className={`${styles.panelList} ${tokens.vstack}`}>
        {rows.map((r, idx) => (
          <div key={idx} className={`${styles.row} ${tokens.hstack}`}>
            <div className={tokens.vstack}>
              <div className={tokens.typo93}>{r.name}</div>
              <div className={tokens.typo90}>{r.time}</div>
            </div>
            <div className={tokens.typo93}>{r.amount}</div>
          </div>
        ))}
      </div>

      <div className={`${styles.panelCta} ${tokens.style137} ${tokens.cta}`}>
        <span className={tokens.typo94}>{ctaText}</span>
      </div>
    </div>
  );
}

function Donut({ percentage = 30 }) {
  // Static representation approximating the CSS mask. Label shows percentage.
  return (
    <div className={styles.donut} role="img" aria-label={`Profile ${percentage}% complete`}>
      <div className={styles.donutBg} />
      <div className={styles.donutFill} />
      <div className={`${styles.donutLabel} ${tokens.typo92 || ''}`} style={{ color: 'var(--color-61ce70)' }}>
        {percentage}%
      </div>
    </div>
  );
}
