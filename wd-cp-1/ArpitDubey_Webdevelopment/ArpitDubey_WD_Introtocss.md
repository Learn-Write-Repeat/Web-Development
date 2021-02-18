# History of CSS

CSS was first proposed by Håkon Wium Lie on October 10, 1994. At the time, Lie was working with Tim Berners-Lee at CERN.<br>
Several other style sheet languages for the web were proposed around the same time, and discussions on public mailing lists and inside World Wide Web Consortium resulted in the first W3C CSS Recommendation (CSS1) being released in 1996.
### Version of CSS
> - ***CSS1*** The first CSS specification to become an official W3C Recommendation is CSS level 1, published on December 17, 1996. 
Håkon Wium Lie and Bert Bos are credited as the original developers.It includes
font properties such as typeface and emphasis,
 Color of text, backgrounds, and other elements,
 text attributes such as spacing between words, letters, and lines of text,
 alignment of text, images, tables and other elements
 margin, border, padding, and positioning for most elements,
 
<br>

> - ***CSS2*** 
> CSS level 2 specification was developed by the W3C and published as a recommendation in May 1998. 
A superset of CSS 1, CSS 2 includes a number of new capabilities like absolute, relative, and fixed positioning of elements and z-index, 
the concept of media types, support for aural style sheet and bidirectional text, and new font properties such as shadows.
<br>

> - ***CSS2.1*** 
> CSS level 2 revision 1, often referred to as "CSS 2.1", fixes errors in CSS 2, removes poorly supported or not fully interoperable 
features and adds already implemented browser extensions to the specification.It was  published as a W3C Recommendation on 7 June 2011.
CSS 2.1 was planned as the first and final revision of level 2—but low priority work on CSS 2.2 began in 2015.
<br>

> - ***CSS3*** 
> Unlike CSS 2, which is a large single specification defining various features, CSS 3 is divided into several separate documents called
"modules". Each module adds new capabilities or extends features defined in CSS 2, preserving backward compatibility. Work on CSS level 3 started 
around the time of publication of the original CSS 2 recommendation. The earliest CSS 3 drafts were published in June 1999.
<br>

> - ***CSS4*** It's specification has been split into many separate modules which level independently.
<br>

# Including CSS
There are typically three ways we do that
1. Inline CSS: In this we can include CSS directly in our HTML elements. For this, we make use of the style attribute 
and then we provide properties to it.
```HTML
<h1 style="color: red"> Peace </h1>
```
This will change the color of h1 element to red.
2. Internal CSS: In this method we use style element in head.
```HTML
<head>  
    <style>  
        body {  
            color: blue;  
        }  
    </style>  
</head>
```
This will color the body with blue color.

3. External CSS: An external style sheet is one that is created externally to the HTML document.
We create a stylesheet with a .css extension and include its link in the HTML document.
```HTML
<head>  
    <link rel="stylesheet" href="style.css">  
</head>
```
In this we have include the style.css file through link tag.
# Multiple Stylesheet
You can use multiple stylesheets in one project . It will give you following advantage:
 * CSS files will be small and easy to navigate. No need to scroll up and down, and your text editor will love you.
 * CSS files will be more modular.
 * CSS selectors won’t cascade or conflict with other selectors.
 * Style will be more predictable, even though you can’t predict which file gets included first.<br>
But if you use same element in different stylesheets than one which is declared at last will be considerd.
# CSS Values
A value type in CSS is a way to define a collection of allowable values. For example:
```HTML
p { 
  color: black; 
  background-color: rgb(189,93,161); 
} 
```
 This means that if you see <color> as valid you don't need to wonder which of the different types of color value can be used — keywords, rgb() etc.
 ### Lengths
 The numeric type you will come across most frequently is length. For example 20px (pixels) or 60em.
 Some of the units are:
 * 1cm = 96px/2.54	
 * 1mm = 1/10th of 1cm
 * 1Q = 1/40th of 1cm
 * 1in = 2.54cm = 96px
 * 1pc = 1/6th of 1in
 * 1pt = 1/72th of 1in
 * 1px = 1/96th of 1in
 ### Percentages
 A measurement of relative size. Percentages take the form of a number followed by %.
 For example, if you set an element's font-size as a percentage it will be a percentage of the font-size of the element's parent. 
 If you use a percentage for a width value, it will be a percentage of the width of the parent.

 





