import { useRouter } from "next/router";
import type { VFC } from "react";
import { resetForm } from "src/hooks/resetForm";
import type { Inputs } from "src/interface/types";
import { formState } from "src/libs/state";
import { useSnapshot } from "valtio";

const Confirm: VFC = () => {
  const router = useRouter();

  const state: Inputs = useSnapshot(formState);

  const submitForm = () => {
    resetForm();
    return router.push("/complete");
  };

  return (
    <main className="p-4 my-20 mx-auto w-80 border">
      <h2 className="text-2xl font-bold text-center">確認事項</h2>
      <p className="mt-4">
        ・名前{" "}
        <span className="block w-full bg-blue-100 border">{state.name}</span>
      </p>
      <p className="mt-4">
        ・メールアドレス{" "}
        <span className="block w-full bg-blue-100 border">{state.email}</span>
      </p>
      <p className="mt-4">
        ・年齢{" "}
        <span className="block w-full bg-blue-100 border">{state.age}</span>
      </p>
      <p className="mt-4">
        ・お問合せ内容{" "}
        <span className="block w-full bg-blue-100 border">{state.content}</span>
      </p>
      <div className="flex justify-around mt-6">
        <button
          className="px-2 bg-gray-200"
          onClick={() => {
            return router.push("/second");
          }}
        >
          戻る
        </button>
        <button
          onClick={() => {
            return submitForm();
          }}
          className="px-2 bg-blue-200"
        >
          送信
        </button>
      </div>
    </main>
  );
};

export default Confirm;
