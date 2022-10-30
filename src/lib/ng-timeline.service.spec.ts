import { TestBed } from '@angular/core/testing';

import { NgTimelineService } from './ng-timeline.service';

describe('NgTimelineService', () => {
  let service: NgTimelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTimelineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
