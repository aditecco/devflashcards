---
order: 31
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What's the output?
answer: D
---

  

```javascript
const person = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));
```


<label for="option-A">Option A</label>
<input type="radio" name="answer-option" id="option-A" value="A">`undefined is 21` `Lydia is 21`</input>
    

<label for="option-B">Option B</label>
<input type="radio" name="answer-option" id="option-B" value="B">`function` `function`</input>
    

<label for="option-C">Option C</label>
<input type="radio" name="answer-option" id="option-C" value="C">`Lydia is 21` `Lydia is 21`</input>
    

<label for="option-D">Option D</label>
<input type="radio" name="answer-option" id="option-D" value="D">`Lydia is 21` `function`</input>
    




SPLIT_MARKER

With both, we can pass the object to which we want the `this` keyword to refer to. However, `.call` is also _executed immediately_!

`.bind.` returns a _copy_ of the function, but with a bound context! It is not executed immediately.



