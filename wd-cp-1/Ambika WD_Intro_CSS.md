
# CSS

:white_square_button: **What is CSS?**

* CSS stands for Cascading Style Sheets
* CSS describes how HTML elements are to be displayed on screen, paper, or in other media
* CSS saves a lot of work. It can control the layout of multiple web pages all at once
* External stylesheets are stored in CSS files

:white_square_button:**Types Of CSS**

1.Inline CSS : Inline CSS is used to style a specific HTML element. For this CSS style, you’ll only need to add the style attribute to each HTML tag, without using selectors.
               This CSS type is not really recommended, as each HTML tag needs to be styled individually. Managing your website may become too hard if you only use inline CSS.
               However, inline CSS in HTML can be useful in some situations. For example, in cases where you don’t have access to CSS files or need to apply styles for a single                element only.
Let’s take a look at an example. Here, we add an inline CSS 

**Code**

<!DOCTYPE html>
<html>
<body style="background-color:black;">

<h1 style="color:white;padding:30px;">Hey there!! its Ambika</h1>
<p style="color:white;">Creative Minds</p>

</body>
</html>

2.Internal CSS : Internal or embedded CSS requires you to add <style> tag in the <head> section of your HTML document.
                 This CSS style is an effective method of styling a single page. However, using this style for multiple pages is time-consuming as you need to put CSS rules to                  every page of your website.

Here’s how you can use internal CSS:

Open your HTML page and locate <head> opening tag.
Put the following code right after the <head>tag

**Code**

<!DOCTYPE html>
<html>
<head>
<style>
body {
    background-color: blue;
}
h1 {
    color: red;
    padding: 30px;
} 
</style>
</head>
<body>

<h1>CSS means Cascading Style Sheets</h1>
<p>This is our paragraph.</p>

</body>
</html>

3.External CSS : With external CSS, you’ll link your web pages to an external .css file, which can be created by any text editor in your device (e.g., Notepad++).
                 This CSS type is a more efficient method, especially for styling a large website. By editing one .css file, you can change your entire site at once.

Follow these steps to use external CSS:

1.Create a new .css file with the text editor, and add the style rules. For example:
   .xleftcol {
   float: left;
   width: 33%;
   background:#809900;
}
.xmiddlecol {
   float: left;
   width: 34%;
   background:#eff2df;
}

2.In the <head> section of your HTML sheet, add a reference to your external .css file right after <title> tag:
  <link rel="stylesheet" type="text/css" href="style.css" />
  
3.Don’t forget to change style.css with the name of your .css file.

:white_square_button: **Why Use CSS**

CSS helps you to keep the informational content of a document separate from the details of how to display it. The details of how to display the document are known as its style. You keep the style separate from the content so that you can:

* Avoid duplication
* Make maintenance easier
* Use the same content with different styles for different purposes
Your web site might have thousands of pages that look similar. Using CSS, you store the style information in common files that all the pages share. When a user displays a web page, the user’s browser loads the style information along with the content of the page. When a user prints a web page, you might provide different style information that makes the printed page easy to read.

In general, you use HTML to describe the content of the document, not its style; you use CSS to specify its style, not its content. There are exceptions to this rule, of course, and HTML also provides some ways to specify style. For example, in HTML you can use a <b> tag to make text bold, and you can specify the background colour of a page in its <body> tag. When you use CSS, you normally avoid using these HTML style features so that all your document’s style information is in one place.
  
# Benifits of CSS : 

* Easier to maintain and update
* Greater consistency in design
* More formatting options
* Lightweight code
* Faster download times
* Search engine optimization benefits
* Ease of presenting different styles to different viewers
* Greater accessibility

*Hope you Enjoy it!!!*

📫Reach me At: My linkdin Profile https://www.linkedin.com/in/ambika-tone-95b720173?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BD9aFUgIoTJmJHevVQlE9CA%3D%3D
