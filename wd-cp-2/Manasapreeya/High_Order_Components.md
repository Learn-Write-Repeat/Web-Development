# High Order Components

## What is it :question:

- Components are the primary unit of code reuse in React. 
- A Higher-order Component or **HOC** is an advanced technique in React for reusing component logic.
- They are a pattern that emerges from React’s compositional nature. 
- These functions are pure, that is they are receiving data and returning values according to that data. If the data changes, higher order functions are re-run with different data input.

## Why should we use HOC :question:

 There will be many situations where many components will need a same functionality. In such cases,we should be able to **Reuse** the same code and not **Duplicate** the same.
  For Example: If 10 different components requires a same functionality, We'd instead be repeating the same code over and over again and not duplicating it ,if it weren't for HOC.

## Structure of HOC:

|It is a component. |It takes another component as an argument. |Then, it returns a new component. |The component it returns can render the original component that was passed to it. |
|---------|---------|----------|----------|

## What it Does :question:

- A Higher Order Component takes a component (WrappedComponent) and returns another component inside of it.
- With this technique, whenever we need to reuse a particular component’s logic for something, we can create a HOC out of that component and use it wherever we like.
- It reduces the work of Duplicating the code and promotes Code Reusability.

##### Contributed By

Manasa preeya S

:email: manasapreeya01@gmail.com

:wave: GitHub: Manasapreeya  Instagram: @@@manasa___1
