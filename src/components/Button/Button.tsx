import React, { forwardRef } from "react";
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
  ref?: React.Ref<HTMLButtonElement>;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <button
      ref={ref}
      {...props}
      className={RButton({
        size: props.size,
        color: props.color,
        space: props.space,
        rounded: props.rounded,
      })}
      aria-disabled={props.disabled}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
);
Button.displayName = "Button";
