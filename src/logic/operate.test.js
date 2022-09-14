import operate from "./operate";

describe('Testing the operate component:', () => {
  it('1. Testing addition:', () => {
    expect(operate(52, 12, '+')).toBe('64');
  });
});