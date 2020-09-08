import { MutationTypes } from './mutation-types'
import { State} from "~/store";

export type Mutations<S = State> = {
  [MutationTypes.SET_COUNTER](state: S, payload: number): void
}
