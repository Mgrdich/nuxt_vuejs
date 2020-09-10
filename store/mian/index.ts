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
  myloadedPosts:Array<IPost> = [];

  get loadedPosts():Array<IPost>{
    return this.myloadedPosts;
  }

  @VuexMutation
  setPosts(val:Array<IPost>):void {
    this.myloadedPosts = val
  }

  @VuexAction({ rawError: true,commit:'setPosts'})
  setActionPosts():void{

  }

}
