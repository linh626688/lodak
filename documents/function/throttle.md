```
_.throttle(func, [wait=0])
```

Creates a throttled function that only invokes func at most once per every wait milliseconds. The throttled function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout.

### Arguments

`func (Function)`: The function to throttle.
`[wait=0] (number)`: The number of milliseconds to throttle invocations to.

### Returns

`(Function)`: Returns the new throttled function.

### Example

```javascript
const logAll = () => {
  console.log("logging");
};

const throttledLogAll = throttle(logAll, 500);
let iterate = 0;
const timer = setInterval(() => {
  iterate++;
  throttledLogAll();
  if (iterate === 50) {
    window.clearInterval(timer);
  }
}, 100);

// expect print "logging" 9 times, because 50*100ms = 5000ms = 5s, throttle function can only invoke 1 time each 500ms
```
