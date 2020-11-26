:star:**HTML Tags and Elements**
  
  
**HTML Tags**

|       Tags                            |     Description                                                                                |
|---------------------------------------|------------------------------------------------------------------------------------------------|
|      a                                | Defines a hyperlink.                                                                           |
|      article                          | Defines an article.                                                                            | 
|      aside                            | Defines some content loosely related to the page content.                                      |
|      body                             | Defines the document's body.                                                                   |
|      br                               | Produces a single line break.                                                                  |
|     details                           | Represents a widget from which the user can obtain additional information or controls on-demand|
|     div                               | Specifies a division or a section in a document.                                               |
|     h1 to h6                          | Defines HTML headings.                                                                         |
|     head                              | Defines the head portion of the document that contains information about the document.         |
                                 
                                 
  
 **HTML Elements Types**
 
Elements can be placed in two distinct groups: block level and inline level elements. The former make up the document's structure, while the latter dress up the contents of a block.

Also, a block element occupies 100% of the available width and it is rendered with a line break before and after. Whereas, an inline element will take up only as much space as it needs.


:star:**Html Attributes**

* All HTML elements can have attributes.
* Attributes provide additional information about elements.
* Attributes are always specified in the start tag.
* Attributes usually come in name/value pairs like: name="value".
* for eg. 1. Use [text](url) for hyperlinks
            [Devincept Website](https://devincept.tech/)
         
:star:**Div and Span tag**
  
  **div** tag should be used for grouping a set of related elements to create a relationship between them on a webpage, the **span** tag should be used to change the style of something on a webpage without affecting the context it is within. 
  
  
  
  **Grouping Content**
  
  Grouping of content is one of those things that happens behind the scenes at a website. You see a webpage, but you do not know how the author of that webpage set up relationships between the various items on the page. Doing so is important for styling as well as for a logical organization.
  * On this webpage, we have five containers that group together a set of elements:
    1. **Header**
         The top part of this page. It contains the site name, slogan, search box, and top menu.
    2. **Left side navigation**
        The left side of this page. It contains the menu for this sites content.
    3. **Content**
         The center of this page. It contains the actual content of the page.
    4. **Right side navigation**
         The right side of this page. It contains some more of the menu for this sites content, the things we could not fit on the left side.
    5. **Footer**
          The footer of this page. It contains links that are generally reserved for the footer of a webpage such as 'copyright information', 'terms of use', and a copyright             statement and a few images related to the validation of the construction of this webpage.

####Code

<!DOCTYPE html>
<html lang="en">
<head>
<title>Shivaji university</title>
<meta charset="UTF-8">
<meta name="description"content="one of the best university">
<meta name="keyword"content="btech,MCA">
<meta name="viewport"content="width=divice-width initial-scale="1.0"
</head>
<body>
<header>
<img src="images/aar.jpg" width="100%" height="250px">
</header>
<center>
<table border="1" cellspacing="10px" cellpadding="10px" width="500px">
<caption style="color:blue;">student data</caption></caption>
<tr>
<th colspan="5" /th>DOT
</tr>
<tr>
<th> rollno </th>
<th> name</th>
<th> mark1 </th>
<th> mark2</th>
<th>total</th>
</tr>
<tr style="text-align: center; color: red">
<td>1</td>
<td style="color: black;">AMBIKA</td>
<td>98</td>
<td>98</td>
<td>196</td>
</tr>
</center>
</table>
<footer style="margin-top:60%;">
<p>copyright @2019 <span style="color:red">All Rigt Reserved</span></p>
</body>
</html>
