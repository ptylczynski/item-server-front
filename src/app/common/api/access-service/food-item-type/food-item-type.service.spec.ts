import { TestBed } from '@angular/core/testing';

import { FoodItemTypeService } from './food-item-type.service';

describe('FoodItemTypeService', () => {
  let service: FoodItemTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodItemTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
