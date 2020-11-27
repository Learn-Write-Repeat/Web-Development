## Introduction to Functional components and Class components (Codes)

## Functional Components

* #### Program to demonstrate the creation of functional components:
```
import React from 'react';

import ReactDOM from 'react-dom';

function Demo()

{
return <h1>Welcome to GitHub</h1>;
}

export default Demo; 
```

* #### Use of functional components in other components:

```
import React from 'react';
function Welcome()
{
return ( <h1>Welcome to GitHub again</h1> );
}

function functionExample() 
{
return ( <Welcome/> ); 
} 

export default Welcome;
```

* #### Program to demonstrate the use of useEffect() hook:
```
import React, { useEffect } from 'react'; 

function Example() { 
useEffect(() => { 
	console.log("Mounting..."); 
}); 
	return ( 
	<h1> 
		Hi I am Anoop Varghese....! 
	</h1> 
	); 
} 

export default Example; 

```

* #### Program to demonstrate the use of props:

```
import React, { useState } from 'react'; 
import props from 'prop-types'; 

function Example() { 
return( 
	<h1>{props.data}</h1> 
	); 
	} 
	
	function propsExample() 
	{		 
	const [change, setChange] = useState(true); 
		return ( 
		<div> 
		<button onClick = {() => setChange(!change)}> 
			Click Here! 
		</button> 
		{change? 
			<Example data="Welcome to Internet"/>: 
			<Example data="Hello there"/>} 
		</div> 
		); 
	} 

export default Example; 

```

## Class Components

* #### Program to demonstrate the creation of class-based components:
```
import React from 'react'; 

class Beginning extends React.Component 
{ 
	render(){ 
		return <h1>Hello World</h1>; 
	} 
} 

export default Beginning; 

```

* #### Use of class-based components in other components:
```
import React from 'react'; 

class Sample extends React.Component { 
render() 
{ 
return ( 
<h1>Hi, I am Anoop!</h1> 
); 
} 
} 

class componentExample extends React.Component 
{ 
	render() 
	{			 
	return ( 
	<Sample/> 
	); 
	} 
} 

export default componentExample; 

```

* #### Program to demonstrate the use of state in class-based component:

```
import React from 'react'; 
	
class stateExample extends React.Component 
{ 
constructor(props) { 
super(props); 
this.state = {change: true}; 
} 
	render() 
	{			 
	return ( 
	<div> 
	<button onClick = {() => {this.setState( 
	{ change: !this.state.change})}}> 
		Click Here! 
	</button> 
	{this.state.change? 
	<h1>Hello</h1>: 
	<h1>GitHub</h1>} 
	</div> 
	); 
	} 
} 

export default stateExample; 

```

* #### Program to demonstrate the use of lifecycle hooks:
```
import React from 'react'; 
	
class lifecycleExample extends React.Component 
{ 
constructor(props) { 
super(props); 
this.state = {text: "Welcome!"}; 
} 

componentWillMount() { 
this.setState({ 
	text: "GeeksforGeeks"
}); 
} 

	render() 
	{			 
	return ( 
	<h1> 
	{this.state.text} 
	</h1> 
	); 
	} 
} 

export default lifecycleExample; 

```


**Author:**

Anoop Varghese

Website:  [www.anoopv.me](http://www.anoopv.me)

LinkedIn:  [Connect](https://www.linkedin.com/in/anoopv1234/)

