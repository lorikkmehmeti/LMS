import React from "react";
import { RButton } from "./ButtonRecipe.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "large" | "medium" | "small";
  color?: "primary" | "secondary" | "ghost";
  rounded?: boolean;
  disabled?: boolean;
  space?: "inline" | "block" | "top" | "bottom" | "right" | "left" | "none";
  props?: React.ComponentPropsWithoutRef<"button">;
}

export default function Button(props: ButtonProps) {
  const { children, size, color, space, rounded, disabled } = props;

  return (
    <button
      {...props}
      className={RButton({ size, color, space, rounded })}
      aria-disabled={disabled}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
