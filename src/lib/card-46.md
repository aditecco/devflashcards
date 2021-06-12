---
order: 46
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What's the output?
answer: B
---

  

```javascript
console.log(3 + 4 + '5');
```


<label for="option-A">Option A</label>
<input type="radio" name="answer-option" id="option-A" value="A">`"345"`</input>
    

<label for="option-B">Option B</label>
<input type="radio" name="answer-option" id="option-B" value="B">`"75"`</input>
    

<label for="option-C">Option C</label>
<input type="radio" name="answer-option" id="option-C" value="C">`12`</input>
    

<label for="option-D">Option D</label>
<input type="radio" name="answer-option" id="option-D" value="D">`"12"`</input>
    




SPLIT_MARKER

Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the _same_ precedence. We only have one type of operator: `+`. For addition, the associativity is left-to-right.

`3 + 4` gets evaluated first. This results in the number `7`.

`7 + '5'` results in `"75"` because of coercion. JavaScript converts the number `7` into a string, see question 15. We can concatenate two strings using the `+`operator. `"7" + "5"` results in `"75"`.



