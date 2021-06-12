---
order: 29
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What is the event.target when clicking the button?
answer: C
---

  

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```


    <label for="option-A">Option A</label>
    <input type="radio" name="answer-option" id="option-A" value="A">Outer `div`</input>
    

    <label for="option-B">Option B</label>
    <input type="radio" name="answer-option" id="option-B" value="B">Inner `div`</input>
    

    <label for="option-C">Option C</label>
    <input type="radio" name="answer-option" id="option-C" value="C">`button`</input>
    

    <label for="option-D">Option D</label>
    <input type="radio" name="answer-option" id="option-D" value="D">An array of all nested elements.</input>
    




SPLIT_MARKER

The deepest nested element that caused the event is the target of the event. You can stop bubbling by `event.stopPropagation`



