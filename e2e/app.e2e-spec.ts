import { BookmarksAppPage } from './app.po';

describe('bookmarks-app App', function() {
  let page: BookmarksAppPage;

  beforeEach(() => {
    page = new BookmarksAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
