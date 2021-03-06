---
order: 148
timestamp: 6/13/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What's the output?
answer: B
---

  

```javascript
const animals = {};
let dog = { emoji: '๐ถ' }
let cat = { emoji: '๐' }

animals[dog] = { ...dog, name: "Mara" }
animals[cat] = { ...cat, name: "Sara" }

console.log(animals[dog])
```


<label for="option-A">A </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-A" value="A"
  />
  `{ emoji: "๐ถ", name: "Mara" }`
</span>
    

<label for="option-B">B </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-B" value="B"
  />
  `{ emoji: "๐", name: "Sara" }`
</span>
    

<label for="option-C">C </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-C" value="C"
  />
  `undefined`
</span>
    

<label for="option-D">D </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-D" value="D"
  />
  `ReferenceError`
</span>
    




SPLIT_MARKER

Object keys are converted to strings. 

Since the value of  `dog` is an object,  `animals[dog]` actually means that weโre creating a new property called `"object Object"` equal to the new object. `animals["object Object"]` is now equal to `{ emoji: "๐ถ", name: "Mara"}`.

`cat` is also an object, which means that `animals[cat]` actually means that weโre overwriting the value of  `animals[``"``object Object``"``]` with the new cat properties. 

Logging `animals[dog]`, or actually `animals["object Object"]` since converting the `dog` object to a string results `"object Object"`, returns the `{ emoji: "๐", name: "Sara" }`.



