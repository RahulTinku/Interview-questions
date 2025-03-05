##  What is the purpose of dependency array in useEffect? What is the difference when it is used and when it is not used?
In React, the dependency array in useEffect determines when the effect should run.

🚀 Difference Between Various Dependency Array Usages

1️⃣ No Dependency Array → Runs on Every Rende
🔹 The effect runs every time the component renders or re-renders.
🔹 Can cause performance issues if expensive logic is inside.

2️⃣ Empty Dependency Array [] → Runs Only Once (on Mount)
🔹 Runs only on the initial render (like componentDidMount in class components).
🔹 Useful for fetching data, setting up event listeners, or initializing state.

3️⃣ With Dependencies [state, prop] → Runs When Dependencies Change
🔹 The effect runs only when count changes.
🔹 Useful for handling side effects based on state/prop changes (e.g., fetching new data when a user ID changes).

#### 🚨 When to Use Dependency Arrays?

| **Scenario** | **Dependency Array** | **Effect Runs When** |
|-------------|------------------|----------------|
| Fetch data on mount | `[]` | Only on initial render |
| Update when prop/state changes | `[someState]` | When `someState` changes |
| Run effect on every render | _(no array)_ | On every re-render |

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
