import { sum } from './index.js';
import { strict as assert } from 'node:assert';
import test from 'node:test';

test('sum of 2 and 3 should be 5', () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5);
});

test('sum of -2 and -3 should be -5', () => {
  const result = sum(-2, -3);
  assert.strictEqual(result, -5);
});

test('sum of 2 and -3 should be -1', () => {
  const result = sum(2, -3);
  assert.strictEqual(result, -1);
});

test('sum of 0 and 5 should be 5', () => {
  const result = sum(0, 5);
  assert.strictEqual(result, 5);
});
