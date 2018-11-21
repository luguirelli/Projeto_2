import { TestBed, inject } from '@angular/core/testing';

import { ProfissionaisService } from './profissionais.service';

describe('EquipamentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfissionaisService]
    });
  });

  it('should be created', inject([ProfissionaisService], (service: ProfissionaisService) => {
    expect(service).toBeTruthy();
  }));
});