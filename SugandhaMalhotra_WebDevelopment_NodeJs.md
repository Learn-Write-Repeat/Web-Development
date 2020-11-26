# Hello Everyone 👋 
<p>Web-Development is an emerging field with a lot of new peaks. It can be divided into two parts:👉 Front-end development and Back-end development.
Front-end development basically means to describe the outer view of user interface. If we see in terms of cars -> front-end means the structure, the colour,everything that a user can see.
Back-end development means developing the working, the connectivity of user interface. In other words -> back-end of cars means how the engine works, the various machinery involved in its working, everything that a user cannot see. Back-end is like a working of engine under the bonnet which usually driver doesn't know how that works.</p>
<p>I am here to elaborate the technology used for back-end development: Node-js.
  The first question arises :<b>What is Node.js</b> ❓
"Node-js is a javascript runtime environment that executes javascript code outside web browser." This can be termed as a technical definition of Node.js.
Lets understand it in simpler words: basically node-js is a runtime environment that allows us to write and implement javascript code for server side programming. It is very efficient as it is capable of using Javascript for front-end as well as for back-end. No separate language is required for back-end.
If you are familiar with Javascript then it becomes very easy to learn Node.js.</p> 
<h1> Switching on to Npm 👇</h1>
<p><b>npm -> Node Package Manager </b>
Node.js is popular as it provides various features. One of them is npm.
npm is a standard package manager for node.js, the package manager makes it easier for programmers to publish and share source code of Node.js packages. 
It is collection of different modules, that makes everything quite easy. It all comes when you will install Node.js.
These modules are basically solutions or source code that can be used by anyone directly in their application. 
Example: if we want to connect node.js to our database, there are 2 ways:
➡️ either we can write the entire code from scratch
➡️ or we can use the package/module that already comprises of the pre-written source code 
So this is a really good feature as we can use various dependencies / modules directly by using "require" keyword. NPM is a command line tool that installs, updates or uninstalls Node.js packages in your application.
You can fetch the packages, install them and use in your project.</p>
<h2>Heading over to how to use npm 👇</h2>
<p>You can go to the official site of npm and search whatever package you want to use.
⭐Link to npm site https://www.npmjs.com/, after installing node.js, you will get npm as well. When you are inside your project directory :</p>
<h3>❗ Use the following commands to get started with node.js and to use npm packages ❗</h3>
<ol>
  <li>Head over to the terminal</li>
  <li>Move into your project directory</li>
  <li>Use <b>"npm init"</b> command <b>👉This command will generate the package.json file inside your project directory.This file comprises of dependencies and version control of them in your project</b></li>
  <li>You can change or set to default by simply pressing enter key until everything gets started and then you can move further</li>
  <li>Express is the most used and the most famous framework, it can be used by installing "express" package</li>
  <li>Command used for installing any package-><b>"npm install package_name"</b> <b>Example: for express, we need to write "npm install express" command in terminal.</b></li>
 </ol>
 <p>⭐This will install latest version of the respective package.
  Inside your directory, there will be one more file <b>"package-lock.json"</b> -> this will show all the modules along with their versions and dependencies that comes along.
 For example-> when you install "express" package, it itself comes with various modules and dependencies, so that can be viewed inside "package-lock.json" file.</p>
 <h1>Packages can be installed : 1️⃣ Locally  2️⃣ Globally</h1>
 <p><u><b>Locally</b></u>👉 When you are in your project directory and install the packages using above commands, packages are installed locally in your current directory.
  <b>"npm install package_name"</b> this command installs the package in your current directory and the package gets installed <b>inside "node_modules" folder</b> in the project directory.
 ⭐ Each time you make a new project, you have to install the packages using the above commands. After installing packages can be used using "require" keyword.</p>
  <p><u><b>Globally</b></u>👉 To install the packages globally, use the command 👉 <b>"npm install -g package_name"</b>
 ⭐ This installs the package globally so that all node.js applications on the device can import and use the installed packages.<b>NPM installs global packages into /<User>/local/lib/node_modules folder.</b></p>
 <p>❗Packages can be updated and uninstalled using the commands : "npm update package_name" and "npm uninstall package_name". Update command will update the package to the latest version and uninstall means local package is removed from the directory.</p>
<h3> You can contact me 👉https://www.linkedin.com/in/sugandha-malhotra-a95685193/
