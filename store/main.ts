import {
  Module,
  VuexModule,
  VuexMutation,
  VuexAction,
} from 'nuxt-property-decorator'
import {IPost} from "~/interfaces";
import {Context} from "@nuxt/types";
import {POSTS_TEST} from "~/functions/util";
import {MainStore} from "~/util/store-accessor";


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

  @VuexAction({rawError:true})
  nuxtServerInit(vuexContext:Context,context:Context){
    return new Promise((resolve, rejected) => {
      setTimeout(() => { //simulating a server
        resolve({
          posts: POSTS_TEST
        })
      });
    }).then(function (res: any) {
      return MainStore.setActionPosts(res.posts);
    }).catch(function (err:Error) {
      console.error(err);
    })

  }

}
