import styles from "./challenge.module.css";

const LETTERS = [
  {
    glyph: "E",
    title: "Emotionally",
    body: "Name what fear and greed do to your entries before the market charges you for it.",
  },
  {
    glyph: "I",
    title: "Intelligent",
    body: "Read the fundamentals that move price, then let the technicals tell you where and when.",
  },
  {
    glyph: "T",
    title: "Trader",
    body: "Repeatable process, sized risk, and a live community holding you to both.",
  },
];

export default function ChallengeFramework() {
  return (
    <div className={styles.section}>
      <div className={styles.frameworkGrid}>
        <div>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowNum}>01</span>
            <span className={styles.eyebrowLabel}>The framework</span>
          </div>
          <h2 className={styles.h2}>
            EIT — the Emotionally Intelligent Trader
          </h2>
          <p className={styles.sectionLead}>
            Charts do not lose money. Traders do. EIT puts your emotional
            discipline on the same footing as your analysis, so a fundamental
            read and a technical entry survive contact with a live market.
          </p>
        </div>
        <div className={styles.letterGrid}>
          {LETTERS.map((l) => (
            <div
              key={l.glyph}
              className={`${styles.letterCard} ${styles.blueprint}`}
            >
              <div className={styles.letterGlyph}>{l.glyph}</div>
              <div className={styles.letterTitle}>{l.title}</div>
              <p className={styles.letterBody}>{l.body}</p>
              <i className={`${styles.corner} ${styles.cornerTl}`} />
              <i className={`${styles.corner} ${styles.cornerTr}`} />
              <i className={`${styles.corner} ${styles.cornerBl}`} />
              <i className={`${styles.corner} ${styles.cornerBr}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
