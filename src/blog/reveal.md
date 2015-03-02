---
title: Reveal for presentation
date: 2015-03-02
template: single.hbt
---
# Reveal: Better than MS PowerPoint?
Not a long time ago the Microsoft Office suite was the only word processing and presentation software relevant for professional use. Of course there was something like Wordpress or Star Office, but I didn't know anybody using them on a business computer. So if anybody talked about presentation software he talked about Microsoft Powerpoint. Powerpoint was the synonym for presentation software. So of course my presentation were also PowerPoint slides.

But after switching from my windows PC to my MacBook I thought I should give Apples Keynote a try. Keynotes was fine but actually not that different from PowerPoint. So I was pretty surprise when I joined a meeting of the [Hannover JavaScript usergroup](http://hannoverjs.github.io/hannoverjs.de/) and the speaker used a complete different approach. He didn't use any presentation software, but created his slides using HTML und JavaScript and they looked great! You might think: "Thats crazy, create a website for a presentation talk." But after checking it out it makes more and more sense you think.
# How it works
The basic principle of CSS is separting content from design. I am not a design man. Most of my presentation are very technical, include sample code and configuration files, some are adressing a non technical audience and almost never I'm really *designing* a slide deck. I've got great respect for people doing this but its not my job. 
So I almost use an existing slide deck (public available or created by someone else in my company) and change the content. Technical this is exact what CSS were made for (change the content use same layout) so why not doing a presentation with CSS?

Of cause you don't have to start from scratch, there is already some great framework called [Reveal](http://lab.hakim.se/reveal-js/). The documentation of this framework is (of cause) made with reveal (eat your own dogfood) and can be found as a [github repository](https://github.com/hakimel/reveal.js). Just have a look at it and clone the repository. It's pretty easy to start. All content is just in a simple html file, all design is separated in CSS files, the navigation is done using JavaScript logic.
# About presentations
Before I write my own opinion about this approach, I'll say something about presentations in general. There are a lot of bad presentations out their, most of them are bad because there is no message. Some people think "We've got a meeting I must prepare a presentation", but thats wrong. If you got nothing to show don't make presentation.

In guess in general there are two kind of presentations:
1. Presentation sending message. They are working on an emotional layer, you shoud few words and great images. Have a look of Presentation Zen to get inspired
2. Presentation teaching some stuff. They are woking on a logical layer. You shoul provide facts and examples in such a presentation. This is the type of presentation I talk about when using reveal.

# My 5cents

I admit reveal is not the new Powerpoint. But for technical people like me there are some reason why I'll use this tool more often.
###Advantages
* All content is stored in plain text file. You don't need to learn any special editing program, vi or any other text editor does it.
* I can make versions and store each version in git. So i can easily make a diff to compare different versions of my slides.
* You can add source code which is automatically highlighted. As a programmer thats important to me, cause mostly I want to show some lines of demo code.
* I can make a good looking presentation without caring about the layout. I just write my content and everything looks pretty. 

Of course there are also things you should consider before creating presentation with such a framework.
### Disadvantages
* There is no WYSIWYG enviroment. You must be able to edit html at the source level and use your brower for preview.
* There is no chance of exporting your slide to a typical slidedeck for powerpoint presentations. So if you must submit you slidedeck in powerpoint format you're lost.
* You are not flexible. If you got a few slides in a complete different layout you must add custom css styles. Although this is of course possible, it's not easy if you are not a CSS buy.
* There is no chance of reusing existing presentations made with traditional presentation programs like PowerPoint.

# My first example
You can see my first example using this framework on a github site describing [MongoDB for Java Developers](http://terribleherbst.github.io/mongo-overview/).