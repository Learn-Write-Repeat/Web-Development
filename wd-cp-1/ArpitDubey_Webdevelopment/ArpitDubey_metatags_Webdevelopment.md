# What is Metatag?
* HTML lets you specify metadata - additional important information about a document in a variety of ways. The meta elements can be used to include name/value pairs describing properties of the HTML document, such as author, expiry date, a list of keywords, document author etc.
* Meta tags always go inside the head element.
* Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.
* Metadata will not be displayed on the page, it is only read by computer.
## Attributes
|Sr.No | Attributes   |Description|
|---------|---------|---------- |
| 1  | Name | Specifies a name for the metadata |
| 2 | Content | Specify the actual meta content |
| 3 | Charset | Specifies the character encoding for HTML document |
| 4 | Scheme | Specifies a scheme to interpret the property's value (as declared in the content attribute).|
| 5 | Http-equiv | Provides an HTTP header for the information/value of the content attribute |
## Uses of metatag
#### Specifying your document's character encoding
```HTML
 1. <meta charset="utf-8">
```
This element specifies the document's character encoding — the character set that the document is permitted to use. utf-8 is a universal character set that includes pretty much any character from any human language. This means that your web page will be able to handle displaying any language.
#### Document  description
You can use <meta> tag to give a short description about the document. This again can be used by various search engines while indexing your webpage for searching purpose.
```HTML
<meta name="author" content="Chris Mills">
<meta name="description" content="The  Web Docs aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications.">
```
These two  meta elements  are useful to include on your page define the author of the page, and provide a concise description of the page.
#### Setting up Viewport 
The viewport is the user's visible area of a web page. It varies with the device - it will be smaller on a mobile phone than on a computer screen.
Let's look at an example:
```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).
The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.

