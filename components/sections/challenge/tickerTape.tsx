import styles from "./challenge.module.css";

const ROWS: [string, string, number][] = [
  ["EUR/USD", "1.0912", 0.21],
  ["GBP/USD", "1.2734", -0.14],
  ["USD/JPY", "148.06", 0.38],
  ["XAU/USD", "2,391.40", 0.62],
  ["UK100", "7,136.91", -0.27],
  ["US500", "5,318.20", 0.44],
  ["BRENT", "82.15", -0.53],
  ["GER40", "18,492", 0.19],
  ["AUD/USD", "0.6641", -0.08],
  ["USD/CAD", "1.3588", 0.11],
];

function Row({ keyPrefix }: { keyPrefix: string }) {
  return (
    <>
      {ROWS.map(([sym, val, chg], i) => (
        <div key={keyPrefix + i} className={styles.tapeItem}>
          <span className={styles.tapeSym}>{sym}</span>
          <span className={styles.tapeVal}>{val}</span>
          <span className={chg >= 0 ? styles.tapeUp : styles.tapeDown}>
            {chg >= 0 ? "+" : ""}
            {chg.toFixed(2)}%
          </span>
        </div>
      ))}
    </>
  );
}

export default function TickerTape() {
  return (
    <div className={styles.tapeOuter} aria-hidden="true">
      <div className={styles.tapeTrack}>
        <Row keyPrefix="a" />
        <Row keyPrefix="b" />
      </div>
    </div>
  );
}
