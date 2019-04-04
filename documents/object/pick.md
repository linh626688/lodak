```
_.pick(object, [paths])
```

Creates an object composed of the picked object properties.

### Arguments

`object (Object)`: The source object.
`[paths] (...(string|string[]))`: The property paths to pick.

### Returns

`(Object)`: Returns the new object.

### Example

```javascript
var object = { a: 1, b: "2", c: 3 };

_.pick(object, ["a", "c"]);
// => { 'a': 1, 'c': 3 }
```
