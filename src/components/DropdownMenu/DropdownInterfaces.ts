import React from "react";
import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuContentProps,
  DropdownMenuItemIndicatorProps,
  DropdownMenuItemProps,
  DropdownMenuRadioGroupProps,
  DropdownMenuRadioItemProps,
  DropdownMenuSubContentProps,
  DropdownMenuSubProps,
  DropdownMenuSubTriggerProps,
  DropdownMenuTriggerProps,
} from "@radix-ui/react-dropdown-menu";

export interface DropdownMenuContentInterface extends DropdownMenuContentProps {
  children: React.ReactNode;
}
export interface DropdownMenuTriggerInterface extends DropdownMenuTriggerProps {
  children: React.ReactNode;
}

export interface DropDownMenuItemInterface extends DropdownMenuItemProps {
  variant?: "primary" | "label";
  children: React.ReactNode;
}

export interface DropdownMenuSubInterface extends DropdownMenuSubProps {
  children: React.ReactNode;
}

export interface DropdownMenuSubTriggerInterface
  extends DropdownMenuSubTriggerProps {
  children: React.ReactNode;
}

export type DropdownMenuSubContentType = DropdownMenuSubContentProps;
export interface DropdownCheckboxItemInterface
  extends DropdownMenuCheckboxItemProps {
  variant?: "primary" | "label";
}
export type DropdownRadioItemType = DropdownMenuRadioItemProps;
export type DropdownRadioGroupType = DropdownMenuRadioGroupProps;
export interface DropdownMenuItemIndicatorInterface
  extends DropdownMenuItemIndicatorProps {
  children: React.ReactNode;
}
