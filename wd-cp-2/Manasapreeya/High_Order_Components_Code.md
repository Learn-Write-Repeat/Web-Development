# High Order Components

##### A Higher-order component is a function that takes a component and returns a new component. It can be created using, 
`const EnhancedComponent = higherOrderComponent(WrappedComponent);`

Consider a case where we are required to make a same functionality for more than 1 components in the program, in such cases we can use HOC. In this example , we can create the same for 2 different components called **Hover** and **Click**
1. This is the code for App.js

```
import React, {Component} from 'react'
import Click from './components/counter'
import Hover from './components/hover'

class App extends Components {
	render() {
		return (
			<div className = "App">
			<Click />
			<Hover />
			</div>
			)
		}
	}
	export default App	
  ```
  
  2. Code for Hover.js
  
  ```
  import React, {Component} from 'react'
import UpdatedComponent from './withHOC'

class Hover extends Component {
	render() {
		const { count, incrementCount } = this.props
		return (
			<h1 onMouseOver = {incrementCount}>
			Hovered { count } times
			</h1>
			) 
		  }
	}
	export default UpdatedComponent (Hover) 
  
```

3. code for Click.js

```
import React, {Component} from 'react'
import UpdatedComponent from './withHOC'

class Click extends Component {
	render() {
		const { count, incrementCount } = this.props
		return (
			<button onClick = {incrementCount}>
			Clicked { count } times
			</button>
			) 
		  }
	}
	export default UpdatedComponent (Click) 
  
```
  
 4. And finally, the main code for withcounter.js  where HOC is implemented

```
import React from 'react'

const UpdatedComponent = originalComponent => {
	class NewComponent extends React.Component {
		constructor(props) {
			super(props)
			
			this.state = {
			count:0
			}
		}
		incrementCount = () => {
		this.setState(prevState => {
		return {count: prevState.count + 1}
		})
	}
	render() {
		return (
		<originalComponent count = { this.state.count }
		incrementCount = { this.incerementCount }
		/>
		)
		}
	}
	}
	return NewComponent
}

export default UpdatedComponent 

```


##### HOC is taking care of maintaining the state and incerementing it.
