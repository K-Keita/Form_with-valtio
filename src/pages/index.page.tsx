import { useRouter } from "next/router";
import type { VFC } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
// import { Layout } from "src/layouts/layout";
import { changeForm } from "src/hooks/changeForm";
import type { Inputs } from "src/interface/types";
import { formState } from "src/libs/state";
import { useSnapshot } from "valtio";

const Home: VFC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    changeForm(data);
    return router.push("/second");
  };
  const state: Inputs = useSnapshot(formState);

  console.log(formState);

  return (
    <div className="p-4 my-20 mx-auto w-80 border">
      <h1 className="text-2xl text-center bg-blue-400">Custom Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="mt-4">・名前（必須）</p>
        <input
          className="block w-full border"
          defaultValue={state.name !== "" ? state.name : ""}
          placeholder="例）山田 太郎"
          {...register("name", { required: "必須項目です"})}
        />
        {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
        <p className="mt-4">・メールアドレス（必須）</p>
        <input
          className="block w-full border"
          defaultValue={state.email !== "" ? state.email : ""}
          placeholder="例）example@example.com"
          {...register("email", { required: "必須項目です" })}
        />
        {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
        <p className="mt-4">・年齢（必須）</p>
        <input
          type="number"
          className="block w-full border"
          defaultValue={state.age !== "" ? state.age : ""}
          placeholder="例）20"
          {...register("age", { required: "必須項目です" })}
        />
        {errors.age && <span className="text-sm text-red-500">{errors.age.message}</span>}
        <input
          className="block px-2 mx-auto mt-4 bg-blue-200"
          type="submit"
          value="次へ"
        />
      </form>
    </div>
  );
};

export default Home;
