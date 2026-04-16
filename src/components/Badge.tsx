import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Badge.module.css";

export type BadgeTone = "neutral" | "success" | "warning" | "danger";

export type BadgeProps = {
  tone?: BadgeTone;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children">;

export function Badge({
  tone = "neutral",
  children,
  className,
  ...rest
}: BadgeProps) {
  const classes = [styles.badge, styles[tone], className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
