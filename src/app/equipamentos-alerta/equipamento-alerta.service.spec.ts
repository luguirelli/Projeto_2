import { TestBed, inject } from '@angular/core/testing';

import { EquipamentoAlertaService } from './equipamento-alerta.service';

describe('EquipamentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquipamentoAlertaService]
    });
  });

  it('should be created', inject([EquipamentoAlertaService], (service: EquipamentoAlertaService) => {
    expect(service).toBeTruthy();
  }));
});