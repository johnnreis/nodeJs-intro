
## Call Stack

<p>data structure used by the JavaScript engine the V8 of NodeJs to control the execution of functions. It follows the <span>LIFO</span> Algorithm principle</p>


### How Call Stack Work

1. <span>when a function is call, it is stacked on the call stack.</span>
2. <span>If this functions call another function, the new function is added to the top of the stack</span>
3. <span>When a functions ends, it is removed from the stack and executed again for the previous function.</span>
4. <span>If the call stack is empty, it means that the code has finished executing</span>

<p>in NodeJs, asyncronous functions (such as setTimeout, fetch, I/O operations) are not in the call stack. They are delegated to Event Loop and Callback Queue, allowing the call stack to continue processing other functions without getting blocked</p>


## Node APIs

<p>follow an asyncronous, event-based model, optimizing perfomance without blocking the main thread.</p>