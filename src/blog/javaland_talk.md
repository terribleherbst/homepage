---
title: Angular meets Java
date: 2015-03-30
template: single.hbt
---
# Angular meets Java

At the Javaland Conference I gave a short talk about using JEE backends with an AngularJS Frontend. As I'm involved in Java and JavaScript development I wanted to show how much is possible when combining best practices of both technologies.

When talking to developers using only one the both involved languages I usually hear something like the following:

* Javascript is not stable. The platform supports differes from browser to browser and you have to check for a lot of special cases or browser dependencies.
* Java development is slow and no fun. You've a lot of roundtrips, boilerplate code and the JVM is pretty fat and slow.

So I want to show you this may be the case but can be overcome if you use a state of the art technology stack.


# The project
For the presentation a created a [project](https://github.com/terribleherbst/ratpack-sampl) showing a simple list of coffee shops. It's a technology demo not best practice showcase.

* The project uses the  [rapack.io](http://www.ratpack.io) framework. Ratpack.io is a combination of state of the art technologies for the enterprises (i.e. netty, gradle, hystrix), this example shows just the tip of the iceberg. It's not a JEE project but a standalone java programm.
* The webserver is based on [netty.io](http://netty.io/). A Java framework using a none blocking IO model you might know from node.js on the Java Virtual Maschine (JVM). So you'll have no blocked threads and a much better throughput than using the _old_ Servlet API.
* I'm using a groovy driven domain specific language for definig the REST service. [Groovy](http://www.groovy-lang.org/) allows you to write much less verbose code than pure java as you can see from the _ratpack.groovy_ file. It also allows you to write script code, you can change without restarting the virtual maschine. Nevertheless for production use you can also compile all Groovy classes to regular Java Bytecode.

```
        handler("stores/:id") {
            def query = pathTokens["id"]
            byMethod {
                get {
                    def output = stores.get(query)
                    println output
                    render json( output)
                }
                put {
                    def store = parse (fromJson())
                    stores.put(query,store)
                }
                delete {
                    stores.remove(query)
                }
            }
        }
```

* The project is build with [gradle](http://gradle.org/). A build tool which allows you to write build script in groovy based on convention over configuration. So you get the well structured projects you now from maven with the flexibility you know from ant without learning a new language.
* The webpage is made with [AngularJS](http://angularjs.org/). You can see it uses pretty straight HTML (look at _list.html_ or _details.html_). AngularJS just adds some attributes, so you can use your favourite web development environment without JSP tags or other strange stuff in your HTML code.
```
<table class="table table-striped table-bordered">
    <thead>
    <tr>
        <th>Name</th>
        <th>Brand</th>
        <th>Number</th>
        <th></th>
    </tr>
    </thead>
    <tbody>

    <tr ng-repeat="store in stores">
        <td>{{store.Name}}</td>
        <td>{{store.Brand}}</td>
        <td>{{store.Store_Number}}</td>
        <td>
            <a href="" ng-click="showStore(store.Store_Number)" 
               class="btn btn-default">Details</a>
        </td>
    </tr>
    </tbody>
</table>
```


* As you can see the AngularJS framwork uses a MVC Pattern with Dependency Injection. So you *can* write well structured testable code in JavaScript.
* The project includes a JavaScript Testcase which can be run using the [Karma framework](https://karma-runner.github.io/). It is running in an actual browser of your choice and executed whenever you change your JavaScript code.

# Checkout and try
To see the project in action:

* Clone or checkout the github repository from [https://github.com/terribleherbst/ratpack-sampl](https://github.com/terribleherbst/ratpack-sampl)
* Install a Java 8 JDK and run gradlew run. The first time it'll take some time to download all dependencies but after that it will start a webserver at port 5060
* Checkout the project by pointing your browser to the [localhost:5060/index.html](http://localhost:5060/index.html)
* Look at the ratpack.groovy script and do some changes, they should be applied immediately. You don't need any recompilation or redeployment.
* Have a look at the html and JavaScript
* Install node package manager (npm) on your system
* Install the AngularJS testing environment using npm install
* Run continous testing using npm test
* Checkout and modify the tests located in ShopControllerTest.js file, you'll see the changes in the test results on the fly

You might also have a look at my [slides](http://terribleherbst.github.io/javaland15/) of my conference talk. But to get a real impression just checkout the source from github and see what is possible combining Java and JavaScript.

