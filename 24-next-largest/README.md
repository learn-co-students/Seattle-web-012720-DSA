# Find the Next Largest Number in an Array

## Description: 
- You are given an array. For each element, print out that element and the next number in the array which is greater than it.

- If there is no element greater, print -1.

## Examples:

```javascript
nextGreatest([4,3,5])
=>  {4:5, 3:5, 5:-1}

nextGreatest([12,1,1,7])
=> {12:-1, 1:7, 1:7, 7:-1}
```

## Constraints

- Do not wrap around
- All elements will be positive numbers between 1 and 100