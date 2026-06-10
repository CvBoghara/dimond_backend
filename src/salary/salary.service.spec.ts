import { SalaryService } from './salary.service';

describe('SalaryService', () => {
  let service: SalaryService;

  beforeEach(() => {
    service = new SalaryService(
      {} as any,
      {} as any,
    );
  });

  it('should calculate salary correctly', () => {
    const salary =
      service.calculateSalaryAmount(
        100,
        5,
      );

    expect(salary).toBe(500);
  });

  it('should return zero salary', () => {
    const salary =
      service.calculateSalaryAmount(
        0,
        5,
      );

    expect(salary).toBe(0);
  });

  it('should calculate another salary value', () => {
    const salary =
      service.calculateSalaryAmount(
        48,
        5,
      );

    expect(salary).toBe(240);
  });
});