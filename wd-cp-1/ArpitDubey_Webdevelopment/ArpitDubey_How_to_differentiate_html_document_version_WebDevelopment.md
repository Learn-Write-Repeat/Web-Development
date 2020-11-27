# Doctype
A doctype or document type declaration is an instruction which tells the web browser about the markup language in which the current page is written. The Doctype is not an element or tag, it lets the browser know about the version of or standard of HTML or any other markup language that is being used in the document.</br>
It declares at the top of webpage before all other elements.</br>
The DOCTYPE for HTML5 is case-insensitive and can be written as shown below:
```HTML
< !DOCTYPE html >
```
# Doctype Usage
The document type definition (DTD) is responsible for specifying the rules for the Standard Generalized Markup Language(SGML) so that the browser processes the content correctly. But in the HTML version, HTML 5 there isn’t any need of a reference to a document type definition (DTD) because HTML 5 is not based on a Standard Generalized Markup Language(SGML).
</br>
**Some Doctype declaration for differenet version of HTML**</br>
1.**HTML 5** :
```HTML
<!DOCTYPE html> 
```
2.**HTML 4.01 Strict** :
In HTML 4.01 Strict document type definition (DTD) all those elements and attributes are included that do not appear in frameset documents or that have not been deprecated.
```HTML
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" 
   "http://www.w3.org/TR/html4/strict.dtd"> 
```
3.**HTML 4.01 Transitional** :
In HTML 4.01 Transitional document type definition (DTD) allows some older PUBLIC and attributes that have been deprecated.
```HTML
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
   "http://www.w3.org/TR/html4/loose.dtd"> 
 ```
4.**HTML 4.01 Frameset** :
In HTML 4.01 Frameset document type definition (DTD),Frames can be used.
```HTML
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" 
   "http://www.w3.org/TR/html4/frameset.dtd"> 
 ```
**Supported Browsers:** The browser supported by <!DOCTYPE > tag are listed below :

* Google Chrome
* Internet Explorer
* Firefox
* Opera
* Safari
