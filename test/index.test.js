const test = require('node:test');
const assert = require('node:assert/strict');
const { getGreeting } = require('../src/index.js');

test('getGreeting returns welcome message', () => {
  assert.equal(getGreeting(), 'Welcome to EFD TypeScript Node project!');
});
