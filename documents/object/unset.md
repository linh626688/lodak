```
_.unset(object, path)
```

Removes the property at path of object.

### Arguments

`object (Object)`: The object to modify.
`path (Array|string)`: The path of the property to unset.

### Returns

`(boolean)`: Returns true if the property is deleted, else false.

### Example

```javascript
var object = { a: [{ b: { c: 7 } }] };
_.unset(object, "a[0].b.c");
// => true

console.log(object);
// => { 'a': [{ 'b': {} }] };

_.unset(object, ["a", "0", "b", "c"]);
// => true

console.log(object);
// => { 'a': [{ 'b': {} }] };
```
