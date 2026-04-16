import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.css";

export type CardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, "title" | "children">;

export function Card({
  title,
  subtitle,
  children,
  footer,
  className,
  ...rest
}: CardProps) {
  const classes = [styles.card, className].filter(Boolean).join(" ");

  return (
    <article className={classes} {...rest}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      </header>
      <div className={styles.body}>{children}</div>
      {footer ? <footer className={styles.footer}>{footer}</footer> : null}
    </article>
  );
}
