---
title: New Server
date: 2014-11-16
template: single.hbt
---
## New server started
Just about two weeks after I've set up this new blog it was already down. This is new virtual maschine, the first one crashed with a "virtual hardware error". I just hadn't the time to debug is, but it seemd the bootloader was broken. So setup took a while, I'm sorry for the downtime. But after all it was faster to setup a new virutal maschine than debuggen into the linux bootloader cause I'm not deep into linux.

## I'm back
while I'm writing on this, I'll give you some more details about my infrstructure:

* This is Linux machine. I don't want to spent money on windows license for (web) servers and remote administration is much easier for text base linux than remote windows administration.
* I'm running on a virtual machine on a Xen Server.
* I'm running on CentOS. In business we're mostly running RedHat cause it's supported by all major software vendors. I'm glad there is an open source solution using almost the same software stack.
* The blog is served by an nginx machine. I was running apache http since my first web page, but I think it's time to give nginx a chance.

So I hope you won't see a downtime soon, but after all this is an experiment machine for personal purpose and I'm still learning.

## Backups
After a crash I thought of course about better backup strategies. Of course everyone think about backups only when it's to late.
But after a few moments I realized my *no backup* strategy still works well. I keep a *backup* of this blog at my computer and the git data is also pushed to github. So all I store is data, no software is backed up.
In a virtual container based environment, it's easier to reinstall the standard software from a repository than managing large backups. So I have no work with creating daily backups and just keep my git repo and everything else is done by the standard repositories of CentOS.
