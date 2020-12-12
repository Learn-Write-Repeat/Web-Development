# Communication Between Other Components

Components that help to communication:

### Props:

By using props, we can connect child to parent.
```html
import React, { Component } from 'react';
 class App extends Component {
  render() {
    const x = 'My name is Sifa';
 return (
      <div>
        {isShow ? <X x={x} /> : null}
  <Button />
      </div>
    );
  }
}
 class Button extends Component {
  constructor(props) {
    super(props);
  this.state = {
      isShow: true,
    };
  }
  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };
 render() {
    return (
      <button onClick={this.toggleShow} type="button">
        Toggle Show
      </button>
    );
  }
}
 const X = ({ x }) => <h1>{x}</h1>;
 export default App;
 ```
The App component needs the isShow property though for the conditional rendering of the Greeting component, and now we have to make the component accessible.

```html
import React, { Component } from 'react';
 class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
      isShow: true,
    };
  }
  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };
  render() {
    const x = 'My name is Sifa';
   return (
      <div>
        {this.state.isShow ? <X x={x} /> : null}
  <Button onClick={this.toggleShow} />
      </div>
    );
  }}
const Button = ({ onClick }) => (
  <button onClick={onClick} type="button">
    Toggle Show
  </button>
);
 const X = ({ x }) => <h1>{x}</h1>;
 export default App;
```



```html
import React, { Component } from 'react';
 class App extends Component {
  constructor(props) {
    super(props);
 this.state = {
      isShow: true,
    };
  }
 toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow })); };
 render() {
    const x = 'Welcome to React';
   return (
      <div>
        <X x={x} isShow={this.state.isShow} />
  <Button onClick={this.toggleShow} />
      </div>
    );
  }
}
const Button = ({ onClick }) => (
  <button onClick={onClick} type="button">
    Toggle Show
  </button>
);
 const X = ({ x, isShow }) =>
  isShow ? <h1>{x}</h1> : null;
 export default App;
 ```
 
We can see that by using ***render()***, can easily pass the ***const X*** value in ***isShow*** method, that easily finally can print the output.

### Instance Method:

At first we will call class method in child component.
```html
class TheChild extends React.Component {
  myX() {
    return "Hi everyone";
  }
}
```

And now add reference method to call the child in parent component e.g. ref={foo => { this.foo = foo;}}

Finally call the child from parent e.g. this.foo.myX()

```html
class TheParent extends React.Component {
  render() {
    return (
      <TheChild
        ref={foo => {
          this.foo = foo;
        }}
      />
    );
  }
componentDidMount() {
var y = this.foo.myX();
  }
}
```

### Callback Functions:

As we know it passes function from parent to child like props
```html
<MyChild myX={this.handleChildX} />
Child component will call that
this.props.myX();
Finally child will declare the function in its props
MyChild.propTypes = {
  myX: React.PropTypes.x
};
```

### Child to Parent:

```html
import React from 'react';
class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };

        this.outputEvent = this.outputEvent.bind(this);
    }
    outputEvent(event) {
        // event comes from the Child
        this.setState({ count: this.state.count++ });
    }

    render() {
        const variable = 10;
        return (
            <div>
                Count: { this.state.count }
                <Child clickHandler={this.outputEvent} />
            </div>
        );
    }
}
class Child extends React.Component {
    render() {
        return (
            <button onClick={this.props.clickHandler}>
                Add One More
            </button>
        );
    }
}
export default Parent;
```

The method of ***outputEvent*** that is from parent and invoked by ***onClick***, from child’s button.

### Parent to Child:

```html
import React from 'react';
class Parent extends React.Component {
    render() {
        const variable = 5;
        return (
            <div>
                <Child messages="Hi everyone. I am Sefat Siddiquea." />
                <Child messages={variable} />
            </div>
        );
    }
}
class Child extends React.Component {
    render() {
  return <h1>{this.props.messages}</h1>
    }
}
export default Parent;
```

In this example, ***messages*** are the prop that we pass down data to child component. We have a component parent that renders another one child and passes to it some props (messages). 

### Observer Pattern:

4 libraries that implement the Observer Pattern. The differences between them are subtle - ***EventEmitter*** is the most popular.

**PubSubJS:** "a topic-based publish/subscribe library written in JavaScript."

**EventEmitter:** "Evented JavaScript for the browser." It's actually an implementation of a library that already exists as part of nodejs core, but for the browser.

**MicroEvent.js:** "event emitter microlibrary - 20lines - for node and browser" mobx: "Simple, scalable state management."

### Event Bubbling:

Event Bubbling works like callback function and send data from child component to parent component. 

```html
class ParentComponent extends React.Component {
  render() {
    return (
      <div onKeyUp={this.handleKeyUp}>
        // Any number of child components can be added here.
      </div>
    );
  }
handleKeyUp = (event) => {
    // This function will be called for the 'onkeyup'
    // event in any <input/> fields rendered by any of
    // my child components.
  }}
  ```
  
This example shows that a parent component that will catch the ***onKeyUp*** event in all of its child components.

### Context:

Context is just like props, but it sends data to an entire subtree as- child of a child, child of a child of a child, so on. It can be paired with callback function for passing data. [Check](https://reactjs.org/docs/context.html) out here for more details. 




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

