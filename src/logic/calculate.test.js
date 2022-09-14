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
});