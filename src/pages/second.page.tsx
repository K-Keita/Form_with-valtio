import { useRouter } from "next/router";
import type { VFC } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { Inputs } from "src/interface/types";
import { Layout } from "src/layouts/layout";
import { changeForm } from "src/libs/changeForm";
import { formState } from "src/libs/state";
import { useSnapshot } from "valtio";

const Second: VFC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    changeForm(data);
    return router.push("/confirm");
  };

  const state: Inputs = useSnapshot(formState);

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="mt-4">・問い合わせ内容</p>
        <textarea
          rows={4}
          className="block w-full border"
          defaultValue={state.content !== "" ? state.content : ""}
          {...register("content", { required: true })}
        />
        {errors.content && <span>This field is required</span>}
        <div className="flex justify-around mt-4">
          <button className="px-2 bg-gray-200" onClick={() => router.push("/")}>
            戻る
          </button>
          <input
            className="px-2 bg-blue-200"
            type="submit"
            value="確認画面へ"
          />
        </div>
      </form>
    </Layout>
  );
};

export default Second;
