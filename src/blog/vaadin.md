---
title: Vaadin experiences
date: 2015-06-26
template: single.hbt
---
# Vaadin experiences

The last talks were a lot of using Java Backend with Javascript (Angular) Frontends cause this is the topic I'm doing a lot of research at the moment. Nevertheless out main company application is going a different way. We are using the Vaadin framework to *compile* our Java code to Javascript.

# The vaadin framework
The [Vaadin](http://vaadin.com) framework is some kind of unique within the Java web frameworks. It offers a Java library with components, simlar to Swing and you create your application layout using just java code. There are no HTML Pages and you don't have to write any JavaScript code (but you can). So the framework creates an abstraction layer between your programming code and the rendering language. All Java code is compiled into Javascript and the framework creates a data transfer layer between the Browser and the application server.
 
# The benefits
At first glance this looks a little bit strange. Most of you will be familiar with HTML and we are used to create HTML code, directly or by manipulating the dom tree. But there are great benefits for a java developer.

When creating Ajax based application you've got always two parts you have to develop. A client part (in JavaScript) and a server part (profiding some kind of REST or similar service). In most enterprises the server part will be Java based, so if you want to understand the whole application you must be able to write Java and JavaScript code. When you use Vaadin you can write all code in Java (yes even a Click  Listener or something similar). 

You don't have to learn a new language and you can use all the benefits of your favorite IDE. You can also use the build tool of your choice and use the standard build process. So every code is running through the same stages and the same code analysis tools.


# The downside
Of cause writing Java code and compiling it to JavaScript takes time and requires a restart of you server to apply changes (there are some tricks and tools to avoid this), so might have more roundtrips when developing pure client side code.

Vaading comes with a customizable theme which works well for most enterprise application. You can change it using CSS (or even SASS) but you cannot change the structure of the HTML source. If you get HTML code and CSS stuff from your UI agency, Vaadin is the wrong tool.

Vaadin is a tool for web application, not for websites. You'll run into major problems if you want to create a website based on Vaadin.

Cause data transfer from client to server is not in your hand you might need more bandwith and get more traffic than technical necessary.

# Summary
Vaadin is a great framework if you want to develop ground solid business applications. It comes with a modern theme and components for most business use cases (i.e. a really greate table component). If you want to create a web based business application or you want to transform a rich client application into a web based application consider using Vaadin as your framework. 

