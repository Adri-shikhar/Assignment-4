### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: getElementById() = Selects one element by its ID.

getElementsByClassName() = Selects all elements with a given class (returns a collection).

querySelector() = Selects the first element that matches any CSS selector.

querySelectorAll() = Selects all elements that match a CSS selector.

### 2. How do you create and insert a new element into the DOM?
and:Create element = document.createElement("div")

Add content = element.textContent = "Hello"

Insert it = parent.appendChild(element)

### 3. What is Event Bubbling? And how does it work?
ans:Event Bubbling means when an event happens on a child element, it first runs on that element, then moves up to its parent, then grandparent, and so on.Event flows from inside to outside (bottom to top).

### 4. What is Event Delegation in JavaScript? Why is it useful?
and:Event Delegation means adding one event listener to a parent instead of adding listeners to many child elements.and it works for dynamically added elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() → Stops the default browser action.
stopPropagation() → Stops the event from moving up to parent elements.