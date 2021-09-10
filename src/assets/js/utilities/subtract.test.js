import { subtract } from './subtract.js';

describe('subtract', () => {
  it('takes one away from three', () => {
    expect(subtract(3, 1)).toEqual(2);
  });
});
