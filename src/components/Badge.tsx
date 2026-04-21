import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Badge.module.css";

//in storybook we use these as the different states of the badge
export type BadgeTone = "neutral" | "success" | "warning" | "danger"; 

//define the props for the badge component
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
  //combine the base styles with the tone styles and the className
  const classes = [styles.badge, styles[tone], className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
