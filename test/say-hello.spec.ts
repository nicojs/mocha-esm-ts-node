import assert from 'assert';
import { sayHello } from '../src/say-hello';

describe('sayHello', () => {
  it('should say hello', () => {
    assert.strictEqual(sayHello('Bar'), 'Hi! Bar');
  });
});
