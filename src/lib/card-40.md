---
order: 40
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What does the `setInterval` method return in the browser?
answer: Answer: A
---

  

```javascript
setInterval(() => console.log('Hi'), 1000);
```

- A: a unique id
- B: the amount of milliseconds specified
- C: the passed function
- D: `undefined`




SPLIT_MARKER

It returns a unique id. This id can be used to clear that interval with the `clearInterval()` function.



