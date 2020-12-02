
## What are Events?
Events are actions recognized by a software like opening or closing a file. In a programming language, an events is an action that initiates the execution of another piece of 
code. Nodejs has an in-built class named **EventEmitter*** in the **events*** module which is used to create ,fire and listen for user-built events. AlThough nodejs is a single threaded application, it supports concurrency with the help of events and callbacks. Using events makes nodejs very fast. Whenever an event gets fired, its listener function starts executing. These Listener functions are called Observers.

Handling of events requires 5 main steps: <br>
1. Importing events module using *require* directive. <br>
2. Creating an EventEmitter object. <br>
3. Creating an Event Handler. <br>
4. Binding an event with the event handler. <br>
5. Firing an event.



#### Importing events module
As already mentioned above **events** module of Nodejs contains EventEmitter class which is used to handle events. So this module is imported using **require** directive.
```
var events = require('events');

```

#### Create an EventEmitter object
An object of EventEmitter class is created which helps us to use
```
var event_object = new events.EventEmitter();

```

#### Create an Event Handler
```
var eventHandler = function(){
console.log("message is received");
}

```

#### Binding Event and Event Handler
```
event_object.on('event_name',eventHandler);

```

#### Fire an Event
```
event_object.emit('event_name');

```
