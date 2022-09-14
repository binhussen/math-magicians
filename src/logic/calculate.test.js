import calculate from './calculate';

describe("Testing calculations", () => {
  const obj = { 
    total: null,
    next: null,
    operation: null}

  it('1. Testing addition', () => {
      let result = calculate(obj, '3');
      result = calculate(result, '+');
      result = calculate(result, '2');
      result = calculate(result, '=');

      expect(result.total).toBe('5');
  });

  it('2. Testing multiplication', () => {
      let result = calculate(obj, '5');
      result = calculate(result, '0');
      result = calculate(result, 'x');
      result = calculate(result, '2');
      result = calculate(result, '5');
      result = calculate(result, '=');

      expect(result.total).toBe('1250');
  });
});