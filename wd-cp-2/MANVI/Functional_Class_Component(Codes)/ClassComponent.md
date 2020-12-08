# Implementation of a Counter using Class Component
```

import React from "react"; 

class ClassComponent extends React.Component{ 
	constructor(props){ 
		super(props); 
		this.state={ 
			count :0 
		}; 
	} 
	
const increment = () =>{ 
	this.setState({count : this.state.count +1}); 
} 

render(){ 
	return ( 
		<div> 
		     <h3>Counter using Class Componenet : </h3> 
		     <h2> {this.state.count}</h2> 
		     <button onClick={this.increase}> Click Me</button> 
		</div> 
	) 
} 
} 

export default ClassComponent;

```
