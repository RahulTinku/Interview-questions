1. What is Lifting State Up in React?

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
 
2. What is React context?

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


4. What is Hot Module Replacement?
```
  Hot Module Replacement (HMR) is a feature in React (via Webpack) that allows modules (like components, styles, etc.) to be updated without requiring a full page reload. This makes development faster by preserving the application state while making changes.
```

6. What is the use of Parcel, Vite, Webpack?
```
  Parcel, Vite, and Webpack are JavaScript bundlers used in front-end development to bundle and optimize code for production. They help in managing dependencies, optimizing assets, and improving development speed. Let’s break them down:
```

9. How does create-react-app work?
```
create-react-app is a tool that sets up a new React project with a well-structured development environment. It automates much of the initial setup so you can get started building your app immediately without needing to worry about configuring build tools like Webpack, Babel, or ESLint.
```

11. What is Tree Shaking?
```
Tree shaking is a technique used in JavaScript bundlers (like Webpack, Rollup, and esbuild) to eliminate unused code from the final bundle, reducing the size of the output file and improving performance.
```
    
13. Difference b/w dependency and devDependency
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

14. What is npx and npm?
15. Difference b/w package .json and package-lock .json
16. Difference between console .log(<HeaderComponent/>) and console .log(HeaderComponent()); 

17. What is React.Fragment?
18. What is the purpose of dependency array in useEffect? What is the difference when it is used and when it is not used?
19. What if 2 components are given will the state change in one component will effect the other component’s state (child)?
20. What is the use of return in useEffect ?
21. Difference b/w client-side routing and server-side routing?

22. Explain the concept of code splitting and its benefits in React.
23. How does React handle routing and navigation?
24. What are higher-order components (HOC) in React?
25. What are controlled and uncontrolled components?
26. Explain the concept of reconciliation in React.

--- 

1. How does React Fiber improve performance in React applications?
2. Explain the concept of code splitting and its benefits in React.
3. What are the key differences between server-side rendering (SSR) and client-side rendering (CSR) in React?
4. Describe the concept of render props and its use cases in React.
5. How can you optimize the rendering of large lists in React?

6. Explain the concept of memoization and its importance in React.
7. What is the purpose of the useEffect() hook in React and how does it work?
8. How does React handle routing and navigation?
9. How can you handle asynchronous operations in React using async/await?
10. Explain the concept of the Context API in React and its benefits.

11. What is the role of higher-order components (HOC) in React and how can you implement them?
12. Describe the concept of controlled and uncontrolled components in React forms.
13. How does React handle state management in large-scale applications?
14. Explain the concept of suspense in React and its use cases.
15. What are the different ways to handle side effects in React using hooks?

16. Explain the concept of reconciliation in React.
17. How can you prevent unnecessary re-renders in React?
18. What are the different ways to style components in React?
19. What are the key considerations when implementing a scalable React application?
20. Describe the concept of reusability, modularity, testablity in React components.
