/* eslint-disable react/display-name */
import { forwardRef } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

type Props = UseFormRegisterReturn & {
  rows: number;
  text: string;
  placeholder?: string;
  defaultValue?: string | number;
  error?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  return (
    <div>
      <p className="mt-4">{props.text}</p>
      <textarea
        ref={ref}
        className="block w-full border"
        defaultValue={props.defaultValue ? props.defaultValue : ""}
        placeholder={props.placeholder}
        rows={props.rows ? props.rows : 3}
        // react-hook-form
        onChange={props.onChange}
        onBlur={props.onBlur}
        name={props.name}
      />
      {props.error && (
        <span className="text-sm text-red-500">{props.error}</span>
      )}
    </div>
  );
});
