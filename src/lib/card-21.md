---
order: 21
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What's the output?
answer: B
---

  

```javascript
var num = 8;
var num = 10;

console.log(num);
```


<label for="option-A">Option A</label>
<input type="radio" name="answer-option" id="option-A" value="A">`8`</input>
    

<label for="option-B">Option B</label>
<input type="radio" name="answer-option" id="option-B" value="B">`10`</input>
    

<label for="option-C">Option C</label>
<input type="radio" name="answer-option" id="option-C" value="C">`SyntaxError`</input>
    

<label for="option-D">Option D</label>
<input type="radio" name="answer-option" id="option-D" value="D">`ReferenceError`</input>
    




SPLIT_MARKER

With the `var` keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.

You cannot do this with `let` or `const` since they're block-scoped.



