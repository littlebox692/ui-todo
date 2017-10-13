import { inject, TestBed } from '@angular/core/testing';

import { TodoApi } from './todo-api.service';

describe('TodoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoApi],
    });
  });

  it('should be created', inject([TodoApi], (service: TodoApi) => {
    expect(service).toBeTruthy();
  }));
});
