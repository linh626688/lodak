```
_.trim([string=''], [chars=whitespace])
```

Removes leading and trailing whitespace or specified characters from string.

### Arguments

`[string=''] (string)`: The string to trim.
`[chars=whitespace] (string)`: The characters to trim.

### Returns

`(string)`: Returns the trimmed string.

### Example

```javascript
_.trim("  abc  ");
// => 'abc'

_.trim("-_-abc-_-", "_-");
// => 'abc'

_.map(["  foo  ", "  bar  "], _.trim);
// => ['foo', 'bar']
```
