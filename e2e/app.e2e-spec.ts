import { WikipediaSearchObservablesPage } from './app.po';

describe('wikipedia-search-observables App', () => {
  let page: WikipediaSearchObservablesPage;

  beforeEach(() => {
    page = new WikipediaSearchObservablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
