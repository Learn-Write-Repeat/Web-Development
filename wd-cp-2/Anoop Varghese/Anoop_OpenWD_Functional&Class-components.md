#  Intro to Functional Component and Class Components

Components are the building blocks of any React app. Components allow us split the UI into independent and reusable pieces.

*A component is combination of*

1.  Template using HTML

2.  User Interactivity using JS

3.  Applying Styles using CSS

A typical React app will have many components like header component, navbar component, footer component and content component. Conceptually a component is a JavaScript class or function that accepts inputs which are properties(props) and returns a React element that describes how a section of the User Interface should appear. A component can be created as Function Component or Class Component.

![Image](https://i.ytimg.com/vi/_sApRiMqLVg/maxresdefault.jpg)

## Functional Components
Functional components are some of the more common components that will come across while working in React. These are simply JavaScript functions. We can create a functional component to React by writing a JavaScript function. These functions may or may not receive data as parameters. In the functional Components, the return value is the JSX code to render to the DOM tree.

**Functional components**  lack a significant amount of features as compared to  **class-based components**. The gap is made up with the help of a special ReactJS concept called  **“hooks”**. Hooks are special functions that allow ReactJS features to be used in  **functional components**.

![Image](https://cms-assets.tutsplus.com/uploads/users/1795/posts/29541/image/Stateful-vs-Stateless-Component-Tutorial-Component-with-state.jpg)


Functional components do not have access to lifecycle functions like class-based components do since lifecycle functions need to be defined within the boundaries of a class. If lifecycle functions need to be used with functional components, a special React hook called useEffect() needs to be used. It is worth noting that **useEffect()** isn’t an exact duplicate of the lifecycle functions – it works and behaves in a slightly different manner.
-   There is no render method used in functional components.
-   These are mainly responsible for UI and are typically presentational only (For example, a Button component).
-   Functional components can accept and use props.
-   Functional components should be favored if you do not need to make use of React state.

## Class Components

**class-based components** are the bread and butter of most modern web apps built in ReactJS. These components are simple classes (made up of multiple functions that add functionality to the application). All **class-based components** are child classes for the Component class of ReactJS.

**Class-based components** have access to the lifecycle functions like **componentWillMount()**, **componentDidMount()**, **componentWillReceiveProps()**, **componentWillUpdate()**, **shouldComponentUpdate()**,**render()** and **componentWillUnmount()**;. These lifecycle functions are called at different stages of the lifecycle and are used for a variety of purposes like changing the state or doing some work (like fetching data from an external API). They are also referred to as **lifecycle hooks**.

![Image](https://cms-assets.tutsplus.com/uploads/users/1795/posts/29541/image/Stateful-vs-Stateless-Component-Tutorial-Class-Component.jpg)


-   Class components make use of ES6 class and extend the  `Component`  class in React.
-   Sometimes called “smart” or “stateful” components as they tend to implement logic and state.
-   React lifecycle methods can be used inside class components (for example,  `componentDidMount`).
-   You pass props down to class components and access them with  `this.props`


**Author:**
Anoop Varghese
Website:  [www.anoopv.me](http://www.anoopv.me)
LinkedIn:  [Connect](https://www.linkedin.com/in/anoopv1234/)
