/* eslint-disable react/display-name */

import type { VFC } from "react";
import { forwardRef } from "react";
import type { SubmitHandler, UseFormRegisterReturn } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { Inputs } from "src/interface/types";

type Props = UseFormRegisterReturn & {
  type: "text" | "email" | "number";
  text: string;
  error?: string;
  placeholder?: string;
  defaultValue?: string | number;
};

const Form = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <>
      <p>{props.text}</p>
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
        <span className="text-sm text-red-500">{props.error}</span>
      )}
    </>
  );
});

const Home: VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div className="p-4 my-20 mx-auto w-96">
      <h1 className="text-3xl font-bold text-center">React-Hook-Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-4" />
        <Form
          type="text"
          text="名前"
          placeholder="山田 太郎"
          error={errors.name ? errors.name.message : undefined}
          {...register("name", { required: "必須項目です" })}
        />
        <div className="my-4" />
        <Form
          type={"email"}
          text="メールアドレス"
          placeholder="example@example.com"
          error={errors.email ? errors.email.message : undefined}
          {...register("email", { required: "必須項目です" })}
        />
        <input
          className="block px-3 my-4 mx-auto text-lg text-white bg-blue-500 hover:bg-blue-700 rounded-sm"
          type="submit"
          value="ログ出力"
        />
      </form>
    </div>
  );
};

export default Home;
