### What is the async pipe in #Angular?

This is a very popular question in #interviews. Here I am trying to answer that 👇

In Angular, the async pipe does these three tasks,

- 👉It subscribes to an observable or a promise and returns the last emitted value

[Note: Promise returns only one value anyway] 

- 👉Whenever a new value is emitted, it makes the component to be checked. That means Angular will run Change Detector for that component in the next cycle

- 👉It unsubscribes from the observable when the component gets destroyed.

As a best practice, try to use a component with onPush change detection strategy with async pipe to subscribe to observables.

A dumb or presentational component must use async pipe with the onPush CD strategy.

A smart component should pass observable data to the dumb component 
 
