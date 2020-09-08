import {
  Module,
  VuexModule,
  VuexMutation,
  VuexAction,
} from 'nuxt-property-decorator'
import {IPost} from "~/interfaces";


@Module({
  name: 'main',
  namespaced: true,
  stateFactory: true,
})
export default class Main extends VuexModule {
  loadedPosts:Array<IPost> = [];

  @VuexMutation
  setPosts(val:Array<IPost>) {
    this.loadedPosts = val
  }

  @VuexAction({ rawError: true })
  setTextSecond() {

  }

}
