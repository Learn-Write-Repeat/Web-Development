# HISTORY OF HTML

HTML was created by [***Sir Tim Berners-Lee***](https://en.wikipedia.org/wiki/Tim_Berners-Lee) in late 1991 but was not released officially, published in 1995 as HTML 2.0. HTML 4.01 was published in late 1999 and was a major version of HTML.

<!-- ![](download.jpg) -->

HTML is a very evolving markup language and has evolved with various versions updating. Long before its revised standards and specifications are carried in, each version has allowed its user to create web pages in a much easier and prettier way and make sites very efficient.

> - ***HTML 1.0*** was released in 1993 with the intention of sharing information that can be readable and accessible via web browsers. But not many of the developers were involved in creating websites. So the language was also not growing.

> - Then comes the ***HTML 2.0***, published in 1995, which contains all the features of HTML 1.0 along with that few additional features, which remained as the standard markup language for designing and creating websites until January 1997 and refined various core features of HTML.

> - Then comes the ***HTML 3.0***, where Dave Raggett who introduced a fresh paper or draft on HTML. It included improved new features of HTML, giving more powerful characteristics for webmasters in designing web pages. But these powerful features of new HTML slowed down the browser in applying further improvements.

> - Then comes ***HTML 4.01***, which is widely used and was a successful version of HTML before HTML 5.0, which is currently released and used worldwide. HTML 5 can be said for an extended version of HTML 4.01, which was published in the year 2012.

> - ***HTML5*** – Proposed Recommendation and Recommendation
In September 2014, W3C moved HTML5 to Proposed Recommendation.
On 28 October 2014, HTML5 was released as a stable W3C Recommendation, meaning the specification process is complete.

 
|Year | Version |
| --- | :-----------: |
| 1989 | Tim Berners-Lee invented www |
| 1991 | Tim Berners-Lee invented HTML |
| 1993 | Dave Raggett drafted HTML+ |
| 1995 | HTML Working Group defined HTML 2.0 |
| 1997 |HTML 3.2 |
| 1999 | HTML 4.01 |
| 2000 |  XHTML 1.0 |
| 2008 | WHATWG HTML5 First Public Draft |
| 2012 | [WHATWG HTML5 Living Standard](https://html.spec.whatwg.org/multipage/) |
| 2014 | [HTML5](https://html.spec.whatwg.org/) |
| 2016 | HTML 5.1 |
| 2017 |  [HTML5.1 2nd Edition](https://www.w3.org/TR/html51/)|
| 2017 | [ HTML5.2](https://www.w3.org/TR/html52/) |


<br>

# A simple text editor is all you need to learn HTML #

## Learn HTML Using Notepad or TextEdit ##

* Learn HTML Using Notepad or TextEdit.
* However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).
* We believe in that using a simple text editor is a good way to learn HTML.
* Follow the process below to create your first web page with Notepad or TextEdit.

***Process 1 For Window users :*** 
<br>
Firstly, open your **Notepad .**

**Steps** for Windows 8 or Later versions

*  Open the **Start Screen** (the window symbol at the bottom left on your screen). 
* Type **Notepad**.

**Steps** for Windows 7 or  earlier versions

**Open Start** 
* Click on Programs 
* Then click on Accessories 
* And then **Notepad**

***Process 1 For Mac users :*** 
Firstly, Open Finder 
* And then click on Applications
*  and then TextEdit

Also change some preferences to get the application to save files correctly. In **Preferences** > **Format** > choose "**Plain Text**"

Then under "Open and Save", check the box that says "Display HTML files as HTML code instead of formatted text".

*Then open a new document to place the code*

***Process 2***

* Write the code in your *Notepad* mentioned in the picture below.



![](https://www.w3schools.com/html/img_notepad.png)
* The !DOCTYPE html declaration defines that this document is an HTML5 document
* The html element is the root element of an HTML page
* The head element contains meta information about the HTML page
* The title element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
* The body element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
* The h1 element defines a large heading
* The p element defines a paragraph

<br>

***Process 3***

* Click on *files*
* And then click on *Save As*
* Name the file as *file_name.html*
* And set encoding to *UTF-8*.
* And finally **Save your work**

![](https://www.w3schools.com/html/img_saveas.png)


***Process 4***

* Cpoy your URL code and paste into your browser.

![](https://www.w3schools.com/html/img_chrome.png)

**<span style="color:red">Bingo....!!!** you made it :smile: :smile:

* Here's your first HTML page.

<br>

# HTML Tag And Attributes 

## Elements and Tags

> - An HTML element is usually composed by two tags: the opening tag and the closing tag. An opening tag consists of the element's name encolsed by the lesser-than "<" and greater-than ">" signs. The closing tag is constructed like the opening tag but, in this case, the element's name is preceded by a slash ("/"). In the following example, you'll see the opening and closing tags for the <"b"> element.

> - Be aware that elements aren't tags. Elements are represented by tags in the code. Yet they are usually considered, erroneously, the same thing.



> - ***<'b>Important text<'/b>*** As you can see, there's the opening tag (<'b>) and the closing tag (<'/b>). Now, the text you see in the middle, "Important text", is known as the element's content. As you progress in your learning of this language, you'll see that some elements are not supposed (and not allowed) to have content. These are the empty elements.

> - Each one of the many elements in HTML5 has a specific and particular purpose. Some of them are exclusively semantic, others have an impact in the document rendering and some both.

> - In addition to tags and content, an element can have attributes and events. While attributes define values or properties to be used by browsers in the processing of the document, events can be employed to specify behaviors or actions to be performed when certain conditions are met, like for example, when the users clicks the element.

> - Attributes and events share a common syntax: they must be inserted as a list of space-separated items inside the star tag, after the element's name and preceded by a space. Each one of these items is composed by a name (for the attribute or event), the equal sign ("=") and the value or function (sometimes optionally) enclosed by quotes. The following example shows a <'b> element with one attribute (style) and one event (onclick).
## Click here to view the code :point_right: [Elements and Tags](wd-cp-1\Chetan_WD_IntroToHtmlCode.md)

## CONTENT

The content of an element is, generally speaking, whatever falls inbetween its opening and closing tags. Depending on the element, this can go from absolutely nothing to a piece of HTML document. This content is what will be affected by the element's functionality or meaning. For example, the <'em><em> element grants its content emphasis, and browsers usually display its text with a particular font style to make it stand out from regular text.

* Some elements, known as empty elements, aren't allowed to have content and their declaration consist only of the opening tag with any number of attributes and events.

In the following example are three elements each containing a different type of content: the paragraph (<'p> element), cointaining other elements; a word with emphasis (<'em> element), containing plain text; and a button (input (type=button) element), which is an empty element, code line 20

## Attributes

> - Attributes are the way authors have to define properties for an element. These properties usually change the way a browser interpret the element, by changing its meaning or presentation. For example, the <'a> [element](https://www.htmlquick.com/reference/tags/a.html) inserts a link in the document, but the <b>rel</b> *attribute states the relationship between the current document (the one containing the link) and the destination resource (the one the link is pointing to).*

> - Many of the attributes in HTML5, the ones known as [global attributes](https://www.htmlquick.com/reference/attributes.html), are available for all elements in the standard. But most elements have also a set of specific attributes that are only available or specifically adapted for them.

> - As we already saw in previous examples, attributes are declared by stating their name, followed by an equal sign ("=") and the assigned value enclosed by quotes. But some attributes, which can only take boolean values (true or false), apply their value just with their presence. In these cases, attributes can be declared just by stating their name.

> - In the following example, the [<'button> element](https://www.htmlquick.com/reference/tags/button.html) has three attributes present: <b>id and acceskey</b>, which are [global attributes](), and disabled (boolean), which isn't global but is shared by a particular group of element

## Click here to view the code :point_right: [Contents and Attributes](wd-cp-1\Chetan_WD_IntroToHtmlCode.md)

All HTML elements can have attributes
> - The href attribute of <'a> specifies the URL of the page the link goes to
> - The src attribute of <'img> specifies the path to the image to be displayed
> - The width and height attributes of <'img> provide size information for images
> - The alt attribute of <'img> provides an alternate text for an image
> - The style attribute is used to add styles to an element, such as color, font, size, and more
> - The lang attribute of the <'html> tag declares the language of > - the Web page
> - The title attribute defines some extra information about an element


## EVENTS

> - Events are a mechanism provided by the HTML standard, designed to allow authors to execute scripts in their web pages in response to user or system interaction. The purpose of an event is to associate an action, performed by the user or by the system (like, for example, when the user clicks an element or the document has finished loading), with a function or script, written in a client-side language.

> - The syntax used to declare an event is very similar to the attributes' syntax and consists of: the name of the event followed by an equal sign ("=") and the function or script enclosed by quotes.

In the following example, we'll insert a run of text with emphasis (<'em> [element](https://www.htmlquick.com/reference/tags/a.html)) with a couple of events: <b>onmouseover</b>, which calls its function when the mouse pointer gets over the element, and <b>onmouseout</b>, that calls its function when the mouse moves out of the area occupied by the element. The functions declared in the events will change the color of the element's background so you can better appreciate the functionality.Refer code line 27.

> - In HTML5 there's just one set of events, known as [global events](https://www.htmlquick.com/reference/events.html). Each event in this group can be used with any element in the standard, regardless if the element can trigger the event or not. In other words, there are some events, like <b>oncanplay or onautocomplete</b>, that, despite being global, are specifically designed for a particular group of elements and won't be triggered by elements outside that group.

> - In the reference about [global events](https://www.htmlquick.com/reference/events.html) you'll find a list with all events available in HTML5, with descriptions and information about the elements that are capable of triggering them.

> - code line 28 In this section we're going to see some examples, so you can better understand the structure of elements. First, let's start by inserting a paragraph (p element) where the first few words are higlighted to attract the user's attention. We do this by enclosing those words with the b element.
> - code line 29 Now let's try something more complex, by adding a link. Links aren't links (this is, they don't point to another resource) if they don't have the href attribute declared. So this time we're inserting a link, using the a element, with a URI in the href attribute (these concepts will be treated subsequently).
> - code line 30 Lastly, we're adding an image with the img element. This element requires the src attribute to be present in order to display an image. Additionally, we're declaring the alt attribute as a textual alternative of the image purpose.
## Click here to view the code :point_right: [Events](wd-cp-1\Chetan_WD_IntroToHtmlCode.md)

submitted by [Chetan Sharma](https://www.instagram.com/chetucity)

## ***Hope You Enjoyed it !!!***
## ***Keep Shining*** :innocent:

Reach me :

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/chetan-sharma-19b317148//)](https://www.linkedin.com/in/chetan-sharma-19b317148/) <br>
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:Chetucity@gmail.com)](mailto:Chetucity@gmail.com) <br>
<a href="https://instagram.com/Chetucity" target="_blank"><img src="https://img.shields.io/badge/Chetucity-%23E4405F.svg?&style=flat-square&logo=instagram&logoColor=white" alt="Instagram"></a>
