```
_.assignIn(object, [sources])
```

This method is like \_.assign except that it iterates over own and inherited source properties.

### Arguments

`object (Object)`: The destination object.
`[sources] (...Object)`: The source objects.

### Returns

`(Object)`: Returns object.

### Example

```javascript
function Foo() {
  this.a = 1;
}

function Bar() {
  this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

_.assignIn({ a: 0 }, new Foo(), new Bar());
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
```
