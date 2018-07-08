/**
 * Testing calculate && validation functions
 * with Mocha
 *
 */

const calculate = require('./calculator.js');
const assert = require('assert');

it('correctly calculates the sum of 4 and 6', () => {
  assert.equal(calculate('+',4, 6), 10);
});

it('correctly calculates the sum of 1 and 5', () => {
  assert.equal(calculate('+',1, 5), 6);
});

it('correctly calculates the difference of 17 and 2', () => {
  assert.equal(calculate('-',17, 2), 15);
});

it('correctly calculates the product of 3 and 8', () => {
  assert.equal(calculate('*',3, 8), 24);
});

it('correctly calculates the quotient of 8 and 2', () => {
  assert.equal(calculate('/',8, 2), 4);
});

it('indicates failure when a string is used instead of a number', () => {
  assert.equal(calculate('+','qwer', 5), false);
});

it('indicates failure when two strings are used instead of numbers', () => {
  assert.equal(calculate('+','qver', 'qver'), false);
});

