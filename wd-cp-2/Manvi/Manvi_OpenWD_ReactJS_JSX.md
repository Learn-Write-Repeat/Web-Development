# Introduction to JSX :computer:

JSX stands for Javascript XML. It is a syntax extension to Javascript. It allows us to write HTML element in React in a very easy and efficient way to describe what the UI should look like.

## Using JSX

JSX looks like a regular HTML in most cases.

```
import React from 'react';

class Example extends React.Component {
   render() {
      return (
         <div>
           <h2> Hey there !! </h2>
           <p> Welcome to our website </p>
           <button> Know More!! </button>
         </div>
      );
   }
}
export default Example;

```

JSX is just like HTML, a template language but it has full power of Javascript. For Example: In HTML we cannot bind event to any element directly, i.e. , we'll have to select any element in Javascript and then add event listener to that element. 

####  To add event listener to a button element in HTML :

``` 
document.getElementsByTagName("button").addEventListener("click",() => {
   console.log("HIII");
  })
```

But, in JSX events can be directly attached to elements.

####  To add event listener to a button element in JSX :

```

 <button onClick={ () => { console.log("HIII} }> Click </button>
 
```

## Why to use JSX in React? :information_desk_person:

  JSX makes it easy to write HTML elements in React and place them in the DOM without using createElement(). 


#### Consider the example given below:

This is a simple example in which I've just created a div element which contains a h1 element.

### Code 1 - With JSX :thumbsup:
  
  ```
  
  import React from "react"

      class Example extends React.Component{

         render(){
            return (
               <div className="box">
                <h1 className="heading">Hello World!!</h1>
               </div>
            );
         }
         
} 

export default Example;

```

The above code can be achieved without using JSX. 

### Code 2 - Without JSX :thumbsdown:

```

import React from "react"

class Example extends React.Component{
   
 render(){
  return (
   React.createElement('div', { className : "box"}, React.createElement('h1', { className : "heading"}, "Hello World!!")) 
  )
 }

} 

export default Example;

```
##### Code 1 and Code 2 will give the same result.

You can clearly see how difficult it is to create even a simple h1 element without JSX ( i.e., using createElement() ). That's why JSX is used to create elements in React.

## Some more Advantages of JSX : :snowflake:

Apart from making the syntax easier, following are some more pros of using JSX :

1. JSX is fast as it performs optimization while compiling code to JavaScript.
2. JSX is also type-safe and most of the errors can be caught during compilation.
 
## Naming Convention in JSX :book:

Since JSX is closer to JavaScript than to HTML, React uses camelCase property naming convention.

For example, class becomes className in JSX, and tabindex becomes tabIndex.

## Rules of using JSX :pencil:  

##### 1. If we need to return more than one element from render() function then we must wrap it in one parent container. 

 Example : In the example given :point_down: h1 and p is wrapped in one div container.

```
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Welcome!! </h1>
            <p>How are you!!!</p>
         </div>
      );
   }
}
export default App;

```

##### 2. We can use Javascript expressions inside JSX. We just have to wrap it with curly brackets {}.

 Example : In the example given :point_down: count is an javascript expression and so to use it in JSX we must wrap it in {}.


```
import React from 'react';

class App extends React.Component {
   render() {
       let count = "HELLO WORLD";
      return (
         <div>
            <h1> {count}</h1>
         </div>
      );
   }
}
export default App;

```

##### 3. We can use inline style with JSX in React. To use inline style in JSX we need to create an object containing all the styles that has to be applied on an element and then we can embed that to the element in curly brackets just like a javascript expression.

 Example : In the example given :point_down: inlineStyle is an object containing all the styles.


```
import React from 'react';

class App extends React.Component {
   render() {
      let inlineStyle = {
         color : "#db3b61",
         fontSize : "25 px"
      }
      return (
         <div>
            <h2 style = {inlineStyle}> Welcome  </h2>
         </div>
      );
   }
}
export default App;
```

##### 4. In JSX, comments has to be wrapped within curly brackets {}.

 Example : In the example given :point_down: both single and multi line comments has been shown.

```
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Introduction to Web Development</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
            
            {// Single Line Comment...}
            {/*Multi Line Comment...*/}
         </div>
      );
   }
}
export default App;
```

Congrats :sparkler: You have completed this topic.


## Author 
### Manvi
[Github](https://gist.github.com/manvi-123894) 
[LinkedIn](https://www.linkedin.com/in/manvi-3b838b1b5/)

 


