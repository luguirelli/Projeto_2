import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventivasComponent } from './preventivas.component';

describe('PreventivasComponent', () => {
  let component: PreventivasComponent;
  let fixture: ComponentFixture<PreventivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
