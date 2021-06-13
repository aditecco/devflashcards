---
order: 64
timestamp: 6/13/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: With which constructor can we successfully extend the `Dog` class?
answer: B
---

  

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  // 1
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

};
```


<label for="option-A">A </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-A" value="A"
  />
  1
</span>
    

<label for="option-B">B </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-B" value="B"
  />
  2
</span>
    

<label for="option-C">C </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-C" value="C"
  />
  3
</span>
    

<label for="option-D">D </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-D" value="D"
  />
  4
</span>
    




SPLIT_MARKER

In a derived class, you cannot access the `this` keyword before calling `super`. If you try to do that, it will throw a ReferenceError: 1 and 4 would throw a reference error.

With the `super` keyword, we call that parent class's constructor with the given arguments. The parent's constructor receives the `name` argument, so we need to pass `name` to `super`.

The `Labrador` class receives two arguments, `name` since it extends `Dog`, and `size` as an extra property on the `Labrador` class. They both need to be passed to the constructor function on `Labrador`, which is done correctly using constructor 2.



