## What is Lifting State Up in React?

Ans -
Lifting State Up in React refers to the practice of moving the state from a child component to a common ancestor (usually a parent component) so that multiple child components can share and sync data efficiently.

Example
Let's say we have two components, `InputBox` and `DisplayText`, that need to share the same text state.
```js
function InputBox() {
  const [text, setText] = useState("");

  return (
    <input 
      type="text" 
      value={text} 
      onChange={(e) => setText(e.target.value)} 
    />
  );
}

function DisplayText({ text }) {
  return <p>{text}</p>;
}

function App() {
  return (
    <div>
      <InputBox />
      <DisplayText text="This won't update!" />
    </div>
  );
}

```
In this case, the DisplayText component doesn't reflect the changes made in InputBox because the state is local to InputBox.
<hr />
After Lifting State Up (State in Parent)

```js
import { useState } from "react";

function InputBox({ text, setText }) {
  return (
    <input 
      type="text" 
      value={text} 
      onChange={(e) => setText(e.target.value)} 
    />
  );
}

function DisplayText({ text }) {
  return <p>{text}</p>;
}

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <InputBox text={text} setText={setText} />
      <DisplayText text={text} />
    </div>
  );
}

```
 
## What is React context?

Ans-
<br />
React Context is a built-in state management solution that allows you to share data across components without having to pass props manually at every level. It helps avoid prop drilling and makes state management easier in larger applications.
 
3. What are different ways to add CSS in your app?
  - External CSS Files
  - Inline Styles
  - CSS Modules
```
   // App.module.css
.container {
  background-color: lightblue;
  padding: 20px;
}
.title {
  color: navy;
}

// App.js
import React from 'react';
import styles from './App.module.css'; // Import CSS Module

const App = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Hello, world!</h1>
  </div>
);

export default App;
```
  -  Preprocessors (SASS/SCSS, LESS)
  -   CSS-in-JS Libraries
```
import styled from 'styled-components';

const Container = styled.div`
  background-color: lightblue;
  padding: 20px;
`;

const Title = styled.h1`
  color: navy;
`;

const App = () => (
  <Container>
    <Title>Hello, world!</Title>
  </Container>
);

export default App;

```


## What is Hot Module Replacement?
```
  Hot Module Replacement (HMR) is a feature in React (via Webpack) that allows modules (like components, styles, etc.) to be updated without requiring a full page reload. This makes development faster by preserving the application state while making changes.
```

## What is the use of Parcel, Vite, Webpack?
```
  Parcel, Vite, and Webpack are JavaScript bundlers used in front-end development to bundle and optimize code for production. They help in managing dependencies, optimizing assets, and improving development speed. Let’s break them down:
```

## How does create-react-app work?
```
create-react-app is a tool that sets up a new React project with a well-structured development environment. It automates much of the initial setup so you can get started building your app immediately without needing to worry about configuring build tools like Webpack, Babel, or ESLint.
```

## What is Tree Shaking?
```
Tree shaking is a technique used in JavaScript bundlers (like Webpack, Rollup, and esbuild) to eliminate unused code from the final bundle, reducing the size of the output file and improving performance.
```
    
## Difference b/w dependency and devDependency
```
Dependencies:

Purpose:
These are the packages that your application needs to run in a production environment.
They are essential for the core functionality of your software.
Usage:
When you deploy your application, these dependencies are required for it to function correctly.
Examples include frameworks like Express.js or libraries for database interaction.
Installation:
When you run npm install, these packages are installed.
devDependencies:

Purpose:
These are packages that are only needed during the development process.
They are not required for the application to run in production.
Usage:
These are typically used for tasks like:
Testing (e.g., Mocha, Jest)
Linting (e.g., ESLint)
Building/compiling (e.g., Webpack, Babel)
Installation:
These packages are installed when you run npm install in a development environment.
However, they are typically excluded when installing dependencies in a production environment (e.g., when using npm install --production).
```

## What is npx and npm?
Both npx and npm are part of Node.js, but they serve different purposes.

| Feature	| npx	| npm |
| :------------ | :--------------------------------------------------------- | :----------------------------------------------------- |
| Purpose	| Runs Node.js packages without installing them globally | Manages dependencies (install, update, remove) |
| Installation | Comes with Node.js (since v5.2.0) | Comes with Node.js (Node Package Manager) |
| Usage	| Executes commands from node_modules/.bin or fetches them temporarily | Installs packages locally (node_modules) or globally |
| Global Installation Needed? |	No, runs temporary packages	| Yes, installs packages permanently |
| Use Case | Running one-time CLI tools (e.g., npx create-react-app my-app) |	Managing project dependencies (npm install react) |


## Difference b/w package .json and package-lock .json
The key differences between package.json and package-lock.json in a Node.js project are

| Feature               | `package.json`                          | `package-lock.json`                     |
|-----------------------|--------------------------------------|--------------------------------------|
| **Purpose**          | Defines project dependencies, metadata, and scripts. | Locks exact dependency versions for consistency. |
| **Dependency Versions** | Allows flexible versions (`^`, `~`). | Stores exact installed versions. |
| **Version Control**   | Must be committed to Git. | Should be committed for consistency. |
| **Installation Behavior** | Used by `npm install` to fetch dependencies. | Ensures `npm ci` installs exact versions. |
| **Readability**       | Human-readable for developers. | Machine-generated and detailed. |


## Difference between console .log(<HeaderComponent/>) and console .log(HeaderComponent()); 

Summarizing the difference between console.log(<HeaderComponent/>) and console.log(HeaderComponent()) in React:

#### JSX vs. Function Call:
<HeaderComponent/> creates a JSX element, representing a React component instance.
HeaderComponent() directly invokes the component function as a regular JavaScript function.
React Rendering Pipeline:
<HeaderComponent/> engages React's rendering pipeline, allowing React to manage the component's lifecycle.
HeaderComponent() bypasses React's rendering, executing the function independently.

#### Output Differences:
<HeaderComponent/> logs a React element object, describing the component.
HeaderComponent() logs the function's return value (JSX, a string, etc.), and executes any side effects within the function.

#### Intended Use:
<HeaderComponent/> is the standard way to use React components within a React application.
HeaderComponent() is primarily for inspecting the function's output or using the component as a regular function.

#### Lifecycle Management:
React manages the component's lifecycle(mount, update, unmount) when a JSX element is used.
When the function is directly called, no react lifecycle methods are executed.

## What is React.Fragment?
`React.Fragment` is a built-in component in React that lets you **group multiple elements** **without adding extra DOM nodes**.

---

##### ✅ Why Use `React.Fragment`?
1. **Avoid unnecessary `<div>` wrappers**  
   - Instead of wrapping elements in an unnecessary `<div>`, use `<React.Fragment>` to keep your HTML clean.
   
2. **Improve performance**  
   - Reduces extra DOM elements, making rendering slightly faster.

3. **Fix JSX return limitations**  
   - JSX allows returning only one root element. If you need multiple elements, `React.Fragment` helps without affecting the HTML structure.

---

##### 📌 Example Without `React.Fragment` (Unnecessary `<div>` Wrapping)
```jsx
const App = () => {
  return (
    <div>  {/* Unnecessary extra div */}
      <h1>Hello</h1>
      <p>Welcome to React!</p>
    </div>
  );
};
```
🔴 **Problem**: The extra `<div>` might cause unwanted styles, spacing, or nesting issues.

---

##### ✅ Example Using `React.Fragment`
```jsx
const App = () => {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>Welcome to React!</p>
    </React.Fragment>
  );
};
```
✅ **No extra `<div>` in the final HTML output!**

---

##### 📌 Short Syntax (`<>` Fragment Shorthand)
You can use **empty angle brackets (`<>...</>`)** instead of `React.Fragment`:
```jsx
const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome to React!</p>
    </>
  );
};
```
✅ **Works the same, but is shorter and cleaner!**  
❌ **Cannot use keys (`key` attribute) with this shorthand**.

---

##### 📌 When Should You Use `React.Fragment`?
- When **returning multiple elements** from a component.
- When **avoiding unnecessary `<div>` wrappers** that may break styling or layouts.
- When improving **rendering performance**.

