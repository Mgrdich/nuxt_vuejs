import {Route} from 'vue-router';

export interface VueRoute  {
  $route: Route
}

export interface IPost {
  id:string;
  bgUrl:string;
  previewText?:string;
  title:string;
  author:string;
}

export interface IAuth {
  email:string;
  password:string;
}
