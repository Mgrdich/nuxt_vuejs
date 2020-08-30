import {IPost} from "~/interfaces";

export function isInteger(number: number | string): boolean {
  if (typeof number === 'string') {
    const int: number = parseInt(number);
    return Number.isInteger(int);
  }
  return Number.isInteger(number);
}

export const POSTS_TEST: Array<IPost> = [
  {
    id: '1',
    bgUrl: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
    title: 'Test1',
    previewText: '',
    author: 'Boghos'
  },
  {
    id: '2',
    bgUrl: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
    title: 'Test2',
    previewText: '',
    author: 'Bedros'
  }
];
