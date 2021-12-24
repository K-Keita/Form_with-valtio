import type { Inputs } from "src/interface/types";
import { formState } from "src/libs/state";

export const changeForm = (data: Inputs) => {
  if (data.name) {
    formState.name = data.name;
  }
  if (data.age) {
    formState.age = data.age;
  }
  if (data.email) {
    formState.email = data.email;
  }
  if (data.content) {
    formState.content = data.content;
  }
};
