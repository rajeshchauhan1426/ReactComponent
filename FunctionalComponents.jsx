// In React, functional components are a way to create and manage the user interface of a web application. Functional components are also known as "stateless" or "dumb" components because they are primarily responsible for rendering UI based on the input props they receive. They don't have their own internal state or lifecycle methods like class components.

// Here's how you can define a functional component in React:

// ```jsx
// import React from 'react';

// function MyFunctionalComponent(props) {
//   // You can use props to access data passed from parent components

//   return (
//     <div>
//       <h1>Hello, {props.name}!</h1>
//       <p>{props.description}</p>
//     </div>
//   );
// }

// export default MyFunctionalComponent;
// ```

// In this example, `MyFunctionalComponent` is a simple functional component that takes `name` and `description` as props and renders them in the JSX. Functional components are primarily focused on rendering UI elements based on the props they receive.

// With the introduction of React Hooks, functional components can also manage local component state and side effects using hooks like `useState`, `useEffect`, and others. This allows functional components to handle more complex logic and behavior while still being more concise and easier to read than class components.

// Here's an example of a functional component using React Hooks:

// ```jsx
// import React, { useState, useEffect } from 'react';

// function MyFunctionalComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default MyFunctionalComponent;
// ```

// In this example, `useState` is used to manage the `count` state, and `useEffect` is used to update the document title whenever the `count` state changes. This demonstrates how functional components can handle both rendering and state management.