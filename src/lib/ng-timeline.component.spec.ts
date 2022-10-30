import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTimelineComponent } from './ng-timeline.component';

describe('NgTimelineComponent', () => {
  let component: NgTimelineComponent;
  let fixture: ComponentFixture<NgTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
