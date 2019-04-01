```
_.replace([string=''], pattern, replacement)
```

Replaces matches for pattern in string with replacement.

### Arguments

`[string=''] (string)`: The string to modify.
`pattern (RegExp|string)`: The pattern to replace.
`replacement (Function|string)`: The match replacement.

### Returns

`(string)`: Returns the modified string.

### Example

```javascript
_.replace("Hi Fred", "Fred", "Barney");
// => 'Hi Barney'
```
