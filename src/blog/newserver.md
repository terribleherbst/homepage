---
title: My Second Day at DNUG
date: 2014-11-12
template: single.hbt
---
## Global technology outlook
Yesterday I heard a great talk from Martin Welsch about a *global technoloy outlook*. A great talk about IT, where it came from and where it might go. Of course such a talk is about visions and Martin Welsh talked about great people who where very deep in their business but where totally wrong about trends:

* [Thomas Watson](https://en.wikipedia.org/wiki/Thomas_J._Watson) once said, that there is a world market for about 5 computers
* [Ken Olsen](http://en.wikipedia.org/wiki/Ken_Olsen) said, there is no reason for anybody to have computer at home
* [Gottlieb Daimler](http://en.wikipedia.org/wiki/Gottlieb_Daimler), told us,  the worldwide automotive market will be about 5000cars

Today we know all of them where wrong. Thats not remarkable, we are seeing a lot of wrong fortune tellers every day. But *this* is remarkable because those people were at the bleeding edge at technology and created things that changed the world.

## Think different
The claim is, even those people just couldn't imagine, how processes and business changed the way they did. I was very exited about [Professor Welschs](http://www.uni-jena.de/en/Prof_Welsch.html) talk, cause at this point he almost got the same thesis I'm telling people when they change software. 

Of course I'm not the next Thomas Watson , but It's not enough to just improve your business or your software, just must *rething* it. Take some time to take a (virtual) 150miles height fleight and have a complete different look at the world. It's important to improve you're skill and you're software but to be really successfull you must reinvent your business. To make one point clear, don't reivent the wheel, invent the car! Do something complete different and you'll create a really new market.

Escpecially in the IT we've seen great companies coming and going, they have all done good work but they weren't able to reivent themselves and transform the businesses to new market.

## Reinventing Business Models
In my talks about software modernisation I usually present the following slide:

![](http://imgs.xkcd.com/comics/travelling_salesman_problem.png)

(Image taken from https://xkcd.com/399/) 

which illustrates the problem very well. The travelling salesman problem is a non trivial problem and a lot of smart people have spent a lot of time improving algorithms, but if you take a 100mile high fleight you can see, you *don't have to solve it* you can sell you're goods on ebay and get into a whole new market. This transformation is essential for big companies and for small software solutions that my disruppt you're core business.

So maybe you're not solving the travelling salesman problem today, but just think a moment about the following two cases:

* NOKIA, once world marked leader on cellphones, missed the smartphone trend and got sold to Microsoft
* QUELLE, once german market leader at mail order selling, missed the ecommerce hype and is gone

Mr. Welsch talked about Weightwatchers whos business model is disrupted by new online technologies and internet of thinks and there are many more not so popular.

## Scaling on Domino
There was a talk about a high performance web based application using domino XPages as a frontend, TomEE as a Middle and a SQL Server as backend. There was some discussion about the architecture and I guess I miss some points but my lessons learned:

* A domino/XPages only solution doesn't scale and does not performance well when it comes to servlet request
* TomEE is a reasonable middleware server
* The Microsoft SQL/JDBC driver does not work well, consider using open source alternatives
* Don't store relational data in a document database
* If you got complex business problems you'll ne unit testing

XPages was a reasonable alternative for the frontend, cause of existing (customer) know how and a well established user directory. Also the domino plattform fullfilled some compliance requirement, but the solution would have been also possible with a JEE only solution.