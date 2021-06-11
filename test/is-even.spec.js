import assert from 'assert';
import {isEven} from '../src/is-even';

describe('isEven', () => {
  it('should return true for 0', () => {
    assert.strictEqual(isEven(0), true);
  });
});
