---
order: 106
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: Which of these methods modifies the original array?
answer: D
---

  

```javascript
const emojis = ['✨', '🥑', '😍'];

emojis.map(x => x + '✨');
emojis.filter(x => x !== '🥑');
emojis.find(x => x !== '🥑');
emojis.reduce((acc, cur) => acc + '✨');
emojis.slice(1, 2, '✨');
emojis.splice(1, 2, '✨');
```


    <label for="option-A">Option A</label>
    <input type="radio" name="answer-option" id="option-A" value="A">`All of them`</input>
    

    <label for="option-B">Option B</label>
    <input type="radio" name="answer-option" id="option-B" value="B">`map` `reduce` `slice` `splice`</input>
    

    <label for="option-C">Option C</label>
    <input type="radio" name="answer-option" id="option-C" value="C">`map` `slice` `splice`</input>
    

    <label for="option-D">Option D</label>
    <input type="radio" name="answer-option" id="option-D" value="D">`splice`</input>
    




SPLIT_MARKER

With `splice` method, we modify the original array by deleting, replacing or adding elements. In this case, we removed 2 items from index 1 (we removed `'🥑'` and `'😍'`) and added the ✨ emoji instead.

`map`, `filter` and `slice` return a new array, `find` returns an element, and `reduce` returns a reduced value.



