import { TestBed, inject } from '@angular/core/testing';

import { PreventivasService } from './preventivas.service';

describe('EquipamentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreventivasService]
    });
  });

  it('should be created', inject([PreventivasService], (service: PreventivasService) => {
    expect(service).toBeTruthy();
  }));
});