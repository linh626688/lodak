```
_.debounce(func, [wait=0])
```

Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked. The debounced function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the debounced function. Subsequent calls to the debounced function return the result of the last func invocation.

### Arguments

`func (Function)`: The function to debounce.
`[wait=0] (number)`: The number of milliseconds to delay.

### Returns

`(Function)`: Returns the new debounced function.

### Example

```javascript
const logAll = number => {
  console.log("logging " + number);
};

const debouncedLogAll = throttle(logAll, 500);

debouncedLogAll(1);
debouncedLogAll(2);
setTimeout(() => {
  debouncedLogAll(3);
}, 600);

// will only print "logging 2" then "logging 3", because time between 2 call is < 500ms, and debouncedLogAll(2) is invoked last
// and debouncedLogAll(3) is invoked after 600ms > 500mss
```
