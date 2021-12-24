import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { VFC } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { Inputs } from "src/interface/types";
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
    <main className="p-4 my-20 mx-auto w-80 border">
      <h1 className="text-2xl text-center bg-blue-400">フォーム</h1>

      <div>
        <p className="mt-4">
          ・名前{" "}
          <span className="block bg-blue-100 border w-full">{state.name}</span>
        </p>
        <p className="mt-4">
          ・メールアドレス{" "}
          <span className="block bg-blue-100 border w-full">{state.email}</span>
        </p>
        <p className="mt-4">
          ・年齢{" "}
          <span className="block bg-blue-100 border w-full">{state.age}</span>
        </p>
        <p className="mt-4">
          ・お問合せ内容{" "}
          <span className="block bg-blue-100 border w-full">
            {state.content}
          </span>
        </p>
      </div>
      <div className="flex justify-around mt-6">
        <button
          className="px-2 bg-gray-200"
          onClick={() => router.push("/second")}
        >
          戻る
        </button>
        <button
          onClick={() => alert("送信しました。")}
          className="px-2 bg-blue-200"
        >
          送信
        </button>
      </div>
    </main>
  );
};

export default Home;
