import {Bookmark} from '../models/bookmark.model';
import {createReducer, on} from '@ngrx/store';
import {createBookmark, deleteBookmark} from '../actions/bookmarks.actions';
import * as uuid from 'uuid';

const addBookmark = (state, params: Bookmark) => {
  params.id = uuid.v4();
  return [...state, params];
}

const removeBookmark = (state: Bookmark[], params) => {
  return state.filter(bookmark => bookmark.id !== params.id);
}

export const bookmarksReducer = (state, action) => {
  return createReducer([],
    on(createBookmark, addBookmark),
    on(deleteBookmark, removeBookmark)
  )(state, action);
}

