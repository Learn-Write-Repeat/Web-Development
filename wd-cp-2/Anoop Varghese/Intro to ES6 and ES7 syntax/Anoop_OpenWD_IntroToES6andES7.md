## Intro to ES6 and ES7 Syntax

**What is JavaScript?**

According to Wikipedia, it is a scripting language that conforms to the ECMAScript specification. ES6, ES7, etc… You probably have heard those names, you also have most likely been using ES6 for a while (with Babel in a lot of cases).

![JS image](https://res.cloudinary.com/practicaldev/image/fetch/s--vp1sr2L0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/goh1l649nxvhok278x8g.jpg)

With ES6, the JavaScript language designers addressed some of the major obstacles required to work with certain aspects of ES5 which you learned in the previous section. The first aspect was related to `var` definitions, including their scoping implications (e.g. hoisting) and limitations (e.g. no block scope), for which ES6 introduced the `let` and `const` keywords. Another aspect that was addressed in ES6 was support for namespaces and modules with the addition of the `export` and `import` keywords.

---

Finally, ES6 also introduced a series of JavaScript syntax constructs to make things easier to read and express, a concept often referred to as "syntactic sugar" in programming languages. Some of these constructs include the ellipsis symbol  `...`  which in JavaScript script is dubbed  _spread/rest syntax_.

****ECMAScript 6(2015)****

![ES6 image](https://s3.amazonaws.com/fullstackfeed/images/es6-1.jpg)

ES6 is an next-gen of JavaScript, the ecma technical committee 39 governs ecma specification, they discovered new features to the javascript.

ES6 can`t compile directly in browsers, so need an compiler from ES6 to ES5, for that compiling using  [babel](https://babeljs.io/), it produce the browser compatible javascript.

ES6 includes the following new features:
* arrows
* classes
* enhanced object literals
* template strings
* destructuring
* default + rest + spread
* let + const
* iterators + for..of
* generators
* unicode

**ECMAScript 7(2016)**
![ES7 image](https://miro.medium.com/max/2892/1*JhDw7yiwv5YOJIncUhCXQg.png)

They decided to release a new version of ECMAScript every year starting in 2015. A yearly update means no more big releases like ES6.

ECMAScript 2016(ES7) introduced only two new features:

-   Array.prototype.includes()
-   Exponentiation operator
