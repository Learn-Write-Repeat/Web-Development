
# What are Events?
Events are actions recognized by a software like opening or closing a file. In a programming language, an events is an action that initiates the execution of another piece of 
code. Nodejs has an in-built class named **EventEmitter** in the **events** module which is used to create ,fire and listen for user-built events. AlThough nodejs is a single threaded application, it supports concurrency with the help of events and callbacks. Using events makes nodejs very fast. Whenever an event gets fired, its listener function starts executing. These Listener functions are called Observers.

### Handling of events requires 5 main steps: <br>
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
An object of EventEmitter class is created which helps us to use the various methods provided by EventEmitter class to work with events.
```
var event_object = new events.EventEmitter();

```

#### Create an Event Handler
Event Handler is a piece of code that is executed in response to an event. Event Handler is basically a function which is invoked when an event is fired.
```
var eventHandler = function(){
console.log("message is received");
}

```

#### Binding Event and Event Handler
on() method of EventEmitter class is used to bind together an event and event handler so that it is invoked when that event is fired.
```
event_object.on('event_name',eventHandler);

```

#### Fire an Event
emit() method is used to fire an event.
```
event_object.emit('event_name');

```
# Intro to EventEmitter Class
EventEmitter class provides various in-built methods used to raise and handle custom events. It provides multiple properties like on and emit. on property is used to bind a function with the event and emit is used to fire an event. <br>

**An object of EventEmitter class is created and used to invoke methods of EventEmitter class using the following code ->** <br>
```
var event_object = new events.EventEmitter();

```
<br>

## Below are some of the methods of EventEmitter class used to handle events:
| Method | Description |
| :-------:| :----------:|
| addListener(event, listener) | Adds a listener at the end of the listeners array for the specified event. |
| on(event, listener) |  Adds a listener at the end of the listeners array for the specified event. |
| once(event, listener) | Adds a one time listener to the event. This listener is invoked only the next time the event is fired, after which it is removed. |
| removeListener(event, listener) | Removes a listener from the listener array for the specified event. |
| emit(event, [arg1], [arg2], [...]) | Execute each of the listeners in order with the supplied arguments.|
| listeners(event) | Returns an array of listeners for the specified event.|

