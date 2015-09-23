---
title: Vaadin developer day
date: 2015-09-22
template: single.hbt
---
# Vaadin developer day

Today I had the chance attending the Vaadin developer day in germany. It was the first *developer day*, something between a workshop and a conference. 

There were talks to different themes round about the webframework like:
* Using the MVP Pattern
* Visual designer
* Performance optimization
* Integration in JEE and Spring
* Testing
* Extending Vaadin

# The location and schedule
The event took place in a conference hotel located in Frankfurt (Main). The room was large enough for round about 60 paying(!) attendes and 6 vaadin experts. Every talk was about 45 minutes, followed by a 15 minute break. The talk length were pretty good but the breaks were a little bit short cause the room for refreshments, coffee and restrooms were located in a different section of the floor. The conference started at 9.00 AM so I could make I there by getting up pretty early and driving home the same day which is nice. This schedule made it difficult for  networking or smalltalk with other developers of the vaadin team.
 
# The benefits
The talks were made by experts who could answer all questions. It is always good to get information directly from the core  developers and I really enjoyed being there. Some talks had IMHO too much slides and didn't show enough code. For a developer day I expected to see some more coding. I also were a little bit disappointed some talks were more some kind of training and not "real world problems". I missed some remarks about "things you should not but do have to do" or some workarounds, about i.e. lazy loading. Cause every speaker was an Vaadin employee almost every solution had some kind of *official* character. Don't take me wrong, I like recommendations and best practices but I also love to see practical workarounds and quick and dirty hacks at a developer day.

# Lessons learned
Nevertheless I've learned a lot. Of course not a all was new but here are my personal lessons learned:
* For larger application you should implement _MVP_ with an EventBus
* Vaadin works well with *Spring* or *JEE* both a first class citizens
* Consider using the [Vaadin testbench](https://vaadin.com/add-ons/testbench). It supports you really well for writing maintainable end to end test.
* You can create your own (custom) components which are based on [Polymere](https://www.polymer-project.org/1.0/)

