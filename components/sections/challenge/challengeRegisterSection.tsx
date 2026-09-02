import styles from './challenge.module.css';
import { ZOOM_REGISTRATION_URL, DISCORD_URL } from './links';

export default function ChallengeRegisterSection() {
  return (
    <div id="register" className={`${styles.section} ${styles.registerSection}`}>
      <div className={styles.registerGrid}>
        <div className={styles.registerAside}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>04</span>
            <span className={styles.eyebrowLabel}>Registration</span>
          </div>
          <h2 className={styles.h2}>
            Take the
            <br />
            challenge
          </h2>
          <p className={styles.sectionLead}>
            Registration happens on Zoom — that is where your seat is
            confirmed and where the session link and reminders come from.
          </p>
          <div className={styles.asideFacts}>
            <div>Delivered entirely online.</div>
            <div>Free — but places are limited to people who intend to attend.</div>
            <div>Trading carries risk. Only ever risk what you can afford to lose.</div>
          </div>
        </div>

        <div className={`${styles.formCard} ${styles.blueprint}`}>
          <i className={`${styles.corner} ${styles.cornerTl}`} />
          <i className={`${styles.corner} ${styles.cornerTr}`} />
          <i className={`${styles.corner} ${styles.cornerBl}`} />
          <i className={`${styles.corner} ${styles.cornerBr}`} />

          <div className={styles.doneKicker}>Wednesday 23rd September, 7.15 PM</div>
          <div className={styles.doneHeading} style={{ marginTop: 8 }}>Reserve your seat</div>
          <p className={styles.doneBody} style={{ marginTop: 16 }}>
            Registration is quick and runs through Zoom. You will get your
            join link and reminders straight from there.
          </p>

          <div className={styles.actions} style={{ marginTop: 26 }}>
            <a
              href={ZOOM_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.blueprint}`}
            >
              Register on Zoom
              <i className={`${styles.corner} ${styles.cornerTl}`} />
              <i className={`${styles.corner} ${styles.cornerTr}`} />
              <i className={`${styles.corner} ${styles.cornerBl}`} />
              <i className={`${styles.corner} ${styles.cornerBr}`} />
            </a>
            <span className={styles.note}>Two minutes. No payment, ever.</span>
          </div>

          <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--line-strong)' }}>
            <p className={styles.doneFact}>
              Already registered, or want to talk to other traders before the
              first session? Join the free community.
            </p>
            <div style={{ marginTop: 16 }}>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                Join the community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
