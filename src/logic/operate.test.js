import operate from './operate';

describe('Testing the operate component:', () => {
  it('1. Testing addition:', () => {
    expect(operate(52, 12, '+')).toBe('64');
  });

  it('2. Testing divide by zero error:', () => {
    expect(operate(10, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('3. Test not an operation error:', () => {
    expect(() => { operate(10, 0, '*'); }).toThrow(Error);
  });
});
