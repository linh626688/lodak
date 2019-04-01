```
_.deburr([string=''])
```

Deburrs string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and removing combining diacritical marks.

### Arguments

`[string=''] (string)`: The string to deburr.

### Returns

`(string)`: Returns the deburred string.

### Example

```javascript
_.deburr("déjà vu");
// => 'deja vu'
```
