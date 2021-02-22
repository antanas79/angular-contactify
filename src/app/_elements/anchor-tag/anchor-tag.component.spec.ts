import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnchorTagComponent } from './anchor-tag.component';

describe('AnchorTagComponent', () => {
  let component: AnchorTagComponent;
  let fixture: ComponentFixture<AnchorTagComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnchorTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
