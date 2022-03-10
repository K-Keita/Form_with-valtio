// import type { Inputs } from "src/interface/types";
import { proxy } from "valtio";

type Arr = {
  name: string;
  placeholder: string;
  type: string;
};

export type Inputs = {
  name: string;
  email: string;
  age: number | "";
  content: string;
};

export const arr: Arr[] = [
  { name: "お名前", placeholder: "名前", type: "text" },
  { name: "メールアドレス", placeholder: "example@example.com", type: "text" },
  { name: "年齢", placeholder: "", type: "number" },
  { name: "内容", placeholder: "", type: "text" },
];

export const formState = proxy<Inputs>({
  name: "",
  email: "",
  age: "",
  content: "",
});
