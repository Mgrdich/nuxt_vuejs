import Vuex from 'vuex';
import Main from "~/store/mian";

export const store = new Vuex.Store({
  modules: {
    main:Main
  }
});
