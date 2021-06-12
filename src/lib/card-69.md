---
order: 69
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: How can we log the values that are commented out after the console.log statement?
answer: C
---

  

```javascript
function* startGame() {
  const answer = yield 'Do you love JavaScript?';
  if (answer !== 'Yes') {
    return "Oh wow... Guess we're gone here";
  }
  return 'JavaScript loves you back ❤️';
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```


<label for="option-A">Option A</label>
<input type="radio" name="answer-option" id="option-A" value="A">`game.next("Yes").value` and `game.next().value`</input>
    

<label for="option-B">Option B</label>
<input type="radio" name="answer-option" id="option-B" value="B">`game.next.value("Yes")` and `game.next.value()`</input>
    

<label for="option-C">Option C</label>
<input type="radio" name="answer-option" id="option-C" value="C">`game.next().value` and `game.next("Yes").value`</input>
    

<label for="option-D">Option D</label>
<input type="radio" name="answer-option" id="option-D" value="D">`game.next.value()` and `game.next.value("Yes")`</input>
    




SPLIT_MARKER

A generator function "pauses" its execution when it sees the `yield` keyword. First, we have to let the function yield the string "Do you love JavaScript?", which can be done by calling `game.next().value`.

Every line is executed, until it finds the first `yield` keyword. There is a `yield` keyword on the first line within the function: the execution stops with the first yield! _This means that the variable `answer` is not defined yet!_

When we call `game.next("Yes").value`, the previous `yield` is replaced with the value of the parameters passed to the `next()` function, `"Yes"` in this case. The value of the variable `answer` is now equal to `"Yes"`. The condition of the if-statement returns `false`, and `JavaScript loves you back ❤️` gets logged.



