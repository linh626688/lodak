```
_.union([arrays])
```

Creates an array of unique values, in order, from all given arrays using [SameValueZero](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) for equality comparisons.

### Arguments

`[arrays] (...Array)`: The arrays to inspect.

### Returns

`(Array)`: Returns the new array of combined values.

### Example

```javascript
_.union([2], [1, 2]);
// => [2, 1]
```
