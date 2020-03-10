import { TestBed } from '@angular/core/testing';

import { RecupeNewsService } from './recupe-news.service';

describe('RecupeNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecupeNewsService = TestBed.get(RecupeNewsService);
    expect(service).toBeTruthy();
  });
});
