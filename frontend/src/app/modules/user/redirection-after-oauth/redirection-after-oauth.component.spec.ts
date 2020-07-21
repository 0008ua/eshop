import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectionAfterOauthComponent } from './redirection-after-oauth.component';

describe('RedirAfterOauthComponent', () => {
  let component: RedirectionAfterOauthComponent;
  let fixture: ComponentFixture<RedirectionAfterOauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectionAfterOauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectionAfterOauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
