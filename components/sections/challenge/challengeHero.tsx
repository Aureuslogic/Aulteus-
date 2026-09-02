import styles from "./challenge.module.css";
import CandlestickBackdrop from "./candlestickBackdrop";
import { ZOOM_REGISTRATION_URL } from "./links";

export default function ChallengeHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroGridBg} aria-hidden="true" />
      <CandlestickBackdrop />
      <div className={styles.heroGradient} aria-hidden="true" />
      <div className={styles.heroInner}>
        <div>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Registration open
          </div>
          <div className={styles.presents}>Aulteus Logic presents</div>
          <h1 className={styles.h1}>The 30 Day</h1>
          <h1 className={`${styles.h1} ${styles.h1Gold}`}>Trading Challenge</h1>
          <p className={styles.lead}>
            Four weeks to learn how fundamentals and technicals actually work
            together, using the EIT Framework. Live, online, and free.
          </p>
          <div className={styles.actions}>
            <a
              href={ZOOM_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.blueprint}`}
            >
              Register now
              <i className={`${styles.corner} ${styles.cornerTl}`} />
              <i className={`${styles.corner} ${styles.cornerTr}`} />
              <i className={`${styles.corner} ${styles.cornerBl}`} />
              <i className={`${styles.corner} ${styles.cornerBr}`} />
            </a>
            <span className={styles.note}>Two minutes. No payment, ever.</span>
          </div>
        </div>

        <div className={`${styles.eventCard} ${styles.blueprint}`}>
          <i className={`${styles.corner} ${styles.cornerTl}`} />
          <i className={`${styles.corner} ${styles.cornerTr}`} />
          <i className={`${styles.corner} ${styles.cornerBl}`} />
          <i className={`${styles.corner} ${styles.cornerBr}`} />
          <div className={styles.eventKicker}>Kick-off</div>
          <div className={styles.eventDate}>
            Wednesday
            <br />
            23rd September
          </div>
          <div className={styles.eventTime}>7.15 PM</div>
          <div className={styles.eventRow}>
            <span className={styles.eventRowLabel}>Format</span>
            <span className={styles.eventRowValue}>100% online</span>
          </div>
          <div className={styles.eventRow}>
            <span className={styles.eventRowLabel}>Length</span>
            <span className={styles.eventRowValue}>
              4 weeks · 4 live sessions
            </span>
          </div>
          <div className={styles.eventRowLast}>
            <span className={styles.eventRowLabel}>Cost</span>
            <span className={`${styles.eventRowValue} ${styles.eventRowGold}`}>
              Free
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
