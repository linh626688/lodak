```
_.words([string=''], [pattern])
```

Splits string into an array of its words.

### Arguments

`[string=''] (string)`: The string to inspect.
`[pattern] (RegExp|string)`: The pattern to match words.

### Returns

(Array): Returns the words of string.

### Examples

```javascript
_.words("fred, barney, & pebbles");
// => ['fred', 'barney', 'pebbles']

_.words("fred, barney, & pebbles", /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']
```
