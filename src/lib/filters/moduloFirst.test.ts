import { describe, it, expect } from 'vitest';
import { moduloLoop } from './moduloFirst';

describe('Modulo First filter', () => {
  it('The first integer in the list is n. Replace each integer by itself mod n.', () => {
    const input = [4, 2, 8, 3, 9, 4, 10, 5, 11, 6];
    const expected = [0, 2, 0, 3, 1, 1, 2, 1, 3, 2];
    expect(moduloLoop(input)).toEqual(expected);    
  });
});
