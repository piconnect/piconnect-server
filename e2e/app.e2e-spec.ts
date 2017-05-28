import { PiconnectServerPage } from './app.po';

describe('piconnect-server App', () => {
  let page: PiconnectServerPage;

  beforeEach(() => {
    page = new PiconnectServerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pi works!');
  });
});
