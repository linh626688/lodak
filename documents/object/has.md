```
_.has(object, path)
```

Checks if path is a direct property of object.

### Arguments

`object (Object)`: The object to query.
`path (Array|string)`: The path to check.

### Returns

`(boolean)`: Returns true if path exists, else false.

### Example

```javascript
var object = { a: { b: 2 } };
var other = _.create({ a: _.create({ b: 2 }) });

_.has(object, "a");
// => true

_.has(object, "a.b");
// => true

_.has(object, ["a", "b"]);
// => true

_.has(other, "a");
// => false
```
