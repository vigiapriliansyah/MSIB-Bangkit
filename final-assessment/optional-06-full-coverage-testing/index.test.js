import test from 'node:test';
import assert from 'node:assert/strict';
import sum from './index.js';

test('sum function test suite', async (t) => {
  
  await t.test('should return correct sum for positive numbers', () => {
    assert.equal(sum(1, 2), 3);
    assert.equal(sum(0, 0), 0);
    assert.equal(sum(100, 200), 300);
  });

  await t.test('should return 0 for non-number inputs', () => {
    assert.equal(sum('1', 2), 0);
    assert.equal(sum(1, '2'), 0);
    assert.equal(sum(null, undefined), 0);
    assert.equal(sum({}, []), 0);
  });

  await t.test('should return 0 for negative numbers', () => {
    assert.equal(sum(-1, 2), 0);
    assert.equal(sum(1, -2), 0);
    assert.equal(sum(-1, -2), 0);
  });
});

