## Hi folks <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px"> In this Readme.md we will study functions and buffers :dolphin:

# Introducing Functions :heavy_check_mark:
A function is a block of code which is used to perform a particular function. In node.js, they are fully typed objects that can be manipulated, extended, and passed around as data.

#### Structure of a function ->
```
function functionName() {
   // function body
   // optional return; 
}
```

| Note: All functions return a value. In case a return value is not mentioned then the function returns undefined.

**For example-** <br>
```
function function1() { 
   return "hello"; 
} 
console.log(function1()); // hello

function function2() { 
} 
console.log(function2()); // undefined 

```
The output of the above code is :eyes: -> <br> <br>
<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606474363/function_vataor.png">
</p>

## Parameterized Functions :triangular_flag_on_post:
To declare parameters for a function, simply list them in the parentheses. <br>

**For example-** <br>

```
function display(name) {
     console.log("parameter is " + name);
}
display();
display("CSS", "HTML", 4);
```
The output of the above code is :eyes: -> <br> <br>
<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606475473/function1_luanv0.png">
</p>

| Note: If too few parameters are passed into a function call, the resulting variables are assigned the value undefined. If too many are passed in, the extras are simply unused.

## Functions Scope :straight_ruler:
Every time a function is called, a new variable scope is created. Variables declared in the parent scope are available to that function. Variables declared within a function are not available outisde it. <br>

**For example-** <br>

```
var value= 25 ;

function printValue() {
     var value = 30 ;
     console.log(value);
 }

printValue();
console.log(value);
```
The output of the above code is :eyes: -> <br> <br>
<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606475812/function2_sgfacp.png">
</p>

# Why Buffers are necessary? :hourglass:

JavaScript is Unicode-friendly but does not know how to handle binary data. Node.js works with TCP streams and needs to read and write a file which uses binary streams of data. Using *strings* in these cases was the first approach by many developers but later it caused many problems because of which buffers were introduced. <br> <br>

# Introducing Buffers :computer:
Buffer class in Node.js is used to handle raw binary data. It corresponds to memory outside V8 heap. Buffer object is a global object. It does not need **require** directive to import modules.

**For example -** <br>
The following code converts string "abcdef" into binary data and prints it to console -
```
var buf = Buffer.from('abcdef');
console.log(buf);
```
The output of the above code is :eyes: -> <br> <br>
<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606466409/buffer_vlbxt9.png">
</p>

## Let's Create Buffers :airplane:
There are a few ways to create buffers. <br>

#### Case 1 :pushpin:
Creating an empty buffer of length 20 -> <br>
```
var buf = Buffer.alloc(20);
console.log(buf);
// this is print 20 bytes of zero

```
The output of the above code is :eyes: -> <br> <br>
<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606466907/buffer1_o1idhe.png">
</p>

#### Case 2 :pushpin:
Creating an initialized buffer of length 10 -> <br>
```
var buf = Buffer.from([ 8, 6, 7, 5, 3, 0, 9, 1]);
console.log(buf);
// this is print 8 bytes of values mentioned

```
The output of the above code is :eyes:  -> <br> <br>
<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606467323/buffer2_lsmfse.png">
</p>

#### Case 3 :pushpin:
Creating a buffer from a given string -> <br>
```
var buf = Buffer.from("I'm a string!", "utf-8");
console.log(buf);
// this is print 8 bytes of values mentioned

```
The output of the above code is :eyes:  -> <br> <br>
<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606467639/buffer3_cwjggd.png">
</p>

## Writing to Buffers :pencil2:
We use the following syntax to write to buffers -> <br>
<p align ="center">
  buf.write(string[, offset][, length][, encoding])
</p>

- string − mentions string data to be written to buffer <br>
- offset − index of the buffer to start writing at (Default value is 0) <br>
- length − the number of bytes to write <br>
- encoding − Encoding to use. ('utf8' is the default encoding) <br>

#### Code :pushpin:

```
buf = Buffer.alloc(100);
len = buf.write("Simply Easy Learning");
console.log("Octets written : "+  len);
```

The output of the above code is :eyes: -> <br> <br>
<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606468321/buffer4_qhxc24.png">
</p>

## Reading from Buffers :blue_book:
We use the following syntax to read from buffers -> <br>
<p align ="center">
  buf.toString([encoding][, start][, end])
</p>
- encoding − Encoding to use. ('utf8' is the default encoding) <br>
- start − Beginning index to start reading (defaults to 0) <br>
- end − End index to end reading (default is complete buffer) 

#### Code :pushpin:

```
buf = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii', 0, 7));
```

The output of the above code is :eyes: -> <br> <br>
<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606468785/buffer5_kkyexk.png">
</p>

## Below are some buffer methods :star:

<br>

| Method :eyes: | Description :point_down: |
| :-------: | :----------: |
| compare() | compares two buffers |
| concat() | concatenates one buffer object to another |
| copy() | copies the speicfied number of bytes of a buffer |
| equals() | compares two buffers and returns true if matched |
| slice() | slices a buffer into a new buffer starting and ending at specified locations |
| toString() | converts a buffer to string |
| toJSON() | returns JSON of the buffer |
| values() | returns an array of values of a buffer |

<br> <br> <br> <br>

  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Written by [Ritika Agrawal](https://github.com/Ritika-Agrawal811/) :blush: <br>
  
   &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  I hope you gained some knowledge <br>
   
  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; and had fun reading this **Readme.md** <br>
  
  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Connect with me on [Twitter](https://twitter.com/RitikaAgrawal08). :smiley:

<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606381865/footer_upxevk.png" width="200%" height="120%">
 </p>
