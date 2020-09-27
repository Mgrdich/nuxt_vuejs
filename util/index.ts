import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Main from "~/store/main";

let MainStore: any;

function initialiseStores(store: Store<any>): void {
  MainStore = getModule(Main, store);
}

export { initialiseStores, MainStore };
