import Vuex from 'vuex';
import Main from "~/store/modules";

export function createStore() {
  return new Vuex.Store({
    modules: {
      main:Main,
    }
  });
}
