---
order: 11
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What are the three phases of event propagation?
answer: D
---

  


    <label for="option-A">Option A</label>
    <input type="radio" name="answer-option" id="option-A" value="A">Target > Capturing > Bubbling</input>
    

    <label for="option-B">Option B</label>
    <input type="radio" name="answer-option" id="option-B" value="B">Bubbling > Target > Capturing</input>
    

    <label for="option-C">Option C</label>
    <input type="radio" name="answer-option" id="option-C" value="C">Target > Bubbling > Capturing</input>
    

    <label for="option-D">Option D</label>
    <input type="radio" name="answer-option" id="option-D" value="D">Capturing > Target > Bubbling</input>
    




SPLIT_MARKER

During the **capturing** phase, the event goes through the ancestor elements down to the target element. It then reaches the **target** element, and **bubbling** begins.

<img src="https://i.imgur.com/N18oRgd.png" width="200">



