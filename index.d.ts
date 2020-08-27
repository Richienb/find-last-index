/**
Like Array#findIndex but searches the array backwards.
@param array The array to search.
@param predicate The predicate function to call on each item.
@example
```
const findLastIndex = require("find-last-index");

findLastIndex(["a", "b", "bba", "cc", "d"], value => value.includes("a"));
//=> 2
```
*/
declare function findLastIndex<ValueType, ArrayType extends readonly ValueType[]>(array: ArrayType, predicate: (item: ValueType, index: number, array: ArrayType) => boolean): number

export = findLastIndex
