---
order: 75
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: Is this a pure function?
answer: A
---

  

```javascript
function sum(a, b) {
  return a + b;
}
```


    <label for="option-A">Option A</label>
    <input type="radio" name="answer-option" id="option-A" value="A">Yes</input>
    

    <label for="option-B">Option B</label>
    <input type="radio" name="answer-option" id="option-B" value="B">No</input>
    




SPLIT_MARKER

A pure function is a function that _always_ returns the same result, if the same arguments are passed.

The `sum` function always returns the same result. If we pass `1` and `2`, it will _always_ return `3` without side effects. If we pass `5` and `10`, it will _always_ return `15`, and so on. This is the definition of a pure function.



