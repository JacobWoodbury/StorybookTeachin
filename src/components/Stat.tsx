import type { HTMLAttributes } from "react";
import styles from "./Stat.module.css";

export type StatTrend = "up" | "down" | "flat";

export type StatProps = {
  label: string;
  value: number | string;
  hint?: string;
  trend?: StatTrend;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

const trendSymbol: Record<StatTrend, string> = {
  up: "▲",
  down: "▼",
  flat: "■",
};

export function Stat({
  label,
  value,
  hint,
  trend = "flat",
  className,
  ...rest
}: StatProps) {
  const classes = [styles.stat, className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...rest}>
      <div className={styles.labelRow}>
        <span className={styles.label}>{label}</span>
        <span className={`${styles.trend} ${styles[trend]}`} aria-hidden>
          {trendSymbol[trend]}
        </span>
      </div>
      <div className={styles.value}>{value}</div>
      {hint ? <div className={styles.hint}>{hint}</div> : null}
    </div>
  );
}
