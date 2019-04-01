```
_.kebabCase([string=''])
```

### Arguments

`[string=''] (string)`: The string to convert.

### Returns

`(string)`: Returns the kebab cased string.

### Example

```javascript
_.kebabCase("Foo Bar");
// => 'foo-bar'

_.kebabCase("fooBar");
// => 'foo-bar'

_.kebabCase("__FOO_BAR__");
// => 'foo-bar'
```
