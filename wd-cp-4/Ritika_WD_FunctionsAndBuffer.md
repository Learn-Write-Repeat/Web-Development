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
The output of the above code is -><br>

