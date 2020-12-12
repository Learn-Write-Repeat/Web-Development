# Component styling in ReactJS
The reason we style your React application is no different from that which we have in mind when styling other websites or web applications we have been working on. Styling in React applications describes how React components or elements are displayed on screen or any other media.

![image](https://miro.medium.com/max/3200/1*8slP0diGduUQy3qk9N7HsQ.png)

## RADIUM:

#### Features

-   Conceptually simple extension of normal inline styles
-   Browser state styles to support  `:hover`,  `:focus`, and  `:active`
-   Media queries
-   Automatic vendor prefixing
-   Keyframes animation helper
-   ES6 class and  `createClass`  support

![image](https://sahilthakur7blog.files.wordpress.com/2018/01/og-image.jpg?w=640)


## CSS Modules

CSS Modules are awesome. If you are not familiar with CSS Modules, it is a concept of using a module bundler such as webpack to load CSS scoped to a particular document. CSS module loader will generate a unique name for each CSS class at the time of loading the CSS document Interoperable CSS to be precise). To see CSS Modules in practice, webpack-demo.

![image](https://blog.pusher.com/wp-content/uploads/2018/02/css-modules-react-header.png)

In large projects coming up with unique class names can be hard. CSS Modules enable you to use the same class wherever you want. Since the compiler handles the CSS it changes all the class names with different unique names in order make them locally available for that component.

## LESS/SASS

Generally, we recommend that you don’t reuse the same CSS classes across different components. For example, instead of using a .Button CSS class in **AcceptButton** and **RejectButton** components, we recommend creating a **Button** component with its own .Button styles, that both **AcceptButton** and **RejectButton** can render (but not inherit).

However, there is no such solution for LESS, at the moment. So In this article we will focus on creating a solution for LESS. Actually, it’s better to call this a work-around instead, as it has some negative aspects, like having to import your LESS file (say “style.less”) like “style.css”.

To solve this problem, we will set up a LESS-CSS compiler to compile a LESS each time we make changes to the stylesheet and put the compiled CSS file into the exact same directory so that the user can use the compiled CSS file instead by just changing the extension from LESS to CSS while importing the stylesheet.

![image](https://miro.medium.com/max/600/1*NSAaImEJtqC00Gw4hXBpHA.png)


**Author:**

Anoop Varghese

Website:  [www.anoopv.me](http://www.anoopv.me)

LinkedIn:  [Connect](https://www.linkedin.com/in/anoopv1234/)

