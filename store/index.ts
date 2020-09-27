import Vuex from 'vuex';
import Main from "~/store/main";

import { Store } from 'vuex'
import { initialiseStores} from "~/util/store-accessor";
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/util/store-accessor';


export function createStore() {
  return new Vuex.Store({
    modules: {
      main:Main,
    }
  });
}
