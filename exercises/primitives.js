'use strict'

/*
 * Create a constant variables for each primitives
 * `str`, `num`, `bool` and `undef`
 *
 * @notions Primitive and Operators, Variables
 */

// Your code :

const str = "Elisabeth";
const num = 38;
const bool = true;
const undef = undefined;


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof str, 'string')
assert.strictEqual(str, 'Elisabeth')

assert.strictEqual(typeof num, 'number')
assert.strictEqual(num, 38)

assert.strictEqual(typeof bool, 'boolean')
assert.strictEqual(bool, true)

assert.strictEqual(typeof undef, 'undefined')
assert.strictEqual(undef, undefined)
// End of tests */
