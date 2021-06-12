---
order: 40
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What does the `setInterval` method return in the browser?
answer: A
---

  

```javascript
setInterval(() => console.log('Hi'), 1000);
```


    <label for="option-A">Option A</label>
    <input type="radio" name="answer-option" id="option-A" value="A">a unique id</input>
    

    <label for="option-B">Option B</label>
    <input type="radio" name="answer-option" id="option-B" value="B">the amount of milliseconds specified</input>
    

    <label for="option-C">Option C</label>
    <input type="radio" name="answer-option" id="option-C" value="C">the passed function</input>
    

    <label for="option-D">Option D</label>
    <input type="radio" name="answer-option" id="option-D" value="D">`undefined`</input>
    




SPLIT_MARKER

It returns a unique id. This id can be used to clear that interval with the `clearInterval()` function.



