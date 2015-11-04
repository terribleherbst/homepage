---
title: Switching to Gradle
date: 2015-10-27
template: single.hbt
---
# Switching to Gradle

After staying with maven for some years our development team made the switch from maven to gradle. Maven did a good job over the last year and we have done a lot of successful projects with our favorite build tool. But the team decided there are some issues with maven and we need some improvement.

# Why we switched from maven to gradle
We are no friends of the "never change a running system". Of course it is always a good idea to think if you should change your (build) 
 system, but doing nothing because you are afraid something could fail is never a good idea. On the other side changing some something because it is "in" is neither a good idea.
So what was wrong:

* Our software need some close source dependencies. We didn't want to setup out own maven repository server (like Artifactory or Nexus) so there was some dependency on the local environment for every build. Every developer (and every build machine) need to depoy these closed source jars into their local maven repository. An error prone issue in our build process.
* We had some requirement for which no maven plugin existed. Wrting your own maven plugin is certainly possible (and we did it) but it seems like a lot of overhead just for some file download and manipulation. Convention over configuration is a good thing but maven is to closed for our requirements. We prefer convention over configuration but we don't want to be forced to conventions.
* We wanted and extended build process. The whole integration test and QA section is covered not that good with maven or didn't work out of the box. One change we made was just added a blank line, to get at parsing tool working. This change was so easy with gradle but would have required a complete new maven plugin to get it running.
* When writing build *scripts* we want to write code. It just feels more natural writing code to build software instead of writing some XML stuff. The build script is maintained by developers, our developers can write Java (and Groovy) code but they just don't like XML.

# TL;DR
Maven is still the mainstream tool of choice. If you've got a running build process with maven which does a good job stay to it. If you want to have fun with you build process, switch to gradle.

