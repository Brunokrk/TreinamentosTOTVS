import { TestBed } from '@angular/core/testing';

import { TableaTesteService } from './tabela-teste.service';

describe('TableaTesteService', () => {
  let service: TableaTesteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableaTesteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
