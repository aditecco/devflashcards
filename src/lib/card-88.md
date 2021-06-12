---
order: 88
timestamp: 6/12/2021
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


<label for="option-A">Option A</label>
<input type="radio" name="answer-option" id="option-A" value="A">`"class"`</input>
    

<label for="option-B">Option B</label>
<input type="radio" name="answer-option" id="option-B" value="B">`"function"`</input>
    

<label for="option-C">Option C</label>
<input type="radio" name="answer-option" id="option-C" value="C">`"object"`</input>
    

<label for="option-D">Option D</label>
<input type="radio" name="answer-option" id="option-D" value="D">`"string"`</input>
    




SPLIT_MARKER

Classes are syntactical sugar for function constructors. The equivalent of the `Person` class as a function constructor would be:

```javascript
function Person() {
  this.name = name;
}
```

Calling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `"object"` for an instance. `typeof member` returns `"object"`.



