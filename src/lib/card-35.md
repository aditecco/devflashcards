---
order: 35
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What's the output?
answer: C
---

  

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```


<label for="option-A">Option A</label>
<input type="radio" name="answer-option" id="option-A" value="A">`[1, 2, 3, 7 x null, 11]`</input>
    

<label for="option-B">Option B</label>
<input type="radio" name="answer-option" id="option-B" value="B">`[1, 2, 3, 11]`</input>
    

<label for="option-C">Option C</label>
<input type="radio" name="answer-option" id="option-C" value="C">`[1, 2, 3, 7 x empty, 11]`</input>
    

<label for="option-D">Option D</label>
<input type="radio" name="answer-option" id="option-D" value="D">`SyntaxError`</input>
    




SPLIT_MARKER

When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of `undefined`, but you will see something like:

`[1, 2, 3, 7 x empty, 11]`

depending on where you run it (it's different for every browser, node, etc.)



