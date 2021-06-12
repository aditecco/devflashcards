---
order: 33
timestamp: 6/12/2021
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


<label for="option-A">Option A</label>
<input type="radio" name="answer-option" id="option-A" value="A">`0`, `''`, `undefined`</input>
    

<label for="option-B">Option B</label>
<input type="radio" name="answer-option" id="option-B" value="B">`0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`</input>
    

<label for="option-C">Option C</label>
<input type="radio" name="answer-option" id="option-C" value="C">`0`, `''`, `new Boolean(false)`, `undefined`</input>
    

<label for="option-D">Option D</label>
<input type="radio" name="answer-option" id="option-D" value="D">All of them are falsy</input>
    




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



