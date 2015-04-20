---
title: Mongo beyond scale
date: 2015-04-10
template: single.hbt
---
# MongoDB for day to day business

The *big data* has raised a hype about *NoSQL* databases but to be honest, most of my daily work is not about *big* data. Relational databases are well established technology so if you don't have big data should you even consider using NoSQL databases or should you stay with you're beloved (or hated) RDMS ?

# The power of SQL
SQL is well known and established as a query language for relational databases. You can find developers writing C#, Java or PHP code, each of them will probaly know SQL. So writing data into and getting them out of the database is no *magic*, it's just writing code. Cause a lot of boilerplate code could be involved there are mapping frameworks so mostly you just have to define some structure and most code handling is done by a library or the application server.
If you use NoSQL the world is different. There is no comming query language so you have to learn something new. I'm using the spring data project, which contains service layers for each major NoSQL database engine. The project comes out of the box with a persitence api, you can add an identifier and use it in every data repository like you know from JPA

```
public class InstanceConfig {
    @Id
    private String name = "";
    ...
    }
```

# Changes and Update
Relational databases are pretty good ensuring data consistency. You can add constraints to make sure the data you find is as you expected. This is a very nice feature if your database is used by multiple systems in the enterprise.
But today the case where intergration is done using a *shared database schema* is pretty rare. Most of my application have an exclusive database and an exclusive schema. There is only one application reading and writing to the database (my application) so if the database raises a *constraint violation* it's just indicating a programming error. Of course it's always good to have an additional check layer this is pretty ugly when you must change your schema. Each deployment requires a check and an update of your database schema. Sometimes you even need some processing of you're existing data which require a downtime or a duplicate infrastructure.
With our NoSQL database we can add new fields without even thinking about the database layer. We just add some default in our program logic and can update our application without even thinking about the database layer.

# Flexibility
The real power of relational data is to store a pretty large amount of identical records. It fits well for storing price lists or customer accounts which have the same fields but it doesn't fit if you have lot of different data. So if some record in your dataset have a lot of attributes and others just a few you'll end up with a structure with a lot of NULL columns. Even worse, if you want to add some information for just one record you'll have to change you database structure by adding a new column. You can add some more abstraction in you're data model by *normalizing* the data but the price for this flexibility is performance and readability.

# Conclusion

Non relational database system were made for storing large datasets, but their dynamic nature make them an ideal candidate for continous delivery cause you can update your code without changing the database layer. So NoSQL is not only about scaling it is also about flexibility. 

