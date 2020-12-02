**What is CSS?**

CSS stands for Cascading Style Sheets
CSS describes how HTML elements are to be displayed on screen, paper, or in other media
CSS saves a lot of work. It can control the layout of multiple web pages all at once
External stylesheets are stored in CSS files

**Types Of CSS

1.Inline CSS : Inline CSS is used to style a specific HTML element. For this CSS style, you’ll only need to add the style attribute to each HTML tag, without using selectors.

This CSS type is not really recommended, as each HTML tag needs to be styled individually. Managing your website may become too hard if you only use inline CSS.

However, inline CSS in HTML can be useful in some situations. For example, in cases where you don’t have access to CSS files or need to apply styles for a single element only.
Let’s take a look at an example. Here, we add an inline CSS to the <p> and <h1> tag:

**Code**

<!DOCTYPE html>
<html>
<body style="background-color:black;">

<h1 style="color:white;padding:30px;">Hey there!! its Ambika</h1>
<p style="color:white;">Creative Minds</p>

</body>
</html>

2.Internal CSS : Internal or embedded CSS requires you to add <style> tag in the <head> section of your HTML document.

This CSS style is an effective method of styling a single page. However, using this style for multiple pages is time-consuming as you need to put CSS rules to every page of your website.

Here’s how you can use internal CSS:

Open your HTML page and locate <head> opening tag.
Put the following code right after the <head> tag

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
    padding: 60px;
} 
</style>
</head>
<body>

<h1>Hostinger Tutorials</h1>
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
