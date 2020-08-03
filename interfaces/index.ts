import {Route} from 'vue-router';

export interface VueRoute  {
  $route: Route
}

export interface Post {
  id:string;
  bgUrl:string;
  previewText?:string;
  title:string;
}
