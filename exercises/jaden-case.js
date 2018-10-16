'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

 function jadenCase(phrase){
    let tab = phrase.split(' ');
    return tab.map(element => {
        return element.charAt(0).toUpperCase() + element.substring(1)
    }).join(" ");
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.deepStrictEqual(jadenCase('bonjour les gens'), ('Bonjour Les Gens'))
assert.deepStrictEqual(jadenCase('the lord of the rings'), ('The Lord Of The Rings'))
assert.deepStrictEqual(jadenCase('allo allo allo'), ('Allo Allo Allo'))
// End of tests */