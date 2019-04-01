```
_.lowerCase([string=''])
```

Converts string, as space separated words, to lower case.

### Arguments

`[string=''] (string)`: The string to convert.

### Returns

`(string)`: Returns the lower cased string.

### Example

```javascript
_.lowerCase("--Foo-Bar--");
// => 'foo bar'

_.lowerCase("fooBar");
// => 'foo bar'

_.lowerCase("__FOO_BAR__");
// => 'foo bar'
```
