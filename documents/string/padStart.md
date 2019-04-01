```
_.padStart([string=''], [length=0], [chars=' '])
```

Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.

### Arguments

`[string=''] (string)`: The string to pad.
`[length=0] (number)`: The padding length.
`[chars=' '] (string)`: The string used as padding.

### Returns

`(string)`: Returns the padded string.

### Example

```javascript
_.padStart("abc", 6);
// => '   abc'

_.padStart("abc", 6, "_-");
// => '_-_abc'

_.padStart("abc", 3);
// => 'abc'
```
