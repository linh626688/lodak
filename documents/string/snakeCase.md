```
_.snakeCase([string=''])
```

Converts string to [snake case](https://en.wikipedia.org/wiki/Snake_case).

### Arguments

`[string=''] (string)`: The string to convert.

### Returns

`(string)`: Returns the snake cased string.

```javascript
_.snakeCase("Foo Bar");
// => 'foo_bar'

_.snakeCase("fooBar");
// => 'foo_bar'

_.snakeCase("--FOO-BAR--");
// => 'foo_bar'
```
