```
_.curry(func, [arity=func.length])
```

Creates a function that accepts arguments of func and either invokes func returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.

The _.curry.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for provided arguments.

### Arguments

`func (Function)`: The function to curry.
`[arity=func.length] (number)`: The arity of func.

### Returns

`(Function)`: Returns the new curried function.

### Example

```javascript
var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = _.curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// Curried with placeholders.
curried(1)(_, 3)(2);
// => [1, 2, 3]
```
