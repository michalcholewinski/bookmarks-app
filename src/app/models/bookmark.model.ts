import {Type} from './type.model';

export class Bookmark {
  constructor(
    public id: string,
    public name: string,
    public url: string,
    public bookmarkType: Type) {
  }
}


