<p align="center">
  <h1 align="center"><b>Hi there, I'm <a href="https://www.github.com/imrushikesh">Rushikesh!</a></b>
  <img src="https://media.giphy.com/media/z24q9PQNlw19u/giphy.gif" width = "80px" height = "50px">
   <a  href="https://www.linkedin.com/in/rushikesh-patil-1a3937189"><img  src="https://icons8.com/vue-static/landings/animated-icons-new/icons/material-filled/linkedin-bounce/linkedin-bounce.gif" width = "50px" height = "50px"></a>
    <a href="mailto:rushipatil241297@gmail.com"><img  src="https://icons8.com/vue-static/landings/animated-icons-new/icons/ios-glyph/open-letter/open-letter.gif" width = "50px" height = "50px"></a>

  </h1>
</p>

  <p align="center">
  <h2 align="center"><b>📜 Introduction to Responsive Design 📜 </b></h2>
 <p align="center">
Responsive Design adapt itself to any  user device.Responsive design ensures that Web Design displays on desktops,Laptops and mobile-tablet devices is Standard,Flexible and User Friendly.
</p>
</p>

*** 
<details>
  <summary markdown="span"> Responsive Design Topics 📁  </summary>

1. Introduction to Responsive Design.<a href="Rushikesh_CSS_Resp.md">👉</a>
2. Responsive Design Breakpoints.<a href="Rushikesh_CSS_BreakResp.md">👉</a>
3. Media Queries.<a href="#Media">👇</a>

</details>

***

<img align="right" width="150px" height="100px" alt="GIF" src="https://media.giphy.com/media/9uI9QjE0xTQ4Us2ARS/giphy.gif" >

<p align ="left">

A Media query is a CSS3 feature. Using Media Query, A webpage can adapt its layout to different screen sizes and media types.
    
</p>

***

<P align="center" id="Media"><b><i>Topic : CSS Media Query. </i><b></p>
  
***

✔️ Introduction  - 

- Media queries introduced in CSS 3.
- It uses `@media` rule to Apply Certain CSS properties only if a Given condition is true.
- Breakpoints are defined using Media Queries. 
- Breakpoints are pixel values, those are defined in CSS by Designer/Developer.
- A transformation occurs,  When a responsive website reaches those pixel values.


***


✔️ Applying Media Queries  - 

1. First, define media queries with `@media` rule then include CSS rules inside the curly braces.
2. The `@media` rule used to specify CSS rules and target media types.

```css

@media () {
  // CSS rules
}

```
2. Media Types -
   - All  -  for all media types.
   - print  -  for Printers only.
   - screen -  for Computer screens, tablets and, Mobile Devices.
   - Speech - for Screen Readers.
3. Before Defining Breakpoints -
   - Research on most commonly used Devices and screen size of those Devices.
   - <i> More about Breakpoints.</i> <a href="Rushikesh_CSS_BreakResp.md">👉</a>

***
Example -

In CSS File -

```CSS
      * {
            box-sizing: border-box;
        }
        
        body {
            background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);
        }
        
        .left {
            float: left;
            width: 50%;
        }
        
        .right {
            padding: 20px;
            float: left;
            width: 50%;
            align-items: center;
            height: 400px;
            text-align: center;
            color: white;
        }


        /* Media Query for mobile */
        
        @media screen and (max-width:600px) {
            .left,
            .right {
                width: 100%;
            }
        } 
```

In Html Body -

```html
  <div class="left">
        <img src="webd1.png" alt="illustration" style="width: 100%;">
    </div>
    <div class="right ">
        <h1>Web Development</h1>
        <h3><i>Things you need to learn - </i></h3>
        <p>HTML</p>
        <p>CSS</p>
        <p>Javascript</p>
        <p>PHP</p>
        <p>SQL</p>
        <p>CMS</p>
        <p></p>
        <p>Domain & Hosting</p>
    </div>
```


Output For Desktop -

<P align="center"><img alt="Desktop Output" src="output_desktop.png"></p>
Output For Mobile -
<P align="center"><img alt="Mobile Output" src="output_mobile.png" width= "200px"></p>



***

<img align="right" height="150px" alt="GIF" src="https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif">


<p aligh="left">
  
- Additional Information -
  - 🔗  CSS Official [Website.](https://www.w3.org/Style/CSS/)
  - 🔗 [ CSS Box-Model.](https://www.w3.org/TR/CSS22/box.html)
  - 🔗 [CSS Media Queries.](https://www.w3.org/TR/css3-mediaqueries/)
   - 🔗 MDN Web Docs- [Media queries.](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

***

<p align="center">
  <h2 align="center"><i>😍 Thank You 🙏 Contact -</i></h2> 
  
 <p align="center"> <a  href="https://www.github.com/imrushikesh"><img  src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" width = "50px" height = "50px"/></a>
<a  href="https://www.linkedin.com/in/rushikesh-patil-1a3937189"><img  src="https://icons8.com/vue-static/landings/animated-icons-new/icons/material-filled/linkedin-bounce/linkedin-bounce.gif" width = "50px" height = "50px"/></a>
<a href="mailto:rushipatil241297@gmail.com"><img  src="https://icons8.com/vue-static/landings/animated-icons-new/icons/ios-glyph/open-letter/open-letter.gif" width = "50px" height = "50px"/> </a></p>
    
</p>
 

 ***
 
 
