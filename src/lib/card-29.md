
---
order: 29
timestamp: 6/12/2021
topic: programming
deck: Javascript Questions by Lydia Hallie
contentSource: https://github.com/lydiahallie/javascript-questions
title: What is the event.target when clicking the button?
answer: Answer: C
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

- A: Outer `div`
- B: Inner `div`
- C: `button`
- D: An array of all nested elements.






The deepest nested element that caused the event is the target of the event. You can stop bubbling by `event.stopPropagation`



