<h2>Well hello there my Gorgeous friends on the internet 🌏.</h2>
<hr/>
<h2>let me introduce my self first! My name is pawan and <br/>Thats it! <br/>Just kidding. You can Find me Here -> <a href="https://pavandeore.github.io">Portfolio</a></p><br/>
Okay. So what are we looking at 
</h2>
<h2>⚙ Topic : Introduction to CSS GRID ⚙</h2>
<hr/>
<p>
<h3>What is CSS grid?</h3>
<h4>CSS grid is a layout method that supports 2D system. Basically it can handle both columns and rows, if we consider our webpage layout in terms of columns and rows. CSS grid gives you more control on your layout, you can assign rules to the parent.
</h4>
<h4>
So basically what we do in CSS Grid is actually divide our design components into rows and columns. with the help of GRID we can design complex structures in simple manner.
</h4>
<h4>
Okay so.
Take a look at this layout. We will try to understand GRID working by building this layout.<br/>
<img src="./Images/layout.png" /><br/>
 We are going to build this layout.
</h4>
<h4>
Steps will be<br/><br/>
<ul>
<li>So visit <a href="https://www.jsbin.com">JSBin</a> or Create your Developement environment on the local computer. </li><br/>
<li>Initially there will be 2 tabs open i.e. <kbd>html</kbd> and <kbd>output</kbd> Part. click on the <kbd>css</kbd>. Your screen should look like this.<br/>
<img src="./Images/environment.png" />
<br/> 
</li><br/>
<li>
Okay. copy this code first, I will expalin in upcoming points.
<blockquote>
&lt;html&gt;<br/>
&lt;head&gt;<br/>
  &lt;meta charset="utf-8"&gt;<br/>
  &lt;meta name="viewport" content="width=device-width"&gt;<br/>
  &lt;title&gt;CSS Grid&lt;/title&gt;<br/>
  &lt;style&gt;<br/>
  .container{<br/>
  display: grid;<br/>
  grid-template-columns : 25% 25% 25% 25%;<br/>
  grid-template-rows: 50px 100px 50px;<br/>
  }<br/>
  nav{<br/>
    grid-column-start:1;<br/>
    grid-column-end:-1;<br/>
    background:pink;<br/>
  }<br/>
  main{<br/>
    grid-column-start:1;<br/>
    grid-column-end:4;<br/>
    background: orange;<br/>
  }<br/>
  aside{<br/>
    grid-column-start:4;<br/>
    grid-column-end:-1;<br/>
    background: lime;<br/>
  }<br/>
  footer{<br/>
    grid-column-start:1;<br/>
    grid-column-end:-1;<br/>
    background:lightblue;<br/>
  }<br/>
  &lt;/style&gt;<br/>
&lt;/head&gt;<br/>
&lt;body&gt;<br/>
&lt;div class="container"&gt;<br/>
  &lt;nav&gt;This is navigation part.&lt;/nav&gt;<br/>
  &lt;main&gt;This is Body part. &lt;/main&gt;<br/>
  &lt;aside&gt;This is aside (Ads Part).&lt;/aside&gt;<br/>
  &lt;footer&gt;This is Footer part.&lt;/footer&gt;<br/>
&lt;/div&gt;<br/>  
&lt;/body&gt;<br/>
&lt;/html&gt;<br/>
</blockquote>
</li><br/>
<li>
As you can see First at the ROOT level Only one element is there i.e. <kbd>Container</kbd> in the stylings I made its display property to Grid. Which enables Grid behaviour on this element.
<blockquote>
.container{<br/>
  display: grid;<br/>
  grid-template-columns : 25% 25% 25% 25%;<br/>
  grid-template-rows: 50px 100px 50px;<br/>
  }<br/>
</blockquote>
Four times I used 25% it means create 4 column structure with equal width, and in the rows i have used 50px 100px 50px it means give height to the 3 respective rows.
</li><br/>
<li>
Now I will explain the <kbd>nav</kbd> the same rule follows for remaining sections.
<blockquote>
nav{<br/>
    grid-column-start:1;<br/>
    grid-column-end:-1;<br/>
    background:pink;<br/>
  }<br/>
</blockquote>
So as per our layout I want navigation to cover whole width i.e. we have divided our <kbd>continer</kbd> into 4 columns right?. Now I will tell my <kbd>nav</kbd> to cover from <kbd>grid-column-start:1</kbd> to <kbd>grid-column-end:-1;</kbd>. -1 nothing but go until the END.
</li><br/>
<li>Same concept will be applicable for remaining elements.<br/>
Example<br/>
I want my Body part extend till 4th side and Ads part from the 4th to end. I will write.
<blockquote>
  main{<br/>
    grid-column-start:1;<br/>
    grid-column-end:4;<br/>
    background: orange;<br/>
  }<br/>
  aside{<br/>
    grid-column-start:4;<br/>
    grid-column-end:-1;<br/>
    background: lime;<br/>
  }<br/>
</blockquote>
</li><br/>
<li>
Overall your final code should look like this.
<br/>
<img src="./Images/final.png" />
<br/>
</li><br/>
</ul>
</h4>
</p>
<p>
Always change the values and play around with code, this will give you better understanding. 
</p>
<p>
<a href="../Pawan_WD_GRID_PROPERTIES/Pawan_WD_GRID_PROPERTIES.md">Click here to get more Information about Grid Properties 🔗</a>
</p>
<p>Thanks. 😄</p>