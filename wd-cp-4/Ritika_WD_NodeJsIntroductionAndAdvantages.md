

# What is NodeJs? :computer:

You all have been using JavaScript for client-side applications but would like to extend its functionalities to the server-side as well. Here [Node.js](https://nodejs.org/en/) comes to the rescue! :thumbsup:
Node.js is an open source command line tool which lets you run JavaScript on the server as it uses the famous V8 JavaScript Engine.

| *Note: V8 is an open source JavaScript Engine developed by the Chromium Project for Google Chrome and Chromium web browsers.*

### With Node.js you can :open_mouth: –>

1)	Generate dynamic page content easily.
2)	Create , read, write, open and close files on the server.
3)	Collect form data and store it to a database.
4)	Modify , delete and read data from a database.

:snowflake: Node.js applications are best suited for real-time applications where the browser needs constant server support. <br>
:snowflake: Node.js uses asynchronous programming which means it eliminates the waiting time and proceeds with the next task making it memory and speed-efficient.

### Starting with Node.js :heart:
Node.js application has three main parts – importing modules , creating server and initiating a read request and return response.

#### 1) Step 1 : Importing modules

Modules are imported using require directive and stored into a variable, <br>
```
var http = require("http"); 
```


#### 2) Step 2: Creating Server 

We use the above variable and call *createServer()* method to create server instance binding it with *listen()* method using port number 8081. <br>

``` 
http.createServer(function (request, response) {  
   // Send the HTTP header  
  // HTTP Status: 200 : OK 
  // Content Type: text/plain 
  response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World" 
   response.end('Hello World\n'); 
}).listen(8081); 

```

#### 3) Step 3: : Testing the application request and response

Open command-line and execute the program by typing, <br>

```
$ node main.js
```

|  *Note : main.js is the name used to save the above program.*

***After executing above command, your web-browser will open displaying the message of “Hello World” as shown in the below screen.*** 
<br><br>
<p align="center">
  <img  src="https://res.cloudinary.com/djix6uusx/image/upload/v1606379914/nodejsOutput_ph60aj.png" width="60%" height="60%">
</p>


## Advantages of Node.js –

 ***1)	Easy to learn*** - it is easy to learn if you already know javascript quite well. <br>
 
***2)	Same language for front and back-end*** – node.js has made it easier for developers to learn just one language and use it to implement both front and back end of an application. Earlier they had to learn different languages for client and server side of a project. <br>

***3)	Platform Independent*** – runs on various platforms like Linux , Windows , Mac OS , Unix. Installation is easy to understand and doesn’t consume much time. <br>

***4)	Fast execution*** – as it uses V8 JavaScript engine , it executes code very fast. <br>

***5)	Highly Scalable*** –it uses single threaded model with event looping. It doesn’t wait for a task to complete but proceeds with another task and responds to a server in non-blocking I/O making it highly scalable in comparison to traditional servers which also uses single threaded model. <br>

***6)	Community support*** – node.js has gained a lot of fame among developers which has led to the development of a reliable community. If you are stuck with a problem , chances are that someone has already gone through that similar problem and hence solved it.
*NPM( node package manager)* consists of numerous modules with solutions to a lot many problems. You can easily integrate them in your application.<br>

***7)	Miscellaneous advantages*** –  <br>
:cactus:	Reusable code <br>
:cactus:	Efficient performance <br>
:cactus:	Supported by leading companies <br>
:cactus:	Perfect for data-streaming applications <br>
:cactus:	Useful for JSON APIs based applications <br>
<br>
<br>
<p align="center">
Written by [Ritika](https://github.com/Ritika-Agrawal811/).<br> 
   I hope you gained some knowldege and had fun reading this Nodejs Readme.md <br>
</p>
<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606381865/footer_upxevk.png" width="200%" height="120%">
 </p>

