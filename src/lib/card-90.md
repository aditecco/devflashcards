---
order: 90
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What's the output?
answer: D
---

  

```javascript
function giveLydiaPizza() {
  return 'Here is pizza!';
}

const giveLydiaChocolate = () =>
  "Here's chocolate... now go hit the gym already.";

console.log(giveLydiaPizza.prototype);
console.log(giveLydiaChocolate.prototype);
```


    <label for="option-A">Option A</label>
    <input type="radio" name="answer-option" id="option-A" value="A">`{ constructor: ...}` `{ constructor: ...}`</input>
    

    <label for="option-B">Option B</label>
    <input type="radio" name="answer-option" id="option-B" value="B">`{}` `{ constructor: ...}`</input>
    

    <label for="option-C">Option C</label>
    <input type="radio" name="answer-option" id="option-C" value="C">`{ constructor: ...}` `{}`</input>
    

    <label for="option-D">Option D</label>
    <input type="radio" name="answer-option" id="option-D" value="D">`{ constructor: ...}` `undefined`</input>
    




SPLIT_MARKER

Regular functions, such as the `giveLydiaPizza` function, have a `prototype` property, which is an object (prototype object) with a `constructor` property. Arrow functions however, such as the `giveLydiaChocolate` function, do not have this `prototype` property. `undefined` gets returned when trying to access the `prototype` property using `giveLydiaChocolate.prototype`.



