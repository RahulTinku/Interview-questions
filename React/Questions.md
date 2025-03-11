##  What is the purpose of dependency array in useEffect? What is the difference when it is used and when it is not used?
In React, the dependency array in useEffect determines when the effect should run.

🚀 Difference Between Various Dependency Array Usages

1️⃣ No Dependency Array → Runs on Every Rende
- 🔹 The effect runs every time the component renders or re-renders.
- 🔹 Can cause performance issues if expensive logic is inside.

2️⃣ Empty Dependency Array [] → Runs Only Once (on Mount)
- 🔹 Runs only on the initial render (like componentDidMount in class components).
- 🔹 Useful for fetching data, setting up event listeners, or initializing state.

3️⃣ With Dependencies [state, prop] → Runs When Dependencies Change
- 🔹 The effect runs only when count changes.
- 🔹 Useful for handling side effects based on state/prop changes (e.g., fetching new data when a user ID changes).

#### 🚨 When to Use Dependency Arrays?

| **Scenario** | **Dependency Array** | **Effect Runs When** |
|-------------|------------------|----------------|
| Fetch data on mount | `[]` | Only on initial render |
| Update when prop/state changes | `[someState]` | When `someState` changes |
| Run effect on every render | _(no array)_ | On every re-render |

## What if 2 components are given will the state change in one component will effect the other component’s state (child)?

If two components are given, whether a state change in one component affects the other (child) depends on how the state is managed and shared between them.
1. Independent State (No Effect)
  If each component manages its own state separately using useState, then changing the state in one component will not affect the other.
2. State Lifted to Parent (Effect Occurs)
  If the state is managed in the parent component and passed as a prop to the child, then changing the state in one child can affect the other child (if they share the same state).
3. Context API (Global State Sharing)
  If multiple components need access to the same state without explicit prop drilling, React Context can be used.
     
## What is the use of return in useEffect ?
The `return` statement within React's `useEffect` hook defines a cleanup function, which is executed before a component unmounts or before the effect is re-run due to dependency changes, serving to prevent memory leaks by canceling subscriptions, clearing timers, aborting network requests, and releasing other resources; this ensures that side effects are properly managed and don't persist beyond the component's lifecycle.

## Difference b/w client-side routing and server-side routing?
The fundamental difference between client-side routing and server-side routing lies in where the decision of which content to display is made and executed:

Server-Side Routing:
- In server-side routing, every time a user navigates to a new page or URL, the browser sends a request to the server.   
- The server then processes the request, determines which HTML page or content to send back, and sends the fully rendered page to the client.
- This means a full page reload occurs with each navigation.
- Historically, this was the standard approach.
- SEO is generally better out of the box, as content is readily available to search engine crawlers.

Client-Side Routing:
- With client-side routing, the initial page load fetches a single HTML page along with all the necessary JavaScript, CSS, and data.
- When the user navigates to different "pages" within the application, JavaScript running in the browser intercepts these navigation requests.   
- The JavaScript then dynamically updates the content of the page without requiring a full page reload.   
- This provides a smoother, more responsive user experience, as transitions are faster.   
- Client-side routing is common in single-page applications (SPAs) built with frameworks like React, Angular, and Vue.js.   
- SEO can be more complex, requiring server side rendering or pre-rendering to be fully effective.

## Explain the concept of code splitting and its benefits in React.

Code splitting in React is a technique that divides your application's code into smaller, manageable chunks. Instead of loading the entire application bundle at once, only the necessary code for the initially requested page or component is loaded. Subsequent components or pages are loaded on demand, as the user navigates or interacts with the application.   

This is achieved using dynamic imports, primarily with React's lazy and Suspense components. lazy allows you to load components asynchronously, while Suspense provides a fallback UI (like a loading indicator) while the component is being fetched.

Benefits:

- Improved Initial Load Time: By loading only essential code initially, the browser downloads less data, resulting in faster page loads and a better user experience.   
- Reduced Bundle Size: Smaller bundle sizes translate to faster download times, especially for users with slower internet connections.   
- Enhanced Performance: Code splitting reduces the main thread's workload, leading to smoother interactions and improved overall application performance. It prevents loading unneeded code, saving resources.   


## How does React handle routing and navigation?
React routing, primarily managed by react-router-dom, is crucial for building Single-Page Applications (SPAs). SPAs avoid full page reloads, enhancing user experience through dynamic content updates.

react-router-dom facilitates this by mapping URL paths to React components. The BrowserRouter component wraps the application, enabling URL management via the HTML5 history API. Routes acts as a container for individual Route definitions, each specifying a path and the corresponding element (component) to render.

Navigation within the application is achieved through Link and NavLink components, preventing full page reloads. NavLink provides styling for active links. Programmatic navigation, such as after form submissions, is handled by the useNavigate hook.

Dynamic routing, using route parameters (e.g., /users/:id), allows for flexible URL matching. These parameters can be accessed within the rendered components.

In summary, React Router intercepts URL changes, matches them against defined routes, and renders the appropriate components, enabling smooth and efficient navigation within React applications.

## What are higher-order components (HOC) in React?
A Higher-Order Component (HOC) is an advanced pattern in React that allows you to reuse component logic. It is a function that takes a component as an argument and returns a new component with added functionality.

Why Use HOCs?
- Code Reusability: Avoid duplicating logic across multiple components.
- Separation of Concerns: Keep components clean and focused on UI.
- Enhancing Components: Add additional behavior (e.g., authentication, data fetching, logging).

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
