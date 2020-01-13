import {Type} from '../models/type.model';
import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {createBookmark, deleteBookmark} from '../actions/bookmarks.actions';
import {Observable} from 'rxjs';
import {Bookmark} from '../models/bookmark.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  bookmarks$: Observable<Bookmark[]>;
  form: FormGroup;
  types = [Type.Work, Type.Leisure, Type.Personal];

  constructor(private formBuilder: FormBuilder, private store: Store<{ bookmarks: Bookmark[] }>) {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [
        Validators.minLength(2),
        Validators.maxLength(32),
        Validators.required]
      ],
      url: ['', [
        Validators.minLength(10),
        Validators.maxLength(100),
        Validators.required]
      ],
      type: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.bookmarks$ = this.store.pipe(select('bookmarks'));
  }

  onSubmit() {
    const value = this.form.value;
    this.create(new Bookmark(
      value.id,
      value.name,
      value.url,
      value.type
    ));
  }

  create(bookmark: Bookmark) {
    this.store.dispatch(createBookmark(bookmark));
  }

  delete(id) {
    this.store.dispatch(deleteBookmark({id}));
  }
}
