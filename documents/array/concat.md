```
_.concat(array, [values])
```

Creates a new array concatenating array with any additional arrays and/or values.

### Arguments

`array (Array)`: The array to concatenate.
`[values] (...*)`: The values to concatenate.

### Returns

`(Array)`: Returns the new concatenated array.

### Example

```javascript
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
```
