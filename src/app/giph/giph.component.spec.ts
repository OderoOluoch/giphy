import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphComponent } from './giph.component';

describe('GiphComponent', () => {
  let component: GiphComponent;
  let fixture: ComponentFixture<GiphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
