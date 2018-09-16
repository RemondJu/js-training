'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
function keepFirst (str){
    let string = str.slice(0, 2);
    return string;
}
function keepLast (str){
    let string = str.slice(-2);
    return string;
}
function keepFirstLast (str){
    let string = str.slice(3, 5);
    return string;
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(keepFirst('zorro'), 'zo');
assert.strictEqual(keepLast('zorro'), 'ro');
assert.strictEqual(keepFirstLast('zorrozorro'), 'ro');
// End of tests */
