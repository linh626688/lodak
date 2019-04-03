```
_.get(object, path, [defaultValue])
```

Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.

### Arguments

`object (Object)`: The object to query.
`path (Array|string)`: The path of the property to get.
`[defaultValue] (*)`: The value returned for undefined resolved values.

### Returns

`(*)`: Returns the resolved value.

### Example

```javascript
var object = { a: [{ b: { c: 3 } }] };

_.get(object, "a[0].b.c");
// => 3

_.get(object, ["a", "0", "b", "c"]);
// => 3

_.get(object, "a.b.c", "default");
// => 'default'
```
