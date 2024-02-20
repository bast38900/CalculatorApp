import {add, subtract, multiply, divide} from '../app/utils/calculate';

// Note: import explicitly to use the types shipped with jest.
import {it, expect, describe} from '@jest/globals';

describe('Addition', () => {
  it('2+3 should return 5', () => {
    const a = 2;
    const b = 3;
  
    expect(add(a, b)).toBe(5);
  });

  it('2+3 should not return 4', () => {
    const a = 2;
    const b = 3;
  
   expect(add(a, b)).not.toBe(4);
  });

})

describe('Substraction', () => {
  it('10-3 should return 7', () => {
    const a = 10;
    const b = 3;
  
    expect(subtract(a, b)).toBe(7);
  });

  it('10-3 should not return 4', () => {
    const a = 2;
    const b = 3;
  
   expect(subtract(a, b)).not.toBe(4);
  });

})