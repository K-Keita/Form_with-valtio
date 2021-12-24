import type {Inputs} from 'src/interface/types'
import { proxy } from "valtio";

export const formState = proxy<Inputs>({
  name: "",
  email: "",
  age: "",
  content: "",
});
