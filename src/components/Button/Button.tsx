import React, { forwardRef, useContext } from "react";
import { RButton } from "./ButtonRecipe.css";
import { ColorModeContext } from "../../providers/theme-provider";

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
  starticon?: React.ReactNode;
  endicon?: React.ReactNode;
  attributes?: { [key: string]: string };
}

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "large" | "medium" | "small";
  color?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
  space?: "inline" | "block" | "top" | "bottom" | "right" | "left" | "none";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { colorMode, setColorMode } = useContext(ColorModeContext);
    return (
      <button
        ref={ref}
        {...props}
        {...props.attributes}
        onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        className={[
          RButton({
            size: props.size,
            color: props.color,
            space: props.space,
            rounded: props.rounded,
          }),
          props.className,
        ]
          .join(" ")
          .trim()}
        aria-disabled={props.disabled}
        disabled={props.disabled}
      >
        {props.starticon ? (
          <span
            style={{
              marginRight: 5,
              verticalAlign: "middle",
              lineHeight: "16px",
              fontSize: "16px",
              display: "inline-flex",
            }}
          >
            {props.starticon}
          </span>
        ) : null}
        <span> {props.children}</span>
        {props.endicon ? (
          <span
            style={{ marginLeft: 5, verticalAlign: "middle", lineHeight: 0 }}
          >
            {props.endicon}
          </span>
        ) : null}
      </button>
    );
  }
);
Button.displayName = "Button";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    return <></>;
  }
);

IconButton.displayName = "IconButton";
