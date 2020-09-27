import Vuex from 'vuex';
import Main from "~/store/main";

import { Store } from 'vuex'
import { initialiseStores} from "~/util";
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/util';


export function createStore() {
  return new Vuex.Store({
    modules: {
      main:Main,
    }
  });
}
