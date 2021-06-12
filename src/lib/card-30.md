---
order: 30
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: When you click the paragraph, what's the logged output?
answer: Answer: A
---

  

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  
</div>
```

- A: `p` `div`
- B: `div` `p`
- C: `p`
- D: `div`




SPLIT_MARKER

If we click `p`, we see two logs: `p` and `div`. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards.



