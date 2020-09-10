import Vuex from 'vuex';
import Main from "~/store/modules/main";

import { Store } from 'vuex'
import { initialiseStores} from "~/store/util";
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/store/util';


export function createStore() {
  return new Vuex.Store({
    modules: {
      main:Main,
    }
  });
}
