import React, { forwardRef, useId } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { StyledCheckbox } from "./Checkbox.css";
import { StyledRadioLabel } from "../Radio/RadioStyles.css";

import { Checkmark } from "../../utils/Icons";

import { CheckboxProps } from "@radix-ui/react-checkbox";

export const CheckboxItem = CheckboxPrimitive.Root;
export const CheckboxIndicator = CheckboxPrimitive.Indicator;

export interface CheckboxInputInterface extends CheckboxProps {
  children?: React.ReactNode;
  label?: string;
}

/* type any is used because Radix UI converts radio input to button */
export const Checkbox = forwardRef<CheckboxProps | any, CheckboxInputInterface>(
  (props, ref) => {
    const { label, value } = props;
    const _id = useId();
    return (
      <React.Fragment>
        <div key={_id} style={{ display: "flex", marginBottom: 5 * 2 }}>
          <CheckboxItem
            value={value}
            ref={ref}
            id={_id}
            className={StyledCheckbox}
          >
            <CheckboxIndicator>
              <Checkmark width="20px" height="20px" />
            </CheckboxIndicator>
          </CheckboxItem>
          {label ? (
            <label className={StyledRadioLabel} htmlFor={_id}>
              {label}
            </label>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
);
Checkbox.displayName = "Checkbox";
