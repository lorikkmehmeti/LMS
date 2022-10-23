import React from "react";
import { RText } from "./Text.css";

export type AS =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "title"
  | "section"
  | undefined;

const TextType = (props: {
  as?: AS;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}): JSX.Element => {
  switch (props.as?.toLowerCase()) {
    case "h1":
      return <h1 {...props}>{props.children}</h1>;
    case "h2":
      return <h2 {...props}>{props.children}</h2>;
    case "h3":
      return <h3 {...props}>{props.children}</h3>;
    case "h4":
      return <h4 {...props}>{props.children}</h4>;
    case "h5":
      return <h5 {...props}>{props.children}</h5>;
    case "h6":
      return <h6 {...props}>{props.children}</h6>;
    case "span":
      return <span {...props}>{props.children}</span>;
    case "p":
      return <p {...props}>{props.children}</p>;
    default:
      return <span>{props.children}</span>;
  }
};

function Text(props: {
  as: AS;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <TextType {...props} className={RText({ type: props?.as })} as={props.as}>
      {props.children}
    </TextType>
  );
}

export default Text;
