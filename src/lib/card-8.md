---
order: 8
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What happens when we do this?
answer: A
---

  

```javascript
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';
```


    <label for="option-A">Option A</label>
    <input type="radio" name="answer-option" id="option-A" value="A">Nothing, this is totally fine!</input>
    

    <label for="option-B">Option B</label>
    <input type="radio" name="answer-option" id="option-B" value="B">`SyntaxError`. You cannot add properties to a function this way.</input>
    

    <label for="option-C">Option C</label>
    <input type="radio" name="answer-option" id="option-C" value="C">`"Woof"` gets logged.</input>
    

    <label for="option-D">Option D</label>
    <input type="radio" name="answer-option" id="option-D" value="D">`ReferenceError`</input>
    




SPLIT_MARKER

This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)

A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.



