import { proxy } from "valtio";
import type {Inputs} from 'src/interface/types'

export const formState = proxy<Inputs>({
  name: "",
  email: "",
  age: "",
  content: "",
});
