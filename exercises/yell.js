'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

function yell(str){
    let lowstr = str.toUpperCase();
    return lowstr;
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell('Julien'), 'JULIEN');
// End of tests */
