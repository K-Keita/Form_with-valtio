import { formState } from "src/libs/state";

export const resetForm = () => {
  formState.name = "";
  formState.age = "";
  formState.email = "";
  formState.content = "";
};
