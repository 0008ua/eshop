import * as AppActions from './app.actions';

describe('App', () => {
  it('should create an instance', () => {
    expect(new AppActions.LoadApps()).toBeTruthy();
  });
});
