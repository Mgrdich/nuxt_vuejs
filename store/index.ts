import Vuex from 'vuex';
import {ActionTree} from 'vuex'
import Main from "~/store/main";

import {Store} from 'vuex'
import {initialiseStores, MainStore} from "~/util/store-accessor";
import {POSTS_TEST} from "~/functions/util";

const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/util/store-accessor';


export type RootState = any;

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit(vuexContext, context) {
    return new Promise((resolve, rejected) => {
      setTimeout(() => { //simulating a server
        resolve({
          posts: POSTS_TEST
        })
      });
    }).then(function (res: any) {
      return MainStore.setActionPosts(res.posts);
    }).catch(function (err: Error) {
      console.error(err);
    })

  }
}

export function createStore() {
  return new Vuex.Store({
    modules: {
      main: Main,
    }
  });
}
