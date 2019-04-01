```
_.camelCase([string=''])
```

Converts `string` to [camel case](https://en.wikipedia.org/wiki/Camel_case)

### Arguments

[string=''](string): The string to convert.

### Returns

(string): Returns the camel cased string.

### Examples

```javascript
_.camelCase("Foo Bar");
// => 'fooBar'

_.camelCase("--foo-bar--");
// => 'fooBar'

_.camelCase("__FOO_BAR__");
// => 'fooBar'
```
