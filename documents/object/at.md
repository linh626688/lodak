```
_.at(object, [paths])
```

Creates an array of values corresponding to paths of object.

### Arguments

`object (Object)`: The object to iterate over.
`[paths] (...(string|string[]))`: The property paths to pick.

### Returns

`(Array)`: Returns the picked values.

### Example

```javascript
var object = { a: [{ b: { c: 3 } }, 4] };

_.at(object, ["a[0].b.c", "a[1]"]);
// => [3, 4]
```
