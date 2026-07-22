const test = require('node:test');
const assert = require('node:assert/strict');
const { getGreeting } = require('../src/index.js');

test('getGreeting returns Hello, World!', () => {
  assert.equal(getGreeting(), 'Hello, World!');
});
