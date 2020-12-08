# Intro to Functional Component and Class Components

Components helps you to split the UI into independent, reusable pieces, and allow us to work on different components one at a time. In simple words, Components are like javascript functions which accepts arguments(props) and return React elements which describes what the UI of the web page would look like.

## Types of Components in React

<img src="https://miro.medium.com/max/587/1*l4Qdxq36rdpOzwuHSlh8qA.png" width="100%" >

### 1. Functional Components
### 2. Class Components

## Functional Components 

Functional Component is just like a simple javascript function which accepts an argument as props and return React element.

```
function Example(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Earlier Functional Components was also called as stateless components as there was no way to set state of the component in functional component. But, this changed with the React 16.8 Hooks update. We can now use state and other React features without writing a class. 

**NOTE: We'll see an example of a counter (where we'll need to use state) with both class and functional component in the code section. So, do check out the code section for better understanding.**

### Pros of using Functional Components

1. Easy to read.

2. You can do things with less code.


## Class Components

Class component is just like javascript classes containing multiple functions to add different functionality to the application. You need to extend class component from React.Component and you must include a render function in class components which return the JSX which needs to be rendered on the web page. There is a constructor function in class component which accepts **props** as argument. State of the component is also set in this constructor function as shown below in the code.

```
class Example extends React.Component {
   
  constructor(props){
     super(props);
     this.state = {
       message : "Welcome"
       }
  }

  render() {
     return
     ( 
        <div>
           <h2> Hello World!! </h2>;
           <h1> {this.state.message} </h1>;
        </div>   
     );     
  }
}
```

## Differences in Class Component and Functional Component

<img src="https://i.ytimg.com/vi/_sApRiMqLVg/maxresdefault.jpg" width="100%" >

<table>
  <td> <h1> Functional Components </h1 >    </td>
  <td> <h1> Class Components </h1 >     </td>
  <tr> 
    <td>It is just a plain JavaScript function as it accepts props as an argument and returns a React element. </td>
    <td> It requires you to extend from React.Component. You must create a render function which return the JSX which needs to be rendered on the web page. .</td>
  </tr>
  <tr> 
    <td> It doesn't contain any render method.</td>
    <td> It must contain the render() method.</td>
  </tr>
  <tr> 
    <td> You can use state in functional component with React Hooks (example :- useState, useEffect etc.). </td>
    <td>State is defined in the constructor method in class component. </td>
  </tr>
  <tr>
    <td> You cannot use React lifecycle methods in functional components.</td>
    <td> You can use React lifecycle methods in functional components.</td>
  </tr>
</table>

Congrats :sparkler: You have completed this topic.


## Author 
### Manvi
[Github](https://gist.github.com/manvi-123894) 
[LinkedIn](https://www.linkedin.com/in/manvi-3b838b1b5/)
