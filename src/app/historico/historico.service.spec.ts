import { TestBed, inject } from '@angular/core/testing';

import { HistoricoService } from './historico.service';

describe('EquipamentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoricoService]
    });
  });

  it('should be created', inject([HistoricoService], (service: HistoricoService) => {
    expect(service).toBeTruthy();
  }));
});