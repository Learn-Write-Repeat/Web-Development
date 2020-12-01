# How React actually performs the DOM Manipulation :pencil:

DOM stands for Document Object Model. DOM is a tree structured, in-memory representation of HTML. DOM Manipulation is a method by which the content of a web page is dynamically altered.

Javascript is usually used for performing DOM manipulation by using methods like getElementByTagName or getElementById, but there is a problem in using Javascript for manipulating DOM.

## Why React is preferred for DOM Manipulation over other Javascript frameworks?

DOM Manipulation is the most essential thing for making a web page dynamic and more interactive. So, it is very important that the process of DOM manipulation must be quick so that the web page is user friendly. But in Javascript the process of DOM Manipualtion is very slow and hence, it also make the loading of web page slow. 

**For Example :** We have a to-do list app and we want to update the first item of the list. In this we do not need to update the entire list but most of the javascript frameworks will update the entire list just to update the first item. This results in making the loading of the web page slow. 

**To solve this problem, React uses something called the Virtual DOM.**


## What is Virtual DOM ? :beginner:

Virtual DOM is just a copy of real HTML DOM. The manipulation of virtual DOM is much more faster than the real DOM. So, the changes that needs to be done in real DOM, React does it to the virtual DOM and then update the real DOM according to that. This process is known as  **Reconciliation**. 

Before updating the real DOM, React creates a copy of Virtual DOM and compare it with the updated Virtual DOM. Then React figures out which elements have been changed. Once React knows which elements is changed, it updates only those elements in the Real DOM. 

## Rules followed by React in updating DOM

React follows **Diffing Algorithm**  for DOM Manipulation. Diffing Algorithm means comparing two trees before updating. Hence, React compares the copy of Virtual DOM before updating with the Virtual DOM after updating, and then make the necessary changes to the DOM. React uses diffing algorithm with somes rules for manipulating the DOM. These rules are given below with the necessary codes for explaination:

#### 1. If the root element is different, then React will update the entire tree.
  Example :  In the below codes, the root element is different **div** and **span** so React will update the entire tree.
  
 ```
   <span> 
   <h1> Hello </h2>
   </span>
 ```
     

``` 
  <div>
   <h1> Hello </h1>
  </div>
 ```

#### 2. It the elements are same, then React will compare the attributes of both the elements and change only the attribute if necessary.
 Example :  In the below codes, elements are same so React only alters the attributes.
  
 ```
   <div id="div1" />
 ```
     

``` 
  <div id="div2" />
```


## How React compares Child Elements?

Let us consider two lists.

**List 1**

```
<ul>
   <li> Item 1 </li>
   <li> Item 2 </li>
</ul>
```

**List 2**

```
<ul>
   <li> Item 1 </li>
   <li> Item 2 </li>
   <li> Item 3 </li>
</ul>
```
  
In list 2, a new item has been added to the end of the list. React iterates over the list and compares each chid and creates a new **li** element where there is a difference. A problem arises when a new item is added to the start of the list.

**List 1**

```
<ul>
   <li> Item 1 </li>
   <li> Item 2 </li>
</ul>
```

**List 2**

```
<ul>
   <li> Item 3 </li>
   <li> Item 1 </li>
   <li> Item 2 </li>
</ul>
```
 
In this, React compares the first elements and finds that there is a difference ans so creates a new element. The same happens to the next elements as well. So, in this case React is updating the entire list unknowingly. This makes the process of loading web page very slow.

**To overcome this problem, React supports an attribute, Key.**

### Comparison using Key Attributes :thumbsup:

If the attribute key is added to the list element, React compares the values in key of the first tree, and matches it to the key value in the second tree.

Example :

**List 1**

```
<ul>
   <li key="0"> Item 1 </li>
   <li key="1"> Item 2 </li>
</ul>
```

**List 2**

```
<ul>
   <li key="2"> Item 3 </li>
   <li key="0"> Item 1 </li>
   <li key="1"> Item 2 </li>
</ul>
```

Now, using key attribute's value React will know that a new child element with key="2" has been added to the list. Hence, it’ll not update the entire list again. This will improve the speed of DOM Manipulation.

Hence, React makes the process of DOM Manipulation quick and makes the web page more user friendly.

Congrats :sparkler: You have completed this topic.

## Author 
### Manvi
[Github](https://gist.github.com/manvi-123894) 
[LinkedIn](https://www.linkedin.com/in/manvi-3b838b1b5/)



