import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bookmark} from '../../models/bookmark.model';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  _bookmark: Bookmark;

  constructor() {
  }

  ngOnInit() {
  }

  @Output() delete: EventEmitter<String> = new EventEmitter();

  @Input()
  set bookmark(bookmark: Bookmark) {
    console.log(bookmark);
    this._bookmark = bookmark;
  }

  deleteBookmark() {
    this.delete.emit(this._bookmark.id);
  }

}
