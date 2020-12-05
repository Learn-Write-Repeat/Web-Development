## What’s React Component?
  - A React Component is one of the core building blocks of React Apps. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier.
  - from: https://www.geeksforgeeks.org/reactjs/ 
  - In React we mainly have two types of components: Functional Components and Class Components.
  
<p align="center">
<img src="https://miro.medium.com/max/600/1*3bRc_w8bvE7zbuxISQUukQ.png" width="500px"  ></p>
 
 ### Types of React Components Discussed
 1. *Functional Components*
    - In simple words, Functional components are javascript functions. By writing a javascript function, we can create a functional component in React Apps.Functional components do not require data from other components. Functional components are usually used to display information. They are easy to read, debug, and test.
    - Functions that return JSX. Can do more stuff with React Hooks.
 2. *Class Components*
    - The Class Components are similar to the functional component but has some additional features that makes class component a little more complex than the functional components.Class components are able to do everything a functional component do but more.
    - Classes that can manipulate state, props, and lifecycle methods.
 3. *Pure Components*
    - Pure components are like better functional components. Components that only return a render function are optimal for pure components to shine.Pure components are primarily used to provide optimizations. They are the simplest and fastest components we can write. They do not depend or modify the state of variables outside its scope.
    - Functional components that performs shouldComponentUpdate() automatically. Re-renders only if state or props is different from previous state or props.
 4. *Higher-Order Components*
    - Higher-order components(HOC) is an advanced technique in React for reusing component logic.Take a Component as input and returns the component as output but with extended functionalities.This is a function that returns one or multiple components, depending on the number of elements in the array, also known as HOC.
    - Functions that return one or multiple components, depending on array data.
