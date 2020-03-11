import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LireNewsComponent } from './lire-news.component';

describe('LireNewsComponent', () => {
  let component: LireNewsComponent;
  let fixture: ComponentFixture<LireNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LireNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LireNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
