---
layout: default
title: Flexbox Sticky Footer
description: This pages has a sticky footer thanks to flexbox.
---
Pages (like this) with very little content should still have a footer at the bottom of the page rather than right underneath the end of the content.

This is implemented by using the ```<body>``` tag as a parent element with ```display: flex``` and then ```<header>```, ```<main>``` and ```<footer>``` as child elements. The ```<main>``` element gets ``` flex: 1 ``` which makes the main content area expand to fill space as needed.

[more sticky footer info - http://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs](http://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/)