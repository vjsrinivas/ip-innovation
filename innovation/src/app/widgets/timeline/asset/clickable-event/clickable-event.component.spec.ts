import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableEventComponent } from './clickable-event.component';

describe('ClickableEventComponent', () => {
  let component: ClickableEventComponent;
  let fixture: ComponentFixture<ClickableEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickableEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
