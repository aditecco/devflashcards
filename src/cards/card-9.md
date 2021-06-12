---
order: 9
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What's the output?
answer: A
---

  

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```


    <label for="option-A">Option A</label>
    <input type="radio" name="answer-option" id="option-A" value="A">`TypeError`</input>
    

    <label for="option-B">Option B</label>
    <input type="radio" name="answer-option" id="option-B" value="B">`SyntaxError`</input>
    

    <label for="option-C">Option C</label>
    <input type="radio" name="answer-option" id="option-C" value="C">`Lydia Hallie`</input>
    

    <label for="option-D">Option D</label>
    <input type="radio" name="answer-option" id="option-D" value="D">`undefined` `undefined`</input>
    




SPLIT_MARKER

In JavaScript, functions are objects, and therefore, the method `getFullName` gets added to the constructor function object itself. For that reason, we can call `Person.getFullName()`, but `member.getFullName` throws a `TypeError`. 

If you want a method to be available to all object instances, you have to add it to the prototype property:

```js
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
```



