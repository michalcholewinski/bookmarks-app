import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookmarksComponent} from './bookmarks.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {BookmarkComponent} from './bookmark/bookmark.component';
import {MatListModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MatListModule,
  ],
  declarations: [BookmarksComponent, BookmarkComponent]
})
export class BookmarksModule {
}
