import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { VFC } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { Inputs } from "src/interface/types";
import { Layout } from "src/layouts/layout";
import { changeForm } from "src/libs/changeForm";
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

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="mt-4">・名前</p>
        <input
          className="block w-full border"
          defaultValue={state.name !== "" ? state.name : ""}
          placeholder="例）山田 太郎"
          {...register("name", { required: true })}
        />
        {errors.name && <span>This field is required</span>}
        <p className="mt-4">・メールアドレス</p>
        <input
          className="block w-full border"
          defaultValue={state.email !== "" ? state.email : ""}
          placeholder="例）example@example.com"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <p className="mt-4">・年齢</p>
        <input
          type="number"
          className="block w-full border"
          defaultValue={state.age !== "" ? state.age : ""}
          placeholder="例）20"
          {...register("age", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <input
          className="block px-2 mx-auto bg-blue-200 mt-4"
          type="submit"
          value="次へ"
        />
      </form>
    </Layout>
  );
};

export default Home;
