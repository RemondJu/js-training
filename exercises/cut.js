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
    for(let i = 0; i < 2; i++){
        str[i] = '';
    }
}
function cutLast(str){
    let long = str.length - 1;
    for(let i = long; i > long - 2; i--){
        str[i] = '';
    }
}
function cutFirstLast(str){
    let long = str.length - 1;
    for(let i = long; i > long - 2; i--){
        str[i] = '';
    }
    for(let i = 0; i < 2; i++){
        str[i] = '';
    }
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst('zorro'), 'rro');
assert.strictEqual(cutLast('zorro'), 'zor');
assert.strictEqual(cutFirstLast('bisous'), 'so');
// End of tests */
