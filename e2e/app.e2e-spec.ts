import { PiconnectServerPage } from './app.po';

describe('piconnect-server App', () => {
  let page: PiconnectServerPage;

  beforeEach(() => {
    page = new PiconnectServerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
