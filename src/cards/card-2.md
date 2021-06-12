---
order: 2
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What's the output?
answer: A
---

  

```javascript
+true;
!'Lydia';
```


    <label for="option-A">Option A</label>
    <input type="radio" name="answer-option" id="option-A" value="A">`1` and `false`</input>
    

    <label for="option-B">Option B</label>
    <input type="radio" name="answer-option" id="option-B" value="B">`false` and `NaN`</input>
    

    <label for="option-C">Option C</label>
    <input type="radio" name="answer-option" id="option-C" value="C">`false` and `false`</input>
    




SPLIT_MARKER

The unary plus tries to convert an operand to a number. `true` is `1`, and `false` is `0`.

The string `'Lydia'` is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns `false`.



