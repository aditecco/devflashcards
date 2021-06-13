---
order: 33
timestamp: 6/13/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: Which of these values are falsy?
answer: A
---

  

```javascript
0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;
```


<label for="option-A">A </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-A" value="A"
  />
  `0`, `''`, `undefined`
</span>
    

<label for="option-B">B </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-B" value="B"
  />
  `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`
</span>
    

<label for="option-C">C </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-C" value="C"
  />
  `0`, `''`, `new Boolean(false)`, `undefined`
</span>
    

<label for="option-D">D </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-D" value="D"
  />
  All of them are falsy
</span>
    




SPLIT_MARKER

There are 8 falsy values:

- `undefined`
- `null`
- `NaN`
- `false`
- `''` (empty string)
- `0`
- `-0`
- `0n` (BigInt(0))

Function constructors, like `new Number` and `new Boolean` are truthy.



