import styles from "./challenge.module.css";

const WEEKS = [
  {
    tag: "Week 1",
    num: "01",
    title: "Global Markets — Introduction",
    body: "What moves globally, who moves it, and where you fit as a retail trader.",
  },
  {
    tag: "Week 2",
    num: "02",
    title: "Trading platforms and access",
    body: "Get set up properly: platform, orders, spreads, and how to place a trade without guessing.",
  },
  {
    tag: "Week 3",
    num: "03",
    title: "Fundamental trades",
    body: "Rates, data releases and sentiment — the reasons behind the move you are about to take.",
  },
  {
    tag: "Week 4",
    num: "04",
    title: "Technical analysis and opportunities",
    body: "Structure, levels and candles — turning a view into an entry, a stop and a target.",
  },
];

export default function ChallengeProgramme() {
  return (
    <div className={styles.section}>
      <div className={styles.programmeHead}>
        <div>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>02</span>
            <span className={styles.eyebrowLabel}>The programme</span>
          </div>
          <h2 className={styles.h2} style={{ marginBottom: 0 }}>
            Four weeks, one build
          </h2>
        </div>
        <span className={styles.programmeMeta}>Live · Wednesdays 7.15 PM</span>
      </div>
      <div className={styles.weeksGrid}>
        {WEEKS.map((w) => (
          <div key={w.tag} className={styles.weekCard}>
            <div className={styles.weekTop}>
              <span className={styles.weekTag}>{w.tag}</span>
              <span className={styles.weekNum}>{w.num}</span>
            </div>
            <div className={styles.weekTitle}>{w.title}</div>
            <p className={styles.weekBody}>{w.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
