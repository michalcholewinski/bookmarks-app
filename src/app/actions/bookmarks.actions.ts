import {createAction, props} from '@ngrx/store';

const CREATE_BOOKMARK = 'CREATE_BOOKMARK';
const DELETE_BOOKMARK = 'DELETE_BOOKMARK';

export const createBookmark = createAction(
  CREATE_BOOKMARK,
  props()
);

export const deleteBookmark = createAction(
  DELETE_BOOKMARK,
  props<{ id: number }>()
);

