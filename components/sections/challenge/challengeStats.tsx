import styles from "./challenge.module.css";

const STATS = [
  { value: "$9T", gold: true, label: "Traded daily in FX" },
  { value: "30", gold: false, label: "Days, start to finish" },
  { value: "3", gold: false, label: "Markets to choose from" },
  { value: "£0", gold: false, label: "To take part" },
];

export default function ChallengeStats() {
  return (
    <div className={styles.statsOuter}>
      <div className={styles.statsGrid}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.stat}>
            <div
              className={`${styles.statValue}${s.gold ? " " + styles.statValueGold : ""}`}
            >
              {s.value}
            </div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
