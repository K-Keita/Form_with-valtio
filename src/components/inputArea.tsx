/* eslint-disable react/display-name */
import { forwardRef } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type Props = UseFormRegisterReturn & {
  type: "text" | "email" | "number";
  text: string;
  placeholder?: string;
  defaultValue?: string | number;
  error?: string;
};

export const InputArea = forwardRef<HTMLInputElement, Props>(
  (props, ref) => {

    return (
      <>
        <p>{props.text}</p>
        <input
          ref={ref}
          className="block w-full border p-1 text-lg"
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
          type={props.type}
          onChange={props.onChange}
          onBlur={props.onBlur}
          name={props.name}
        />
        {props.error && (
          <span className="text-sm text-red-500">{props.error}</span>
        )}
      </>
    );
  }
);
