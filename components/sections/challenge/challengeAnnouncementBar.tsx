import styles from './challenge.module.css';
import { ZOOM_REGISTRATION_URL } from './links';

export default function ChallengeAnnouncementBar() {
  return (
    <div className={styles.announceBar}>
      <span className={styles.announceMeta}>Online · Free · Wed 23 Sept, 7.15 PM</span>
      <a
        href={ZOOM_REGISTRATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} ${styles.btnPrimary} ${styles.blueprint} ${styles.announceBtn}`}
      >
        Claim my seat
        <i className={`${styles.corner} ${styles.cornerTl}`} />
        <i className={`${styles.corner} ${styles.cornerTr}`} />
        <i className={`${styles.corner} ${styles.cornerBl}`} />
        <i className={`${styles.corner} ${styles.cornerBr}`} />
      </a>
    </div>
  );
}
