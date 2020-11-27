## Hi folks <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px"> In this Readme.md we will study functions and buffers :dolphin:

JavaScript is Unicode-friendly but does not know how to handle binary data. Node.js works with TCP streams and needs to read and write a file which uses binary streams of data. Using *strings* in these cases was the first approach by many developers but later it caused many problems because of which buffers were introduced.

# Buffers
Buffer class in Node.js is used to handle raw binary data. It corresponds to memory outside V8 heap. Buffer object is a global object. It does not need **require** directive to import modules.

**For example -** <br>
The following code converts string "abcdef" into binary data and prints it to console -
```
var buf = Buffer.from('abcdef');
console.log(buf);
```
The output of the above code is -> <br> <br>
<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606466409/buffer_vlbxt9.png">
</p>

## Let's Create Buffers
There are a few ways to create buffers. <br>

#### Case 1 
Creating an empty buffer of length 20 -> <br>
```
var buf = Buffer.alloc(20);
console.log(buf);
// this is print 20 bytes of zero

```
The output of the above code is -> <br> <br>
<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606466907/buffer1_o1idhe.png">
</p>

#### Case 2 
Creating an initialized buffer of length 10 -> <br>
```
var buf = Buffer.from([ 8, 6, 7, 5, 3, 0, 9, 1]);
console.log(buf);
// this is print 8 bytes of values mentioned

```
The output of the above code is -> <br> <br>
<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606467323/buffer2_lsmfse.png">
</p>

#### Case 3 
Creating a buffer from a given string -> <br>
```
var buf = Buffer.from("I'm a string!", "utf-8");
console.log(buf);
// this is print 8 bytes of values mentioned

```
The output of the above code is -> <br> <br>
<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606467639/buffer3_cwjggd.png">
</p>

## Writing to Buffers
We use the following syntax to write to buffers -> <br>
<p align ="center">
  buf.write(string[, offset][, length][, encoding])
</p>

- string − mentions string data to be written to buffer <br>
- offset − index of the buffer to start writing at (Default value is 0) <br>
- length − the number of bytes to write <br>
- encoding − Encoding to use. ('utf8' is the default encoding) <br>

#### Code

```
buf = Buffer.alloc(100);
len = buf.write("Simply Easy Learning");
console.log("Octets written : "+  len);
```

The output of the above code is -> <br> <br>
<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606468321/buffer4_qhxc24.png">
</p>

## Reading from Buffers
We use the following syntax to read from buffers -> <br>
<p align ="center">
  buf.toString([encoding][, start][, end])
</p>
>
- encoding − Encoding to use. ('utf8' is the default encoding) <br>
- start − Beginning index to start reading (defaults to 0) <br>
- end − End index to end reading (default is complete buffer) 

#### Code

```
buf = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii', 0, 7));
```

The output of the above code is -> <br> <br>
<p align="center">
<img src="https://res.cloudinary.com/djix6uusx/image/upload/v1606468785/buffer5_kkyexk.png">
</p>
