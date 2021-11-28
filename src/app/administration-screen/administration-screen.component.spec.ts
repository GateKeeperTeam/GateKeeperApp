import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationScreenComponent } from './administration-screen.component';

describe('AdministrationScreenComponent', () => {
  let component: AdministrationScreenComponent;
  let fixture: ComponentFixture<AdministrationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
