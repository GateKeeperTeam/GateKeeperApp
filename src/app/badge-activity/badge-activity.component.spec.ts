import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeActivityComponent } from './badge-activity.component';

describe('BadgeActivityComponent', () => {
  let component: BadgeActivityComponent;
  let fixture: ComponentFixture<BadgeActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
