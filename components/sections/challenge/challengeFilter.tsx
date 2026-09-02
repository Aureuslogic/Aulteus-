import styles from "./challenge.module.css";

const FOR = [
  "You are serious, and you will show up for four live Wednesday sessions.",
  "You want to understand why price moves, not just copy someone else's signals.",
  "You are starting out, or restarting after losses, and want a proper process.",
  "You learn better with a live community than alone with a chart at midnight.",
];

const NOT_FOR = [
  "You are looking for guaranteed returns or a tip sheet.",
  "You want someone to trade your account for you.",
  "You will register and never open the sessions. Leave the seat for someone who will.",
  "You are not prepared to risk only what you can afford to lose.",
];

export default function ChallengeFilter() {
  return (
    <div className={styles.section}>
      <div className={styles.eyebrow}>
        <span className={styles.eyebrowNum}>03</span>
        <span className={styles.eyebrowLabel}>The filter</span>
      </div>
      <div className={styles.filterGrid}>
        <div className={styles.filterCol}>
          <div className={styles.filterHead}>This is for you if</div>
          <div className={styles.filterList}>
            {FOR.map((t) => (
              <div key={t} className={styles.filterItem}>
                <span className={styles.filterMark}>+</span>
                <span className={styles.filterText}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.filterCol} ${styles.filterColNo}`}>
          <div className={styles.filterHeadMuted}>This is not for you if</div>
          <div className={styles.filterList}>
            {NOT_FOR.map((t) => (
              <div key={t} className={styles.filterItem}>
                <span className={styles.filterMarkMuted}>−</span>
                <span className={styles.filterTextMuted}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
