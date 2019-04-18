import { ProjectFrontPage } from './app.po';

describe('project-front App', () => {
  let page: ProjectFrontPage;

  beforeEach(() => {
    page = new ProjectFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
