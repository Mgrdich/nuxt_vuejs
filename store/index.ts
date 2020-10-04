import Vuex from 'vuex';
import {ActionTree} from 'vuex'
import Main from "~/store/main";

import { Store } from 'vuex'
import { initialiseStores} from "~/util/store-accessor";
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/util/store-accessor';


export type RootState = any;

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit(vuexContext,context){
    // console.log(vuexContext);
  }
}

export function createStore() {
  return new Vuex.Store({
    modules: {
      main:Main,
    }
  });
}
