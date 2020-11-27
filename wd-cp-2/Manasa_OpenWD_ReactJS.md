# Introduction to WebPack and Babel

# what is a webPack :
webpack is an open-source JavaScript module bundler.` It is a build tool that puts all of our assets like Javascript, images, fonts, and CSS, in a dependency graph. ` It is used to  build and manage our files.
It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images too.

## Why should we use it:question:
If we're using many files in our project, **the importing order of the files  is important**. If we switch it,it will cause error and it gets hard to manage them all by ourselves.so if we use a
web pack in this case, it maintains and manages our files for us. It also optimizes and minifies the files.
 
## What it actually Does:question:
webpacks do a lot of work for us.It helps us with some important problems
* When we have got multiple files for our project ( Eg: 3/4 JavaScript files),  we have to bundle them all together. It can be done with minimal efforts from our side using WebPacks.
* Instead of manually managing the order which is error prone , we have a tool that does for us. 
* It takes all the script files and intelligently combines into a bundle and we only have to reference it.
* WebPacks bundle all of our files together and even transform them so that we can write our js code using es6,which isn't supported by all browsers.
but it can be compiled and run in those browsers using this.

## Benefits of using a WebPack:
:point_right: If We're building a complex Front End application with many static assets such as CSS, images, fonts, etc, then Webpack will give us great benefits.

:point_right: A WebPack analyzes connections,bundles and optimizes all our files.

:point_right: It helps us set up a development work flow.

## How Does it work:question:

| It has entry points like app.js . And starts from there|  Makes global transformations before adding it to bundle using loaders like babel.| Adds plugins | we get output (correctly ordered,concatenated output).|
|---------|---------|----------|----------|


# What is Babel:
JavaScript is moving so fast that the browsers are behind and are not able to adapt to all the changes it brings. ` It takes modern Js and compiles it down to a form that could be understood in different environments. `
It is very powerful tool that is built on plugin system.

## What it actually Does:question:
:point_right: It is a tool that allows us to write super advanced Js, that are not yet available to be used inside browsers and babel will take care of it.

:point_right: it will compile the advanced Js features into which our browsers can understand.

## How Does it work:question:

| It parses our modern Js into an Abstract syntax tree or an **AST** | It Rewrites it in a version that can be interpreted by the browser. | It transforms the modern Js. | We can use a new feature of Js before every browser supports it |
|---------|---------|----------|----------|

### contributed by: 
Manasa preeya

:email: manasapreeya01@gmail.com

:wave: Instagram: @manasa___1 GitHub: Manasapreeya 




