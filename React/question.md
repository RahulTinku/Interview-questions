## What is Props Drilling in React? How can you avoid that?

Props drilling in React refers to the process of passing props down through multiple levels of nested components. It happens when a component needs to pass data or functions to its child component, and then that child component needs to pass it further down to its own child component, and so on.

As the component hierarchy grows deeper, this can lead to passing props through several intermediate components, making the code less maintainable and potentially causing performance issues.

To avoid props drilling, you can use one of the following techniques:

0. React Context API: The Context API allows you to create a context that holds data or functions and make it available to all child components without explicitly passing it down as props. Components can access the context data directly from the provider.

1. Using State Management Library like Redux: Redux is a state management library that provides a centralized store accessible from any component. It allows components to retrieve and update data without the need to pass props through the entire component tree.

## Question: How can you optimize React performance using code splitting?

👉 Answer: Code splitting involves breaking your application into smaller chunks (bundling) and loading them on demand. React.lazy and Suspense are used to achieve code splitting, which can significantly reduce the initial loading time of your application.

Code example using React.lazy and Suspense: 

import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

const App = () => {
 return (
  <Suspense fallback={<div>Loading...</div>}>
   <LazyComponent />
  </Suspense>
 );
};

--

## How can you handle side effects in React using useEffect?

👉 Answer: The useEffect hook allows you to perform side effects in functional components. You can use it to handle tasks like data fetching, subscriptions, or manually changing the DOM.

Code example:
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
 const [data, setData] = useState([]);

 useEffect(() => {
  // Fetch data from an API
  fetch('https://lnkd.in/d5PWjfXF')
   .then((response) => response.json())
   .then((data) => setData(data));
 }, []);

 return (
  // Display data here
 );
};

--
## Question: How can you handle form data in React components?

👉 Answer: You can manage form data using controlled components, where form elements are bound to state and updated through event handlers.

Code example of a controlled input:
import React, { useState } from 'react';

const MyForm = () => {
 const [inputValue, setInputValue] = useState('');

 const handleChange = (event) => {
  setInputValue(event.target.value);
 };

 const handleSubmit = (event) => {
  event.preventDefault();
  // Handle form submission with 'inputValue'
 };

 return (
  <form onSubmit={handleSubmit}>
   <input type="text" value={inputValue} onChange={handleChange} />
   <button type="submit">Submit</button>
  </form>
 );
};

## Question: What is React's Context API, and how can you use it to manage global state?
👉 Answer: React's Context API provides a way to pass data through the component tree without having to pass props manually at every level. It enables efficient global state management in applications, allowing components to access and update shared data.

Code Example:

// Creating a context
const MyContext = React.createContext();

// Using the context provider
const MyProvider = ({ children }) => {
 const [state, setState] = React.useState(initialState);
 return (
  <MyContext.Provider value={{ state, setState }}>
   {children}
  </MyContext.Provider>
 );
};

// Consuming the context in a component
const MyComponent = () => {
 const { state, setState } = React.useContext(MyContext);
 // Use state and setState here
};

--

## Question: What are React Hooks, and how do they improve functional component functionality?

👉 Answer: React Hooks are functions that enable functional components to use state and other React features without writing a class. They make it easier to reuse logic and manage component state in functional components.

import React, { useState } from 'react';

const Counter = () => {
 const [count, setCount] = useState(0);

 const handleIncrement = () => {
  setCount(count + 1);
 };

 return (
  <div>
   <p>Count: {count}</p>
   <button onClick={handleIncrement}>Increment</button>
  </div>
 );
};

--

## Question : What are React's controlled and uncontrolled components, and when should you use each?

👉 Answer: Controlled components have their state controlled by React through props and react to user input via event handlers. Uncontrolled components store their state internally in the DOM and are controlled by the DOM itself.

Code example of a controlled component:

import React, { useState } from 'react';

const MyInput = () => {
 const [value, setValue] = useState('');

 const handleChange = (event) => {
  setValue(event.target.value);
 };

 return (
  <input type="text" value={value} onChange={handleChange} />
 );
};



## Question: How does React's Virtual DOM work, and what are its advantages over the real DOM?

👉 Answer: React's Virtual DOM is a lightweight copy of the actual DOM. When state changes, React creates a new Virtual DOM representation and compares it with the previous one. Only the differences are updated in the real DOM, reducing the need for expensive DOM manipulations.

--

## Question: Explain the role of keys in React lists and why they are essential.

👉 Answer: Keys help React identify each list item uniquely and efficiently update and re-render components when the list changes. They improve performance by minimizing re-renders and avoiding issues like incorrect component recycling.

Code Example:

// Without keys
const itemsWithoutKeys = items. map((item) => <li>{item}</li>);

// With unique ids as keys
const itemsWithKeys = items. map((item) => <li key={items.id}>{item}</li>);

--

## Question: Explain the concept of higher-order components (HOCs) in React.

👉 Answer: Higher-order components are functions that take a component as an input and return an enhanced component with additional props or functionality. They are commonly used for code reuse, logic abstraction, and cross-cutting concerns.

Code example:

const withLogger = (WrappedComponent) => {
 const EnhancedComponent = (props) => {
  console.log('Component props:', props);
  return <WrappedComponent {...props} />;
 };

 return EnhancedComponent;
};

// Usage
const MyComponent = (props) => {
 // Component logic here
};

export default withLogger(MyComponent);

--

## Question: What is the significance of React Fragments, and when should you use them?

👉 Answer: React Fragments allow you to group multiple components without introducing an additional parent element in the DOM. They are useful when you need to return multiple elements from a component's render method.

Code example:

import React, { Fragment } from 'react';

const MyComponent = () => {
 return (
  <Fragment>
   <h1>Title</h1>
   <p>Paragraph 1</p>
   <p>Paragraph 2</p>
  </Fragment>
 );
};


## Q1: What are React hooks? Explain the difference between useState and useEffect.

A1: React hooks are functions that allow you to use state and lifecycle features in functional components. useState is used to manage state, while useEffect is used to handle side effects like fetching data or subscribing to events.

💡 Code Example:
```
const [count, setCount] = useState(0);

useEffect(() => {
 document.title = `Count: ${count}`;
}, [count]);
```
## Q2: What is the Context API in React? How can it be used to manage global state?

A2: Context API provides a way to share data between components without passing it through props. It's useful for managing global state. You create a context using createContext and provide it at a higher level. Consumers can access the context using useContext.

🌍 Code Example:
```
const ThemeContext = createContext();

function App() {
 return (
  <ThemeContext.Provider value="dark">
   <Component />
  </ThemeContext.Provider>
 );
}

function Component() {
 const theme = useContext(ThemeContext);
 // Use theme value here
}
```

# Q3: What are React render props? How do they enable component composition and code reusability?

A3: Render props is a pattern where a component accepts a function as a prop and calls it to render content. It enables component composition and code reusability by allowing components to share their internal state or behavior with other components.

🔄 Code Example:
`
function MouseTracker({ render }) {
 const [position, setPosition] = useState({ x: 0, y: 0 });

 useEffect(() => {
  const handleMouseMove = (event) => {
   setPosition({ x: event.clientX, y: event.clientY });
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
   window.removeEventListener('mousemove', handleMouseMove);
  };
 }, []);

 return render(position);
}
`
## Q4: How can you optimize performance in a React application? Discuss techniques like memoization, code splitting, and lazy loading.

A4: Performance optimization techniques include memoization with useMemo and useCallback to avoid unnecessary recalculations, code splitting to split the bundle into smaller chunks, and lazy loading to load components or resources only when needed.

⚡️ Code Example:
`
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

const handleClick = useCallback(() => {
 // Handle click event
}, []);
`
