---
title: Switching to Java 8
date: 2015-01-09
template: single.hbt
---
# Switching to Java 8
The new year starts with a new java version. Reading and writing code in new versions, new frameworks or new technology is my day to day business. But switching our company to Java 8 was something different. It was not just about a changing on one file or one program:

* We had to make sure every developer was running a jdk 8 on his local machine and had an IDE with java 8 support
* We have to check all test maschines and test frameworks if they work well with java 8 (we had some problems with findbugs)
* All servers and operating system were be checked
* We did some developer training, so everybody is now able to read code using new language features like Lambdas
* All requirement definition where update to reflect new language requirement

# My first impression
After just a one week in production, I've got the impression the switch from java 7 to java 8 is one of the greatest switches I've every seen in the java programming language. I'm writing java code since jdk 0.91 and there were of course a lot of changes in the libaries. In all these days, there where few really major language or plattform chagnes.  IMHO The greates changes were 
1. the introduction of reflection
2. the introduction of generics (with jdk 1.5) 
3. now the introduction of lambdas
Of course there where others and java is now totally different then the version 1.0. But this three where the most impressiv changes:

* The introduction of reflection changed the way we *create* code. We could create and change classes at runtime. This feature added a much more dynamic capabilty to the language and made thinks possible we couldn't even think of before.
* The introduction of generics changed the way we *write* code, combined with the changes in the Collection API it removed the casting from the language. Today I got a much more readable and more secure code than every before.
* The introdcution of lambdas changed the way *think* of code. Java was mostly an object oriented programming language, but now we can think of methods as objects and get all the power of parallel programming.

All these changes are not easy to implement and it will take some time to get familiar with them. But it feels pretty good to get these thinks finally in production, I hope this feeling will stay.

# No Mails during Holidays

I still remember how exited I was when got my first emails. Exploring the internet was great fun and writing with people who were living in a different country was so exited. So I enjoyed every email I got.
Ok times have changed, now I'm trying to get as less Emails as possible. I usually don't care about notification or copy of emails I get, but there is still a lot of stuff. So after reading some stuff about vacation and calming down this year I decided to disable my mail synchronisation for my holiday vacation. It was really a __great__ idea! After reading all this mails this week there was of course some interesting news, something to do and a few things I sould have noticed before but after all I really had time for something complete different and enjoyed the christimas time. I've also realized, not looking at my business for almost two weeks changed my point of few. Problems sometimes really look small when doing one step back and looking from a different view. 
