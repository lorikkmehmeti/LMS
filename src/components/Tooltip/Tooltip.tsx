import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { StyledTooltipArrow, StyledTooltipContent } from "./Tooltip.css";
import {
  TooltipProps,
  TooltipProviderProps,
  TooltipTriggerProps,
} from "@radix-ui/react-tooltip";

export const TooltipProvider = TooltipPrimitive.Provider;
export const TooltipRoot = TooltipPrimitive.Root;

export const TooltipTrigger = (props: TooltipTriggerProps) => {
  return (
    <TooltipPrimitive.TooltipTrigger asChild {...props}>
      <span>{props.children}</span>
    </TooltipPrimitive.TooltipTrigger>
  );
};
export const TooltipContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content className={StyledTooltipContent} sideOffset={3}>
        {children}
        {/*<TooltipPrimitive.Arrow className={StyledTooltipArrow} />*/}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
};

export interface TooltipInterface extends TooltipProps, TooltipProviderProps {
  children: React.ReactNode;
}

export const Tooltip = (props: TooltipInterface) => {
  return (
    <TooltipProvider {...props} delayDuration={300}>
      <TooltipRoot {...props}>{props.children}</TooltipRoot>
    </TooltipProvider>
  );
};
