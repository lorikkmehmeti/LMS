import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { StyledContent, StyledItem } from "./DropdownMenuStyles";
import {
  DropdownCheckboxItemInterface,
  DropdownMenuContentInterface,
  DropdownMenuItemIndicatorInterface,
  DropDownMenuItemInterface,
  DropdownMenuSubContentType,
  DropdownMenuSubInterface,
  DropdownMenuSubTriggerInterface,
  DropdownRadioGroupType,
  DropdownRadioItemType,
} from "./DropdownInterfaces";
import {
  RightSlotStyles,
  StyledItemIndicator,
  StyledSeparator,
  StyledSubTrigger,
} from "./DropdownStyles.css";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuContent = ({
  children,
  ...props
}: DropdownMenuContentInterface) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content className={StyledContent} {...props}>
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
};

export const DropdownMenuTrigger = DropdownMenuPrimitive.DropdownMenuTrigger;

export const DropdownMenuLabel = DropdownMenuPrimitive.Label;

export const DropdownMenuItem = ({
  children,
  variant,
  ...props
}: DropDownMenuItemInterface) => (
  <DropdownMenuPrimitive.Item
    className={StyledItem[variant || "primary"]}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.Item>
);
export const DropdownMenuItemIndicator = ({
  children,
  ...props
}: DropdownMenuItemIndicatorInterface) => (
  <DropdownMenuPrimitive.ItemIndicator
    className={StyledItemIndicator}
    {...props}
  >
    {children}
  </DropdownMenuPrimitive.ItemIndicator>
);

// export const DropdownMenuGroup = ({
//   children,
//   ...props
// }: DropdownMenuSubInterface) => (
//   <DropdownMenuPrimitive.Group className={""} {...props}>
//     {children}
//   </DropdownMenuPrimitive.Group>
// );

export const DropdownMenuSub = ({
  children,
  ...props
}: DropdownMenuSubInterface) => (
  <DropdownMenuPrimitive.Sub {...props}>{children}</DropdownMenuPrimitive.Sub>
);

export const DropdownMenuSubTrigger = ({
  children,
  ...props
}: DropdownMenuSubTriggerInterface) => (
  <DropdownMenuPrimitive.SubTrigger className={StyledSubTrigger} {...props}>
    {children}
  </DropdownMenuPrimitive.SubTrigger>
);
export const DropdownMenuSubContent = ({
  ...props
}: DropdownMenuSubContentType) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.SubContent {...props} className={StyledContent} />
  </DropdownMenuPrimitive.Portal>
);

export const DropdownMenuCheckboxItem = ({
  variant,
  ...props
}: DropdownCheckboxItemInterface) => (
  <DropdownMenuPrimitive.CheckboxItem
    className={StyledItem[variant || "primary"]}
    {...props}
  />
);

export const DropdownMenuRadioGroup = ({
  ...props
}: DropdownRadioGroupType) => <DropdownMenuPrimitive.RadioGroup {...props} />;
export const DropdownMenuRadioItem = ({ ...props }: DropdownRadioItemType) => (
  <DropdownMenuPrimitive.RadioItem {...props} />
);

export const DropdownMenuSeparator = () => (
  <DropdownMenuPrimitive.Separator className={StyledSeparator} />
);

export const RightSlot = ({ children }: { children: React.ReactNode }) => {
  return <div className={RightSlotStyles}>{children}</div>;
};

// function DropdownMenuDemo(props: any) {
//   return <div></div>;
// }

// export default DropdownMenu;
