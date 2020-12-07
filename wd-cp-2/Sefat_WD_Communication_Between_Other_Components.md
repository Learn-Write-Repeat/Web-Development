# Communication Between Other Components
According to [**Wikipedia**](https://en.wikipedia.org/wiki/React_(web_framework))
> _**ReactJS is an open source, front-end, JavaScript-library, not a development framework in JavaScript. It is maintained by facebook and individual developers and companies. It’s mainly used for single-page or mobile application development.**_ 

## Components:

Components are independent and reusable code. Their proposals are same as JavaScript functions but they work separately. In ReactJs they return html function via a render function. 
There are two types of components- Class components and Functional components.

**Functional Components:**

It is a way to write components that only contain render method and just a simple JavaScript function, don’t have own state.
```html
function Welcome(props) {  
  return <h1>Welcome {props.name}</h1>;  
}  
```
This example says that we have called function named  ***Welcome***  and this function has a valid React component, ***props***(properties) that contains object argument data .If we run the code and inside ***{props.name}*** we can put anything, e.g.  Sifa, it will show “Welcome Sifa”. 

**Class Components:**

Class components are more complex than functional components. Because here you will have to create render function. The advantage of this component is more and more, you can pass data from one class to another class, and can manage local state. Class component is also defined by stateful component.
```html
class Welcome extends React.Component {
  render() {
    return (
      <div>Welcome Sifa.</div>  
    );  
  }  
  }
  ```
To know more about [Components and Props](https://reactjs.org/docs/components-and-props.html)

## Strategies for communicating between React components:

We will discuss here about 8 strategies which all connected with each other. 

**1. Props:**

Props are the root of transferring data between components. Without props React is nothing. So we should be gather knowledge about props. As I mentioned it before in functional components.

**2. Instance Methods:**

By using instance method we can communicate child component by parent using ***refs***
 
**3. Callback functions:**

Callback functions work to send data from parent component to child component by props.

**4. Child to Parent:**

To send data from child to parent, we have to use props and this function is called from parent component to child component.
![image](https://www.javascriptstuff.com/static/child-to-parent-a34180d7d83bb61f4f1fab6eecc620a6-8aa1a.png)

**5. Parent to Child:**

This is the easiest communication; we can pass props down to child components.
![image](https://cdn-media-1.freecodecamp.org/images/zdcDnVK0Okw3GBfFb8vzE3Ofi0uKUpD5KRRN)

Here EventEmitter is one of the most popular library in observer pattern.

**6. Observer Pattern:**

Parent to child, child to parent or child to child relationship is required to use this strategy.
This pattern is used for software design in which an object can send messages to multiple other objects.
![image](https://miro.medium.com/max/700/1*7mdN2oN6S_43LC8MPmswzA.png)

**7. Event Bubbling:**

This is the process of that JavaScript looks for the DOM element at which event happened.  It is divided into 3 phases: capturing phase, targeting phase, and bubbling phase.

**8. Context:**

Context send data to an entire subtree as- child of a child, child of a child of a child, so on.

## Communication of Components:

![image](https://cdn-images-1.medium.com/max/1600/1*A8ds6m4es9z3ZRWwbb2NXQ.png)

Mainly communication between components means:
1. Parent → Child: properties, methods
2. Child → Parent: events, callbacks
3. Child → Child: via parent, domain store, UI store, or global event bus.




## Sefat Siddiquea

<a href="https://www.linkedin.com/in/sefat-siddiquea-9394721a9/"> <img align="left" alt="07Satyam | LinkedIn" width="28px"
 src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
</a> 
<a href="https://github.com/sifa123"> <img align="left" alt="GitHub" width="28px"
src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"/>
</a>
<a href="https://twitter.com/Sifa_bd">
<img align="left" alt="07Satyam | Twitter" width="28px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />
</a>
<a href="https://sefatsiddiqueasifa.wordpress.com/">
<img align="left" alt="07Satyam | Wordpress" width="28px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/wordpress.svg" />
</a>
