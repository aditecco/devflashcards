---
order: 52
timestamp: 6/13/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What's the output?
answer: A
---

  

```javascript
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
```


<label for="option-A">A </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-A" value="A"
  />
  `"undefined", "number"`
</span>
    

<label for="option-B">B </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-B" value="B"
  />
  `"number", "number"`
</span>
    

<label for="option-C">C </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-C" value="C"
  />
  `"object", "number"`
</span>
    

<label for="option-D">D </label>
<span class="option-container">
  <input
    type="radio"
    name="answer-option"
    id="option-D" value="D"
  />
  `"number", "undefined"`
</span>
    




SPLIT_MARKER

`let x = (y = 10);` is actually shorthand for:

```javascript
y = 10;
let x = y;
```

When we set `y` equal to `10`, we actually add a property `y` to the global object (`window` in browser, `global` in Node). In a browser, `window.y` is now equal to `10`.

Then, we declare a variable `x` with the value of `y`, which is `10`. Variables declared with the `let` keyword are _block scoped_, they are only defined within the block they're declared in; the immediately invoked function expression (IIFE) in this case. When we use the `typeof` operator, the operand `x` is not defined: we are trying to access `x` outside of the block it's declared in. This means that `x` is not defined. Values who haven't been assigned a value or declared are of type `"undefined"`. `console.log(typeof x)` returns `"undefined"`.

However, we created a global variable `y` when setting `y` equal to `10`. This value is accessible anywhere in our code. `y` is defined, and holds a value of type `"number"`. `console.log(typeof y)` returns `"number"`.



