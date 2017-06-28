import { AngularCLIProjectPage } from './app.po';

describe('angular-cliproject App', () => {
  let page: AngularCLIProjectPage;

  beforeEach(() => {
    page = new AngularCLIProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
