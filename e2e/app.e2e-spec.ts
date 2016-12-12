import { OcrjsPage } from './app.po';

describe('ocrjs App', function() {
  let page: OcrjsPage;

  beforeEach(() => {
    page = new OcrjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
