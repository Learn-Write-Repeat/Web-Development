
## What are Events?
Events are actions recognized by a software like opening or closing a file. In a programming language, an events is an action that initiates the execution of another piece of 
code. Nodejs has an in-built class named **EventEmitter*** in the **events*** module which is used to create ,fire and listen for user-built events. AlThough nodejs is a single threaded application, it supports concurrency with the help of events and callbacks. Using events makes nodejs very fast. Whenever an event gets fired, its listener function starts executing. These Listener functions are called Observers.

#### Importing events module
```
var events = require('events');

```

#### Create an EventEmitter object
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
