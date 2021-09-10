import { add } from './add.js';

describe('add', () => {
  it('puts two and two together', () => {
    expect(add(2, 2)).toEqual(4);
  });
});
