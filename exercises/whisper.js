'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

function whisper(str){
    let lowstr = str.toLowerCase();
    return lowstr;
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(whisper('Julien'), 'julien');
assert.strictEqual(whisper('JEANJEAN'), 'jeanjean');
// End of tests */
