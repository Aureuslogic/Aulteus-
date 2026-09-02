import styles from "./challenge.module.css";

function buildCandles() {
  let seed = 20230923;
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };
  const out: { up: boolean; body: number; mid: number; wick: number }[] = [];
  let mid = 44;
  for (let i = 0; i < 58; i++) {
    const up = rnd() > 0.43;
    const body = 5 + rnd() * 17;
    mid = Math.max(18, Math.min(70, mid + (up ? 1 : -1) * (2 + rnd() * 6)));
    const wick = body + 8 + rnd() * 14;
    out.push({ up, body, mid, wick });
  }
  return out;
}

const CANDLES = buildCandles();

export default function CandlestickBackdrop() {
  return (
    <div className={styles.heroCandles} aria-hidden="true">
      <div
        style={{
          display: "flex",
          gap: 6,
          width: "100%",
          height: "100%",
          padding: "0 24px",
          boxSizing: "border-box",
        }}
      >
        {CANDLES.map((c, i) => {
          const col = c.up ? "rgba(200,161,90,0.9)" : "rgba(242,242,243,0.45)";
          return (
            <div
              key={i}
              style={{ flex: "1 1 0", position: "relative", height: "100%" }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: c.mid + "%",
                  width: 1,
                  height: c.wick + "%",
                  background: col,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: c.mid + 4 + "%",
                  width: "56%",
                  height: c.body + "%",
                  background: c.up ? "rgba(200,161,90,0.55)" : "transparent",
                  border: "1px solid " + col,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
