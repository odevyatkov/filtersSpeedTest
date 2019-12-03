import fs from 'fs';
const {
  performance
} = require('perf_hooks');
import shuffle from 'lodash/shuffle';

import {
  testFor,
  testForOf,
  testMap,
  testWhile,
  testForEach,
} from './tests/simpleLoops';
import {
  testMapFilterArray,
  testForEachArray,
  testForArray,
  testForOfArray,
  testWhileArray,
} from './tests/filterWithArray';
import {
  testMapFilterSet,
  testForEachSet,
  testForSet,
  testForOfSet,
  testWhileSet,
} from './tests/filtersWithSet';
import {
  testForEachKeyValueObject,
  testForKeyValueObject,
  testForOfKeyValueObject,
  testWhileKeyValueObject,
} from './tests/filterWithKeyValueObject';

/**
 * @typedef {{
 *  id: string,
 *  firstName: string,
 *  lastName: string,
 *  foo: number,
 *  bar: number
 * }} ItemSource
 */
/**
 * @typedef {{
 *  id: string,
 *  name: string,
 *  count: number
 * }} ItemTarget
 */

/**
 * @type {ItemSource[]}
 */
const items = JSON.parse(
  fs.readFileSync(`./data/test.json`)
);
const stats = {};

for(let i = 0; i < 100; i ++) {
  testCase('map', testMap);
  testCase('map + ids as array', testMapFilterArray);
  testCase('map + ids as Set', testMapFilterSet);
  testCase('forEach', testForEach);
  testCase('forEach + ids as array', testForEachArray);
  testCase('forEach + ids as Set', testForEachSet);
  testCase('forEach + key-value', testForEachKeyValueObject);
  testCase('for', testFor);
  testCase('for + ids as array', testForArray);
  testCase('for + ids as Set', testForSet);
  testCase('for + key-value', testForKeyValueObject);
  testCase('for-of', testForOf);
  testCase('for-of + ids as array', testForOfArray);
  testCase('for-of + ids as Set', testForOfSet);
  testCase('for-of + key-value', testForOfKeyValueObject);
  testCase('while', testWhile);
  testCase('while + ids as array', testWhileArray);
  testCase('while + ids as Set', testWhileSet);
  testCase('while + key-value', testWhileKeyValueObject);
  console.log(`---------------${i}-------------------`);
}
for(let name in stats) {
  console.log(`${name}\t${stats[name].join('\t')}`);
}

/**
 * @param {string} name
 * @param {function} func
 */
function testCase(name, func) {
  if (!stats[name]) {
    stats[name] = [];
  }
  const start = performance.now();
  const result = func(shuffle(items));
  const done = performance.now();

  console.log(`${name}\t${result.length}:\t${done - start}`);
  stats[name].push(done - start);
}
