import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ("should return", () => {
    let result:number = service.calc(2,3, service.add);
    expect(result).toBe(5);
  });

  it ("should return", () => {
    let result:number = service.calc(2,3, (x,y) => x - y);
    expect(result).toBe(-1);
  });
});
