---
title: Caveats and Issues
description: Known issues and things to be aware of.
---
**Use at Your Own Risk**  
I use this base theme for my website for my small business, and I am fairly obsessive about it so I think it works very well on all screen sizes and modern browsers. That said it is entirely possible it is broken in some circumstances. If you find a problem please create an issue on GH and I will try to look at it.

**Flexbox - Probable Problems in Internet Exploder 6-7-8**  
Flexbox is used in a number of places including as a wrapper around the header, main and footer in order to create a sticky footer. Older browsers like IE 6 or 7, maybe even 8 may not display this site properly.

**Links Have an Underline Style Which is Really Border-Bottom**  
I did the link style as ```border-bottom``` instead of just using ```text-decoration```. This can cause problems on other types of links that have a border, like buttons. I had a variety of problems and weirdness that was all traced back to the way I styled the links. I think they are all cleaned up, just know that if you use something that is a link and also has a border you may have trouble.

**Main Navigation and Mobile**  
The main nav is really 2 main navs - one for small screens and one for desktops. They are totally separate! The mobile nav uses buttons and can only fit 3-4 links before it runs out of space. For my purposes this is fine, but it may not work for you. The desktop nav can handle quite a few, so I use more on it and then remove a couple on mobile that I think are not very important. See the Navigation Info section below for more info.