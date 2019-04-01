```
_.truncate([string=''], [options={}])
```

Truncates string if it's longer than the given maximum string length. The last characters of the truncated string are replaced with the omission string which defaults to "...".

### Arguments

`[string=''] (string)`: The string to truncate.
`[options={}] (Object)`: The options object.
`[options.length=30] (number)`: The maximum string length.
`[options.omission='...'] (string)`: The string to indicate text is omitted.
`[options.separator] (RegExp|string)`: The separator pattern to truncate to.

### Returns

`(string)`: Returns the truncated string.

### Example

```javascript
_.truncate("hi-diddly-ho there, neighborino");
// => 'hi-diddly-ho there, neighbo...'

_.truncate("hi-diddly-ho there, neighborino", {
  length: 24,
  separator: " "
});
// => 'hi-diddly-ho there,...'

_.truncate("hi-diddly-ho there, neighborino", {
  length: 24,
  separator: /,? +/
});
// => 'hi-diddly-ho there...'

_.truncate("hi-diddly-ho there, neighborino", {
  omission: " [...]"
});
// => 'hi-diddly-ho there, neig [...]'
```
