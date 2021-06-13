---
order: 88
timestamp: 6/13/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What's the output?
answer: C
---

  

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
```


<label for="option-A">A </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-A" value="A"
  />
  `"class"`
</span>
    

<label for="option-B">B </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-B" value="B"
  />
  `"function"`
</span>
    

<label for="option-C">C </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-C" value="C"
  />
  `"object"`
</span>
    

<label for="option-D">D </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-D" value="D"
  />
  `"string"`
</span>
    




SPLIT_MARKER

Classes are syntactical sugar for function constructors. The equivalent of the `Person` class as a function constructor would be:

```javascript
function Person() {
  this.name = name;
}
```

Calling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `"object"` for an instance. `typeof member` returns `"object"`.



