import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export type ButtonProps = {
  /** Visual style */
  variant?: ButtonVariant;
  /** Disable interaction and dim the control */
  disabled?: boolean;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function Button({
  variant = "primary",
  disabled = false,
  children,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = [styles.btn, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
