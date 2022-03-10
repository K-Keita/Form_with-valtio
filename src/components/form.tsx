/* eslint-disable react/display-name */
import { forwardRef } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type Props = UseFormRegisterReturn & {
  type: "text" | "email" | "number";
  label: string;
  error?: string;
  defaultValue?: string;
  placeholder?: string;
};

export const Form = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        ref={ref}
        style={{
          display: "block",
          padding: "0.5rem",
          width: "100%",
          border: "solid 1px",
        }}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.error && (
        <span style={{ color: "red", fontSize: "1rem" }}>{props.error}</span>
      )}
    </div>
  );
});
