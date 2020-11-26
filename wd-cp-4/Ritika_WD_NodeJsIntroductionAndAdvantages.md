
# What is NodeJs?

You all have been using JavaScript for client-side applications but would like to extend its functionalities to the server-side as well. Here [Node.js](https://nodejs.org/en/) comes to the rescue!
Node.js is an open source command line tool which lets you run JavaScript on the server as it uses the famous V8 JavaScript Engine.

| Note: V8 is an open source JavaScript Engine developed by the Chromium Project for Google Chrome and Chromium web browsers.

### With Node.js you can –>

1)	Generate dynamic page content easily.
2)	Create , read, write, open and close files on the server.
3)	Collect form data and store it to a database.
4)	Modify , delete and read data from a database.

- Node.js applications are best suited for real-time applications where the browser needs constant server support.
- Node.js uses asynchronous programming which means it eliminates the waiting time and proceeds with the next task making it memory and speed-efficient.

### Starting with Node.js
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

| Note : main.js is the name used to save the above program.

***After executing above command, your web-browser will open displaying the message of “Hello World”.




