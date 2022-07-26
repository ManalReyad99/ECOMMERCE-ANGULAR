import { TestBed } from '@angular/core/testing';

import { APICategoriesService } from './apicategories.service';

describe('APICategoriesService', () => {
  let service: APICategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APICategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
