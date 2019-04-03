```
_.memoize(func)
```

Creates a function that memoizes the result of func. The first argument provided to the memoized function is used as the map cache key. The func is invoked with the this binding of the memoized function.

### Arguments

`func (Function)`: The function to have its output memoized.

### Returns

`(Function)`: Returns the new memoized function.

### Example

```javascript
const sum = (a, b) => {
  console.log("I'm recaculating");
  return 2 * a + 2 * b;
};
const memoizeSum = _memoize(sum);
console.log(memoizeSum(1, 1));
// Will print I'm recaculating, then print 4
console.log(memoizeSum(1, 1));
// This time it only print 4, no re-caculating
```
