# :computer: ID Selector Code :computer:

- ## Case 1 :pushpin:
use of Id Selector :pencil2:

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ID Selector</title>
    <style>

            #green{
                color:green;
            }

    </style>
</head>
<body>

    <div>
        <p id="green"> Hello I am Ritesh </p>
    </div>
    
</body>
</html>
```
## OUTPUT :open_mouth:
<br>

<img src="../Images/id_selector_1.png" width="500px" height="150px">




**Click me to visit Theory File [Ritesh_WD_ID_CLASS](../Ritesh_WD_ID_CLASS.md)**

<br>


- ## Case 2 :pushpin:

Code when same ID is given to Different Tags :pencil2:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ID Selector -2 </title>

</head>

<body>

    <div>
        <p id="change"> Hello Everyone </p>
        <p id="change"> My name is </p>
    </div>

    <script>
        document.getElementById('change').innerHTML = "Ritesh";
    </script>

    <!-- This Script will change the First Id not the Second One -->
</body>

</html>
```

## OUTPUT :cyclone:
<br>

<img src="../Images/id_selector_2.png" width="500px" height="150px">

<br>

**Click me to visit Theory File [Ritesh_WD_ID_CLASS](../Ritesh_WD_ID_CLASS.md)**

<br>

# :star: Class Selector :star:

- ## Case 1 :pushpin:

Code to Show how to use class :pencil2:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class Selector -1 </title>
    <style>
        .red {
            color: red;
        }
    </style>
</head>

<body>

    <div>
        <p class="red"> Hello my name is Ritesh </p>
    </div>

</body>

</html>
```

## OUTPUT :open_mouth:
<br>

<img src="../Images/class_selector_1.png" width="500px" height="150px">

<br>

**Click me to visit Theory File [Ritesh_WD_ID_CLASS](../Ritesh_WD_ID_CLASS.md)**

<br>

- ## Case 2 :pushpin:

Code to make Changes to Specific element using class :pencil2:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class Selector -2 </title>
    <style>
        p.blue {
            color: blue;
        }
    </style>
</head>

<body>

    <div>
        <p class="blue"> Hello </p>
        <span class="blue"> Everyone , I am Ritesh </span>
    </div>

</body>

</html>
```

## OUTPUT:hushed:

<br>

<img src="../Images/class_selector_2.png" width="500px" height="150px">

<br>

**Click me to visit Theory File [Ritesh_WD_ID_CLASS](../Ritesh_WD_ID_CLASS.md)**

<br>

- ## Case 3 :pushpin:

Use of 2 different class for same tag :pencil2:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class Selector -3 </title>
    <style>
        .red {
            color: red;
        }
        
        .size {
            font-size: 20px;
        }
    </style>
</head>

<body>

    <div>
        <p class="red size"> Hello Everyone , I am new to Open Source </p>
    </div>

</body>

</html>
```

## OUTPUT :smile:

<br>

<img src="../Images/class_selector_3.png" width="500px" height="150px">

<br>

**Click me to visit Theory File [Ritesh_WD_ID_CLASS](../Ritesh_WD_ID_CLASS.md)**

<br>

<br>


## ***Thank You For Reading*** :innocent:
## ***Hope You Enjoyed it !!!***
