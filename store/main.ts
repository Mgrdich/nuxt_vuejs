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
  myLoadedPosts:Array<IPost> = [];

  get loadedPosts():Array<IPost>{
    return this.myLoadedPosts;
  }

  @VuexMutation
  setPosts(val:Array<IPost>):void {
    this.myLoadedPosts = val
  }

  @VuexAction({rawError:true,root:false,commit:'setPosts'})
  setActionPosts(arr:Array<IPost>):Array<IPost>{
    return arr;
  }

}
