import { useRouter } from "next/router";
import type { VFC } from "react";
import { useCallback, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { InputArea } from "src/components/inputArea";
import { Form } from "src/components/form";
// import { Layout } from "src/layouts/layout";
import { changeForm } from "src/hooks/changeForm";
import type { Inputs } from "src/interface/types";
import { formState } from "src/libs/state";
import { useSnapshot } from "valtio";

const Home: VFC = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    (data) => {
      setLoading(true);
      changeForm(data);
      return router.push("/second");
    },
    [router]
  );

  const state: Inputs = useSnapshot(formState);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    [setName]
  );

  return (
    <div className="p-4 my-20 mx-auto w-80 border">
      <h1 className="text-2xl text-center bg-blue-400">Custom Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputArea
          type="text"
          text="・名前"
          placeholder="山田 太郎"
          defaultValue={state.name !== "" ? state.name : ""}
          error={errors.name ? errors.name.message : undefined}
          {...register("name", {
            required: "必須項目です",
            minLength: { value: 2, message: "文字数が足りません" },
          })}
        />
        <InputArea
          type={"email"}
          text="・メールアドレス"
          placeholder="例）example@example.com"
          defaultValue={state.email !== "" ? state.email : ""}
          error={errors.email ? errors.email.message : undefined}
          {...register("email", { required: "必須項目です" })}
        />
        <InputArea
          type={"number"}
          text="・年齢"
          defaultValue={state.age !== "" ? state.age : ""}
          error={errors.age ? errors.age.message : undefined}
          {...register("age", { required: "必須項目です" })}
        />
        <input
          className="block border"
          type="text"
          onChange={handleOnChange}
          value={name}
        />
        {/* <Form /> */}
        {/* <input type="file" accept="image/*" onChange={onFileInputChange} /> */}
        {/* {file ? <img src={file[0].name} className="w-60 h-40" /> : null} */}
        <input
          className="block px-2 mx-auto mt-4 bg-blue-200"
          type="submit"
          disabled={loading}
          value="次へ"
        />
      </form>
    </div>
  );
};

export default Home;
