import React, { forwardRef, useId } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { RadioGroupItemProps } from "@radix-ui/react-radio-group";
import {
  StyledRadioIndicator,
  StyledRadioItem,
  StyledRadioLabel,
} from "./RadioStyles.css";

export const RadioItem = RadioGroupPrimitive.Item;
export const RadioItemIndicator = RadioGroupPrimitive.Indicator;
export const RadioGroup = RadioGroupPrimitive.Root;

export interface RadioInputInterface extends RadioGroupItemProps {
  children?: React.ReactNode;
  label?: string;
}

// export const RadioItem = ({value, id, disabled} : {value: string, id: string, disabled: boolean}) => {
//     return (
//         <RadioItemRoot value={value}
//                        className={StyledRadioItem}
//                        disabled={false}></RadioItemRoot>
//         //     <label className={StyledRadioLabel} htmlFor="r1">
//         //       Do not check
//         //     </label>
//     )
// }

export const Radio = forwardRef<RadioGroupItemProps, RadioInputInterface>(
  (props) => {
    const id = useId();
    const { label, value } = props;
    return (
      <div style={{ display: "flex", marginBottom: 5 * 2 }}>
        <RadioItem
          value={value || ""}
          id={id}
          className={StyledRadioItem}
          disabled={false}
        >
          <RadioItemIndicator className={StyledRadioIndicator} />
        </RadioItem>
        {label ? (
          <label className={StyledRadioLabel} htmlFor={id}>
            {label}
          </label>
        ) : null}
      </div>
    );
  }
);
Radio.displayName = "Radio";
