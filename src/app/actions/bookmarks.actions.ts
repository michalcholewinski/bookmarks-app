import {createAction, props} from '@ngrx/store';
import {Bookmark} from '../models/bookmark.model';

const CREATE_BOOKMARK = 'CREATE_BOOKMARK';
const DELETE_BOOKMARK = 'DELETE_BOOKMARK';

export const createBookmark = createAction(
  CREATE_BOOKMARK,
  props<Bookmark>()
);

export const deleteBookmark = createAction(
  DELETE_BOOKMARK,
  props<{ id: number }>()
);

