```
_.repeat([string=''], [n=1])
```

Repeats the given string n times.

### Arguments

`[string=''](string)`: The string to repeat.
`[n=1](number)`: The number of times to repeat the string.

### Returns

`(string)`: Returns the repeated string.

### Example

```javascript
_.repeat("*", 3);
// => '***'

_.repeat("abc", 2);
// => 'abcabc'

_.repeat("abc", 0);
// => ''
```
