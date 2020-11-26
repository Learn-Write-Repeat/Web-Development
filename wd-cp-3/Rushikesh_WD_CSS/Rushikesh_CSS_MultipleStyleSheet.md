<p align="center">
  <h1 align="center"><b>Hi there, I'm <a href="https://www.github.com/imrushikesh">Rushikesh!</a></b>
  <img src="https://media.giphy.com/media/z24q9PQNlw19u/giphy.gif" width = "80px" height = "50px"/>
   <a  href="https://www.linkedin.com/in/rushikesh-patil-1a3937189"><img  src="https://icons8.com/vue-static/landings/animated-icons-new/icons/material-filled/linkedin-bounce/linkedin-bounce.gif" width = "50px" height = "50px"/></a>
    <a href="mailto:rushipatil241297@gmail.com"><img  src="https://icons8.com/vue-static/landings/animated-icons-new/icons/ios-glyph/open-letter/open-letter.gif" width = "50px" height = "50px"/></a>
    <!--     <a href="mailto:rushipatil241297@gmail.com"><img  src="https://image.flaticon.com/icons/png/512/104/104069.png" width = "40px" height = "40px"/></a> -->
  </h1>
</p>



  <p align="center">
  <h2 align="center"><b>📜 Introduction to CSS 📜 </b></h2>
 <p align="center">
Cascading Style Sheet Control look and feel of Web Pages. We use it to style  HTML documents and to display its element more creatively. Basically, it gives life to HTML Structure. 
</p>
</p>

*** 
<details>
  <summary markdown="span"> CSS Topics 📁  </summary>

1. CSS Version History.<a href="Rushikesh_CSS_Vhistory.md">👉</a>
2. External Style Sheet using Multiple Style Sheets.<a href="#multiple">👇</a>
3. Value Lengths and Percentages.<a href="Rushikesh_CSS_ValueLenPer.md">👉</a>

</details>

***

<img align="right" width="350px" height="250px" alt="GIF" src="https://image.freepik.com/free-vector/it-professionals-are-creating-web-site-laptop-screen-illustration_335657-296.jpg" />


<p aligh="left">
📝 <i>Browser Detects CSS from Webpage and Format html according to CSS and the way they are Linked.There are Number of ways to insert CSS into HTML Document.</i>

- Types of Style Sheets (Based on Ways of Inserting CSS) -
  - Inline CSS.  
  - Internal CSS.
   - External CSS.
   - Multiple CSS.
   

</p>

***

<P align="center" id="multiple"><b><i>Topic 2 : External Style Sheet using Multiple Style Sheets.</i><b></p>
  
***


✔️ Inline CSS - 

- Inline / embedded style is placed inside html tags.
- Applied to Each individual element.
- Used to style only single HTML page or section.
- Highest Priority than Internal and external CSS.

📝 Example -

🖊️ Inside HTML body -
```html
<p style="color:blue;text-align:Left;">This is Example of Inline CSS.</p>

```
📄 Output -

<p align="left"><img alt="inline CSS ex" src="InlineEx.png"></p>


***

✔️ Internal CSS - 

- Internal CSS is placed inside html `<style>` tag.
- `<style>` tag containing CSS placed inside `<head>`  section.
- Used to style only single HTML page or section.
- Highest Priority than External CSS and Lower than Inline CSS.

📝 Example -

🖊️ Inside HTML head -
```html
<head>
<style>
h5 {
  color: DodgerBlue;
  text-align:center;
  text-decoration: overline dashed SlateBlue;
}
h6 {
  color: SlateBlue;
  text-align:center;
  text-decoration: underline dashed DodgerBlue;
}
</style>
</head>

```
🖊️ Inside HTML body -

```html
<h5>This is Example 1 of Internal CSS.</h5>

<h6>This is Example 2 of Internal CSS.</h6>

```

📄 Output -

<!-- <h5 style="color:DodgerBlue;text-align:center;text-decoration: overline dashed SlateBlue;">This is Example 1 of Internal CSS.</h5>

<h6 style="color:SlateBlue;text-align:center; text-decoration: underline dashed DodgerBlue;">This is Example 2 of Internal CSS.</h6> -->
<p align="center"><img  alt="internal css ex." src="internalEx.png"></p>

*** 

✔️ External CSS - 

- External CSS is linked to HTML document using `<link>`.
- Used to style Complete HTML Document Easily.
- Single External File contains all styles of HTMl document. 
- `.css` Extension is used for External CSS file. Any Text/Code editor can be used to write External CSS (ex. VS code, Brackets, Atom)
- Lowest Priority than Internal and external CSS.

📝 Example -

🖊️ Link External CSS inside head -

```html
<head>
<link rel="stylesheet" href="style.css">
</head>

```
🖊️ Inside External CSS File -

```css

h6 {
 color: MidnightBlue;
 text-align:center;
 text-decoration: underline wavy OrangeRed;
}

```
🖊️ Inside HTML Body

```html

<h6>This is example of External CSS</h6>
```


📄 Output -

<!-- <h6 style="color:MidnightBlue;text-align:center;text-decoration: underline wavy OrangeRed;">This is example of External CSS.</h6> -->

<p align="center"><img alt="External CSS ex" src="external.png"></p>




***

 
<p align="center"><i>Note: Priority - Inline CSS > Internal CSS > External  CSS</i> </p>

***

✔️ External Style Sheet using Multiple Style Sheets - 

- External CSS is linked to HTML document using `<link>`.
- Used to style Complete HTML Document.
- Multiple External Files contains all style of HTMl document. 
- `.css` Extension is used for External CSS file. Any Text/Code editor can be used to write External CSS (ex. VS code, Brackets, Atom)
- Used to Organize and style Large HTML document.(ex. Separate Style for Desktop and Mobile View of same Website)
- Priority Depends on Last Declared Style Sheet.

✔️ ***External Style sheet can be used in two ways:***

1. Case I - Placing Internal and External Style Sheet in Same document. 
2. Case II - Linking 2 Separate Style Sheet in Same Document. 

>In both Cases If Same element, class, or id is declared then priority depends on the last declared style sheet. Example <a href="Rushikesh_CssCode_MultipleStyleSheet.md">👉</a> 

📝 Multiple External CSS Files Example -

🖊️ Link External CSS inside head -

```html
<head>
<link rel="stylesheet" href="styleFirst.css">
<link rel="stylesheet" href="styleSecond.css">
</head>

```
🖊️ Inside `styleFirst.css` External CSS File -

```css

h5 {
 color: MidnightBlue;
 text-align:center;
 text-decoration: overline wavy OrangeRed;
}

```
🖊️ Inside `styleSecond.css` External CSS File -

```css

h6 {
 color: MidnightBlue;
 text-align:center;
 text-decoration: underline wavy OrangeRed;
}

```
🖊️ Inside HTML Body

```html
<h5>This is example of Multiple External CSS. (styleFirst.css)</h5>
<h6>This is example of Multiple External CSS. (styleSecond.css)</h6>
```


📄 Output -

<!-- <h5 style="color:MidnightBlue;text-align:center;text-decoration: overline wavy OrangeRed;">This is example of Multiple External CSS. (styleFirst.css)</h5>
<h6 style="color:MidnightBlue;text-align:center;text-decoration: underline wavy OrangeRed;">This is example of Multiple External CSS. (styleSecond.css)</h6> -->

<p align="center"><img alt="multiple CSS ex" src="multiple.png"></p>

***
<p align="center">Example on Multiple Style Sheet <br><a href="Rushikesh_CssCode_MultipleStyleSheet.md"><img src="https://image.flaticon.com/icons/png/128/130/130871.png?ga=GA1.2.454436195.1606303868" width="30px" height="30px"/></a></p>

***


<img align="right" height="175px" alt="GIF" src="https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif"/>


<p align="left">
  
- Additional Information -
  - 🔗 The World Wide Web Consortium (W3C) [Official Website.](https://www.w3.org)
   - 🔗  CSS Official [Website.](https://www.w3.org/Style/CSS/)
   - 🔗 CSS Current [Work Page.](https://www.w3.org/Style/CSS/current-work)
   - 🔗 CSS Official [Working Group.](https://www.w3.org/Style/CSS/members)
   
   
   

<p align="center">
  <h2 align="center"><i>😍 Thank You 🙏 Contact -</i></h2> 
  
 <p align="center"> <a  href="https://www.github.com/imrushikesh"><img  src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" width = "50px" height = "50px"/></a>
<a  href="https://www.linkedin.com/in/rushikesh-patil-1a3937189"><img  src="https://icons8.com/vue-static/landings/animated-icons-new/icons/material-filled/linkedin-bounce/linkedin-bounce.gif" width = "50px" height = "50px"/></a>
<a href="mailto:rushipatil241297@gmail.com"><img  src="https://icons8.com/vue-static/landings/animated-icons-new/icons/ios-glyph/open-letter/open-letter.gif" width = "50px" height = "50px"/> </a></p>
<!--    <a href="mailto:rushipatil241297@gmail.com"><img  src="https://image.flaticon.com/icons/png/512/104/104069.png" width = "40px" height = "40px"/></a> -->
      
  
      
</p>
 
 ***
 
 
