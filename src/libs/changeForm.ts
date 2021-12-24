import type { Inputs } from "src/interface/types";
import { formState } from "src/libs/state";

export const changeForm = (data: Inputs) => {
  formState.name = data.name;
  formState.email = data.email;
  formState.age = data.age;
  formState.content = data.content;
};
