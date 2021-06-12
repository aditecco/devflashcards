---
order: 0
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What's the output?
answer: C
---

  

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```


    <label for="option-A">Option A</label>
    <input type="radio" name="answer-option" id="option-A" value="A">`0 1 2` and `0 1 2`</input>
    

    <label for="option-B">Option B</label>
    <input type="radio" name="answer-option" id="option-B" value="B">`0 1 2` and `3 3 3`</input>
    

    <label for="option-C">Option C</label>
    <input type="radio" name="answer-option" id="option-C" value="C">`3 3 3` and `0 1 2`</input>
    




SPLIT_MARKER

Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.

In the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop.



