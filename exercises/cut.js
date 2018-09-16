'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
function cutFirst(str){
    let string = str.slice(2);
    return string;
}
function cutLast(str){
    let string = str.slice(0, -2);
    return string;
}
function cutFirstLast(str){
    let string = str.slice(2);
    string = string.slice(0, -2);
    return string;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst('zorro'), 'rro');
assert.strictEqual(cutLast('zorro'), 'zor');
assert.strictEqual(cutFirstLast('bisous'), 'so');
// End of tests */
