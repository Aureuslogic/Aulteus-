import Image from "next/image";
import styles from "./challenge.module.css";

export default function ChallengeChartFigure() {
  return (
    <div className={styles.section}>
      <figure className={`${styles.figure} ${styles.blueprint}`}>
        <div className={styles.duotone}>
          <Image
            src="/assets/challenge-uk100-chart.png"
            alt="UK100 daily chart with trend structure marked up"
            width={1066}
            height={558}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <i className={`${styles.corner} ${styles.cornerTl}`} />
        <i className={`${styles.corner} ${styles.cornerTr}`} />
        <i className={`${styles.corner} ${styles.cornerBl}`} />
        <i className={`${styles.corner} ${styles.cornerBr}`} />
        <figcaption className={styles.figcaption}>
          <span>
            UK100 daily — the kind of structure you will read for yourself by
            week four.
          </span>
          <span>Fig. 01</span>
        </figcaption>
      </figure>
    </div>
  );
}
