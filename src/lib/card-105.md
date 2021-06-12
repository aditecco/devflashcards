---
order: 105
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What's its value?
answer: Answer: A
---

  

```javascript
console.log('❤️' === '❤️');
```

- A: `true`
- B: `false`




SPLIT_MARKER

Under the hood, emojis are unicodes. The unicodes for the heart emoji is `"U+2764 U+FE0F"`. These are always the same for the same emojis, so we're comparing two equal strings to each other, which returns true.



