---
order: 142
timestamp: 6/13/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What do we need to add to the `person` object to get `["Lydia Hallie", 21]` as the output of `[...person]`?
answer: C
---

  

```javascript
const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] // ["Lydia Hallie", 21]
```


<label for="option-A">A </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-A" value="A"
  />
  Nothing, object are iterable by default
</span>
    

<label for="option-B">B </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-B" value="B"
  />
  `*[Symbol.iterator]() { for (let x in this) yield* this[x] }`
</span>
    

<label for="option-C">C </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-C" value="C"
  />
  `*[Symbol.iterator]() { yield* Object.values(this) }`
</span>
    

<label for="option-D">D </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-D" value="D"
  />
  `*[Symbol.iterator]() { for (let x in this) yield this }`
</span>
    




SPLIT_MARKER

Objects aren't iterable by default. An iterable is an iterable if the iterator protocol is present. We can add this manually by adding the iterator symbol `[Symbol.iterator]`, which has to return a generator object, for example by making it a generator function `*[Symbol.iterator]() {}`. This generator function has to yield the `Object.values` of the `person` object if we want it to return the array `["Lydia Hallie", 21]`: `yield* Object.values(this)`.



