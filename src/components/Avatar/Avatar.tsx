import * as AvatarPrimitive from "@radix-ui/react-avatar";
import React, { forwardRef } from "react";
import { StyledImage, StyledFallback, StyledRoot, Size } from "./Avatar.css";
import { getInitials } from "../../utils/util";
import { assignInlineVars } from "@vanilla-extract/dynamic";

export const AvatarWrapper = AvatarPrimitive.Root;
export const AvatarImage = AvatarPrimitive.Image;
export const AvatarFallback = AvatarPrimitive.Fallback;

interface AvatarProps {
  name: string;
  image?: string;
  size: number;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { name, size, image } = props;
  return (
    <AvatarWrapper
      ref={ref}
      className={StyledRoot}
      style={assignInlineVars({ [Size]: "" + size })}
    >
      <AvatarImage className={StyledImage} src={image} alt={name} />
      <AvatarFallback className={StyledFallback} delayMs={600}>
        {getInitials(name)}
      </AvatarFallback>
    </AvatarWrapper>
  );
});

Avatar.displayName = "Avatar";

export default Avatar;
