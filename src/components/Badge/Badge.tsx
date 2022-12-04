import React from "react";
import {
  BadgeIcon,
  BadgeImage,
  BadgeImageWrapper,
  BadgeRecipe,
  BadgeText,
} from "./BadgeRecipe.css";

export const Badge = ({
  title,
  logo,
  image,
  size,
}: {
  title: string;
  logo?: React.ReactNode;
  image?: string;
  size?: "medium" | "small";
}) => {
  return (
    <div className={BadgeRecipe({ size })}>
      {logo ? <span className={BadgeIcon}>{logo}</span> : null}
      {image ? (
        <span className={BadgeImageWrapper()}>
          <img className={BadgeImage} src={image} alt="" />
        </span>
      ) : null}
      <span className={BadgeText}>{title.trim()}</span>
    </div>
  );
};
