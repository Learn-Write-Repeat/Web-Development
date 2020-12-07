# ***Wassup....!! Learners <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px">  , Welcome To Chetucity*** :seedling:
<br>

# **I am ***[Chetan Sharma](https://www.instagram.com/chetucity)***** :sunglasses:

## *Feel Free To Contact Me* :wink:
### My Social Handel :star: 
<br>

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/chetan-sharma-19b317148//)](https://www.linkedin.com/in/chetan-sharma-19b317148/) <br>
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:Chetucity@gmail.com)](mailto:Chetucity@gmail.com) <br>
<a href="https://instagram.com/Chetucity" target="_blank"><img src="https://img.shields.io/badge/Chetucity-%23E4405F.svg?&style=flat-square&logo=instagram&logoColor=white" alt="Instagram"></a>



## :point_right: **Today We Are Talking About** :

### :pencil2: ***ID Selector***

### :pencil2: ***Class Selectors***
### :pencil2: ***Grouping***
### :pencil2: ***Universal Selector***
<br>

# :zap: ***ID Selector*** :zap:

Document languages may contain attributes that are declared to be of type ID. What makes attributes of type ID special is that no two such attributes can have the same value; whatever the document language, an ID attribute can be used to uniquely identify its element. In HTML all ID attributes are named "id"; XML applications may name ID attributes differently, but the same restriction applies

<br>

- ID Selector is used to select element with the **unique** ID name that is having the ID attribute.
- The ID selector uses the ID attribute in tag to select a specific element.
- ID name should not be repeated in the document.

- The ID of a element is unique in page , so the id selector is used to select one unique element.
- To style the element  we start with **( # )** followed by ID name.
<br>

**For ex :-**

- HTML elements with class="center" will be red and center-aligned :straight_ruler:

```` html
<div>
<p id="green"> Hello I am Chetucity </p>
</div>

````
- In CSS Doc to style that Particular DIV we write as follows :straight_ruler:

``` css

#green {
    color: green;
}
```
This will make the Paragraph tag text color to green :green_book:

## [Chetan_Code](Code.md) <br>
*:point_up_2: Click here to check the code** :link:

<br>


# :rocket:***Class Selector*** :rocket:

- Class selector are used when we want to style more that one object.
- Multiple elements in the document can have same class.
- A single element can also have multiple class seperated by space.
- Class selector can start with letter , (-)Hyphen or ( _ ) underscore.
- We define the class selector in CSS document by ( . ) followed by name.

<br>

**For ex :-**

In HTML document we write :pencil2:

``` html
<div>
    <p class="red"> Hello my name is Chetan Sharma </p>
</div>
```

To style this in CSS we write :pencil2:

```css
.red{
    color:red;
}
```
The class selector selects elements with a specific class attribute. It matches all the HTML elements based on the contents of their class attribute. The . symbol, along with the class name, is used to select the desired class.

<br>

# :warning:***The difference between Class and ID selector***

### The difference between an ID and a class is that an ID is only used to identify one single element in our HTML. IDs are only used when one element on the page should have a particular style applied to it. However, a class can be used to identify more than one HTML element.

<br>

# :computer: ***Code*** 

```html
<html>
 <head>
 </head>
 <body>
   <div class="main">
     <h3>Welcome to Educative!</h3>
     <p id="demo">Sample paragraph with an ID</p>
     <p> Sample paragraph with no ID</p>
   </div>
 </body>
</html>
```

```css
.main {
  background-color: #FFAFA4;
}

#demo {
  background-color: #DEDAF7;
}
```
```
The following code demonstrates the difference between class and ID selectors, ​and how to set their individual properties. The code sets a class for the div and, therefore, all the elements within the div will have this class. However, one of the paragraphs is assigned an ID which allows individual properties to be set for this particular paragraph. These properties are set using the appropriate class and ID selectors.
```
## [Chetan_Code](Code.md) <br>
*:point_up_2: Click here to check the code** :link:

<br>

# :sparkles: ***Grouping*** :sparkles:


The grouping selector selects all the HTML elements with the same style definitions.
Look at the following CSS code (the h1, h2, and p elements have the same style definitions)
<br>

- So we use Grouping when we have to set same style for different elements.
- we can group all the selectors and can write styling code for all at once.
- It can be grouping of different classes or Tags or all together.
- It reduces time requried to set the style.
- It reduces the Code redundancy.
- With the use of grouping the code becomes Concise.
- With grouping it is easy to debug the code in case of Error.
<br>

The CSS grouping selector is used to select multiple elements and style them together. This reduces the code and extra effort to declare common styles for each element. To group selectors, each selector is separated by a space.

## [Chetan_Code](Code.md) <br>
*:point_up_2: Click here to check the code** :link:
## Syntax
* The syntax for CSS grouping selector is as follows −

```css
element, element {
   /*declarations*/
}
```
The following examples illustrate CSS grouping selector −

```html
<!DOCTYPE html>
<html>
<head>
<style>
article, p, img {
   display: block;
   margin: auto;
   text-align: center;
   border-bottom: double orange;
}
</style>
</head>
<body>
<article>Demo Text</article>
<p>This is demo text.</p>
<br/>
<img src="https://chetucity.com">
</body>
</html>
```
![](https://www.tutorialspoint.com/assets/questions/media/34191/grouping_selectors.jpg)

## Output
This gives the following output −

![](https://www.tutorialspoint.com/assets/questions/media/34191/grouping_selectors_css.jpg)
<br>

## ***Example***

```css
h1{
    color:green;
}

.text{
    color:green;
}

h2{
    color:green;
}
```
In this we can see that we have to change the color of 3 different elements to green so why to write the code for all the elements seperately simply we can do this by Grouping
To group them together we have to write all of them seperated by Comma.

Above code can also be written as :

```css
h1, .text, h2{
    color:green;
}
```
It will work as  same as written above just to reduce the code we can write it in this format also
There is no condition for how the elements should be grouped we can group all the classes , ID's and tags all together.

<br>

# :milky_way: ***Universal Selector*** :milky_way:

- Universal Selector is used to select all the type of elements.
- Universal Selector can be used to set same value to the elements.
- An Asterisk **(*)** is used to denote the Universal Selector.
- The Universal Selctor is Capable of Selecting all the elements inside another elements also.
- It is like an Wildcard which matches all the elements.

## Syntax

```css
*{ properties }
```

## Example

```css
 *{
   color: #f00;
   font-size: 1.2em;
 }
```

```html
<body>
  <h1>Universal selector example.</h1>
  <p>This is a paragraph.</p>
</body>
```

## :dizzy: ***Amigo Fella's*** :dizzy:
<br>

## ***:paw_prints: Hope you guys enjoy this little journey with  [Chetan Sharma](https://www.instagram.com/chetucity)  !!!***

## ***Thanks For Your Precious*** :alarm_clock:

