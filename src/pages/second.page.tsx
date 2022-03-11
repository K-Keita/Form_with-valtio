import { useRouter } from "next/router";
import type { VFC } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Textarea } from "src/components/textarea";
import { changeForm } from "src/hooks/changeForm";
import type { Inputs } from "src/interface/types";
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
    <main className="p-4 my-20 mx-auto w-80 border">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textarea
          text="・お問合せ内容"
          rows={4}
          defaultValue={state.content !== "" ? state.content : ""}
          error={errors.content ? errors.content.message : undefined}
          {...register("content", {
            required: "必須項目です",
            minLength: { value: 10, message: "文字数が足りません" },
            maxLength: { value: 120, message: "文字数がオーバーしています" },
          })}
        />
        <div className="flex justify-around mt-4">
          <button
            className="px-2 bg-gray-200"
            onClick={() => {
              return router.push("/");
            }}
          >
            戻る
          </button>
          <input
            className="px-2 bg-blue-200"
            type="submit"
            value="確認画面へ"
          />
        </div>
      </form>
    </main>
  );
};

export default Second;
