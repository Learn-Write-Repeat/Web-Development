<h2>Well hello there my Gorgeous friends on the internet 🌏.</h2>
<hr/>
<h2>let me introduce my self first! My name is pawan and <br/>Thats it! <br/>Just kidding. You can Find me Here -> <a href="https://pavandeore.github.io">Portfolio</a></p><br/>
Okay. So what are we looking at 
</h2>
<h2>⚙ Topic : GRID - All Properties ⚙</h2>
<hr/>
<p>
<h3>What is GRID<br/></h3>
<h4>
CSS grid is a layout method that supports 2D system. Basically it can handle both columns and rows, if we consider our webpage layout in terms of columns and rows. CSS grid gives you more control on your layout, you can assign rules to the parent.
</h4>
<h4>
In this article you will get to know all the possible ways to use CSS grid in your website and we will acheive same output but with different approaches.
</h4>
</p>
<p>
<h4>We will be creating this layout.</h4>
<br/>
<img src="./Images/sample.png" />
<br/>
<h4>
Steps will be<br/><br/>
<ul>
<li>So visit <a href="https://www.jsbin.com">JSBin</a> or Create your Developement environment on the local computer. </li><br/>
<li>
Code:<br/>
<blockquote>
&lt;html&gt;<br/>
&lt;head&gt;<br/>
  &lt;meta charset="utf-8"&gt;<br/>
  &lt;meta name="viewport" content="width=device-width"&gt;<br/>
  &lt;title&gt;Grid Properties&lt;/title&gt;<br/>
  &lt;style&gt;<br/>
  .container &gt; div{<br/>
  background: lightgreen;<br/>
 }<br/>
.container{<br/>
  display: grid;<br/>
  grid-gap:10px;<br/>
  grid-template-columns: 100px 100px 100px;<br/>
  grid-template-rows: 100px 100px;<br/>
 }<br/>
 &lt;/style&gt;<br/>
&lt;/head&gt;<br/>
&lt;body&gt;<br/>

  &lt;div class="container"&gt;<br/>
    &lt;div class="a"&gt;1&lt;/div&gt;
    &lt;div class="b"&gt;2&lt;/div&gt;
    &lt;div class="c"&gt;3&lt;/div&gt;
    &lt;div class="d"&gt;4&lt;/div&gt;
    &lt;div class="e"&gt;5&lt;/div&gt;
    &lt;div class="f"&gt;6&lt;/div&gt;<br/>
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</blockquote>
</li><br/>
<li> We have root element Container which we set display property to Grid now grid in enabled on the element.
</li><br/>
<li>
We have six elment on the page and want to display like in output image.
</li><br/>
<li>Code Part
<blockquote>
.container{<br/>
  display: grid;<br/>
  grid-gap:10px;<br/>
  grid-template-columns: 100px 100px 100px;<br/>
  grid-template-rows: 100px 100px;<br/>
 }<br/>
</blockquote>
This will enable grid behaviour in container element. <kbd>grid-template-columns : 100px 100px 100px;</kbd> will create 3 columns of 100px in size. <kbd>grid-template-rows : 100px 100px;</kbd> will arrange those columns in 2 rows of 100px height;. <kbd>grid-gap</kbd> will provide gap in between elements.
</li><br/>
<li>
Instead of using it like this you can use this also,
<blockquote>
.container{<br/>
  display: grid;<br/>
  grid-gap:10px;<br/>
  grid-template: repeat(2,100px) / repeat(3, 100px);<br/>
 }<br/>
</blockquote>
well, I know that I want 2 rows and 3 columns of same size so I used <kbd>grid-template: row / column</kbd> Property here. Now consider repeat functions working like <kbd>repeat(how many times, how much size)</kbd>.
</li><br/>
</ul>
</h4>
</p>
<p>
<h4>Another example.  <br/>
</h4><br/>
<img src="./Images/template.png" />
</br>
</p>
<p>
<h4>We will create Same layout with different styles.</h4>
<h4>
1]
<ul>
<li>
Code: 
<blockquote>
&lt;html&gt;<br/>
&lt;head&gt;<br/>
  &lt;meta charset="utf-8"&gt;<br/>
  &lt;meta name="viewport" content="width=device-width"&gt;<br/>
  &lt;title&gt;Grid Properties&lt;/title&gt;<br/>
  &lt;style&gt;<br/>
  .container{<br/>
    display: grid;<br/>
    grid-gap:10px;<br/>
    grid-template-columns : repeat(3,1fr);<br/>
    grid-template-rows: 100px 200px 100px;<br/>
  }<br/>
  .header{<br/>
    background: lightgray;<br/>
    grid-column-start:1;<br/>
    grid-column-end:-1;<br/>
  }<br/>
  .menu{<br/>
    background: lightblue;<br/>
    grid-column:1 / 2;<br/>
  }<br/>
  .content{<br/>
    background: lightgreen;<br/>
    grid-column:2 / -1;<br/>
  }<br/>
  .footer{<br/>
    background: lightcoral;<br/>
    grid-column:1 / -1;<br/>
  }<br/>
 &lt;/style&gt;<br/>
&lt;/head&gt;<br/>
&lt;body&gt;<br/>
  &lt;div class="container"&gt;<br/>
    &lt;div class="header"&gt;Header&lt;/div&gt;<br/>
    &lt;div class="menu"&gt;Menu&lt;/div&gt;<br/>
    &lt;div class="content"&gt;Content&lt;/div&gt;<br/>
    &lt;div class="footer"&gt;Footer&lt;/div&gt;<br/>
  &lt;/div&gt;<br/>
&lt;/body&gt;<br/>
&lt;/html&gt;<br/>
</blockquote>
</li><br/>
<li>
For the Container styles you know very well what does repeat function means, template columns and rows as well. i.e. It will divide column into 3 parts with <kbd>1 fr</kbd> that is fraction of the available space in the grid container.
</li><br/>
<li>
Now we want <kbd>header</kbd> to flow full width so, used <kbd>grid-column-start:1</kbd> & <kbd>grid-column-end:-1</kbd>. remember -1 is for until the end. Same rules will be applicable for <kbd>footer</kbd> as well.
</li><br/>
<li>
For the <kbd>menu</kbd> we want this division only 1 column wide so we used <kbd>grid-column-start:1</kbd> & <kbd>grid-column-end:2</kbd>.
</li><br/>
<li>
For the <kbd>content</kbd> we want this division to continue from last used column side i.e. 2 so we used <kbd>grid-column-start:2</kbd> & <kbd>grid-column-end:-1</kbd>.
</li><br/>
<li>This is how we can implement design layout in structured format.</li><br/>
</ul>
</h4>

<h4>
2]
<ul>
<li>Code<br/>
<blockquote>
&lt;html&gt;<br/>
&lt;head&gt;<br/>
  &lt;meta charset="utf-8"&gt;<br/>
  &lt;meta name="viewport" content="width=device-width"&gt;<br/>
  &lt;title&gt;Grid Properties&lt;/title&gt;<br/>
  &lt;style&gt;<br/>
  .container{<br/>
    display: grid;<br/>
    grid-gap:10px;<br/>
    grid-template-columns : repeat(3,1fr);<br/>
    grid-template-rows: 100px 200px 100px;<br/>
    grid-template-areas : <br/>
      "h h h"<br/>
      "m c c"<br/>
      "f f f";<br/>
  }<br/>
  .header{<br/>
    background: lightgray;<br/>
    grid-area: h;<br/>
  }<br/>
  .menu{<br/>
    background: lightblue;<br/>
    grid-area: m;<br/>
  }<br/>
  .content{<br/>
    background: lightgreen;<br/>
    grid-area: c;<br/>
  }<br/>
  .footer{<br/>
    background: lightcoral;<br/>
    grid-area: f;<br/>
  }<br/>
 &lt;/style&gt;<br/>
&lt;/head&gt;<br/>
&lt;body&gt;<br/>
  &lt;div class="container"&gt;<br/>
    &lt;div class="header"&gt;Header&lt;/div&gt;<br/>
    &lt;div class="menu"&gt;Menu&lt;/div&gt;<br/>
    &lt;div class="content"&gt;Content&lt;/div&gt;<br/>
    &lt;div class="footer"&gt;Footer&lt;/div&gt;<br/>
  &lt;/div&gt;<br/>
&lt;/body&gt;<br/>
&lt;/html&gt;<br/>
</blockquote>
</li><br/>
<li>
Look into the styles of container<br/>
<blockquote>
  .container{<br/>
    display: grid;<br/>
    grid-gap:10px;<br/>
    grid-template-columns : repeat(3,1fr);<br/>
    grid-template-rows: 100px 200px 100px;<br/>
    grid-template-areas : <br/>
      "h h h"<br/>
      "m c c"<br/>
      "f f f";<br/>
  }<br/>
</blockquote><br/>
Here we can see we used new property <kbd>grid-template-areas</kbd> what this does actually it will let you create the visual representation structure of the template.<br/><br/>
So we divided our container into 3 parts with 1 fr width.<br/><br/> Now
First value  <kbd>h h h</kbd> means that for the 3 parts in 1st row <kbd>h</kbd> component will be present.<br/><br/>
On the 2nd row value <kbd>m c c</kbd> means 1 part of  <kbd>m</kbd> component and remaning 2 parts for the <kbd>c</kbd> component in the row.<br/><br/>

On the 3rd row value <kbd>f f f</kbd> means <kbd>f</kbd> component will display in 3 parts.
</li><br/>
<li>
We are supposed to assign component value to our required divisions using <kbd>grid-area</kbd> property. that we did in this part.<br/>
<blockquote>
.header{<br/>
    background: lightgray;<br/>
    grid-area: h;<br/>
  }<br/>
</blockquote><br/>
<blockquote>
  .menu{<br/>
    background: lightblue;<br/>
    grid-area: m;<br/>
  }<br/>
</blockquote><br/>
<blockquote>
  .content{<br/>
    background: lightgreen;<br/>
    grid-area: c;<br/>
  }<br/>
</blockquote><br/>
<blockquote>
  .footer{<br/>
    background: lightcoral;<br/>
    grid-area: f;<br/>
  }<br/>
</blockquote><br/>
</li>
</ul>

</h4>
</p>
<h5>If you prefer to learn grid by playing you can visit <a href="https://cssgridgarden.com/">CSS Grid Garden 🔗</a></h5>
<p>
Always change the values and play around with code, this will give you better understanding. 
</p>
<p>Thanks. 😄</p>