---
order: 23
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What's the output?
answer: C
---

  

```javascript
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```


<label for="option-A">Option A</label>
<input type="radio" name="answer-option" id="option-A" value="A">`{ a: "one", b: "two" }`</input>
    

<label for="option-B">Option B</label>
<input type="radio" name="answer-option" id="option-B" value="B">`{ b: "two", a: "three" }`</input>
    

<label for="option-C">Option C</label>
<input type="radio" name="answer-option" id="option-C" value="C">`{ a: "three", b: "two" }`</input>
    

<label for="option-D">Option D</label>
<input type="radio" name="answer-option" id="option-D" value="D">`SyntaxError`</input>
    




SPLIT_MARKER

If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.



