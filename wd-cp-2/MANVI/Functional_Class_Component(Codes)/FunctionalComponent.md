# Implementation of a Counter using Functional Component

```
import React ,{useState} from "react"; 

function FunctionalComponent()
{ 
	const[count , setCount]=useState(0); 

	function increment(){ 
		setCount(count+1); 
	} 

	return ( 
		<div> 
			<h1>Counter App using Functional Component </h1> 
			<h2>{count}</h2> 
			<button onClick={increment}>CLick Me</button> 
		</div> 
	) 
} 

export default FunctionalComponent;

```
