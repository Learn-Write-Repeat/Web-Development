# ***Hello Everyone , Welcome*** :heart_eyes:

<br>

# **I am ***Ritesh Rathod***** :wink:
### My Social Handel :star:  [Linkedin](https://www.linkedin.com/in/ritesh-rathod-26054a183/) :star:
### You Can Contact me at rnrathod@mitaoe.ac.in

<br>

## Topic :- :pencil2: So Today we will be taking an overview of ***ID*** and ***Class Selectors*** :pencil2:

<br>

# :wrench: ***ID Selector*** :wrench:


- ID Selector is used to select element with the **unique** ID name that is having the ID attribute :ship:
- The ID selector uses the ID attribute in tag to select a specific element :oden:
- ID name should not be repeated in the document :bell:

- The ID of a element is unique in page , so the id selector is used to select one unique element :exclamation:
- To style the element  we start with **( # )** followed by ID name :trophy:

<br>

**For ex :-**

- In HTML Document we write :pencil2:

```` html
<div>
<p id="green"> Hello I am Ritesh </p>
</div>

````
- In CSS Doc to style that Particular DIV we write as follows :pencil2:

``` css

#green {
    color: green;
}
```
This will make the Paragraph tag text color to green 

<br> 

**[Ritesh_Code](Code/Ritesh_WD_ID_Code.md)
You can check the code in here** :link:

<br>

<br>

## **Case 2** :open_mouth:

## **What if we put same ID for different tags ??** :no_mouth:

<br>

In that case it will result in invalid code , and will not pass validation more chances that the page will malfunction.

You may think that it works for styling like giving same id to different elements changes the color of both tags but like when you want to select the ID or want to run any Function using that ID in that case it will through an error or will select the first ID that it matches and will create an greater chances of Malfunction

<br>

**For ex :-**

If I want to modify the text by using ID with the help of ***JAVASCRIPT*** :pencil2:

```html
<div>
    <p id="change">Hello Everyone </p>
    <p id="change"> My name is </p>
</div>
```
Then if I want to change ' my name is ' to ' Ritesh ' then I will write an script :pencil2:

``` html
<script>
  document.getElementById('change').innerHTML = "Ritesh";
</script>
```
Then in this case it will change the first ID tag not the second one  :punch:

<br>

**[Ritesh_Code](Code/Ritesh_WD_ID_Code.md)
You can check the code in here** :link:

<br>
<br>
<br>

## *Now Let's Take a look on* :hushed:

<br>

# :snowman:***Class Selector*** :snowman:

- Class selector are used when we want to style more that one object :cyclone:
- Multiple elements in the document can have same class :mega:
- A single element can also have multiple class seperated by space :loop:
- Class selector can start with letter , (-)Hyphen or ( _ ) underscore :flushed:
- We define the class selector in CSS document by ( . ) followed by name :zap:

<br>

**For ex :-**

In HTML document we write :pencil2:

``` html
<div>
    <p class="red"> Hello my name is Ritesh </p>
</div>
```

To style this in CSS we write :pencil2:

```css
.red{
    color:red;
}
```
Then it will change the text color to Red :rose:



We can also give same class name to different tags it will change their color too and will not affect the documrnt functionality becaus we can give same class to different tags 

<br>

**[Ritesh_Code](Code/Ritesh_WD_ID_Code.md)
You can check the code in here** :link:

<br>
<br>

## **Case 2** :grinning:
We can also make it like only specific element should be affected by class :confused:

**For ex :-**

In HTML document we write :pencil2:

``` html
<div>
    <p class="blue"> Hello </p>
    <span class="blue"> Everyone , I am Ritesh </span>
</div>
```
So in this case if we want to change the color of only 1st element then we will write :pencil2:

``` css
p.blue{
    color:blue;
}
```
This will only make the text of Paragraph tag as blue :sunglasses:

<br>

**[Ritesh_Code](Code/Ritesh_WD_ID_Code.md)
You can check the code in here** :link:

<br>
<br>

## **Case 3** :tada:

Now we will learn to use multiple class for same tag :volcano:

**For ex :-**

If we want to change the color and font size of the text so for that 

In HTML document we can write :pencil2:

```html
<div>
    <p class="red size"> Hello Everyone , I am new to Open Source </p>
</div>
```
The CSS style for this would be :pencil2:

```css
.red{
    color:red;
}

.size{
    font-size: 20px;
}
```
The Result of this will change the color and size of the P tag

<br>

**[Ritesh_Code](Code/Ritesh_WD_ID_Code.md)
You can check the code in here** :link:

<br>

<br>

## ***Thank You For Reading***:innocent:
## ***Hope You Enjoyed it*** :bangbang:




