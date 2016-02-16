---
title: Navigation Info 
description: How the Nav element is constructed.
---

The main nav is a little different that most. Rather than try and force one set of links into one menu that works on all devices, instead there are 2 navs - one for small screens and one for larger screens.

The css for the nav is found in the ```header.html``` file found in the ```_includes``` folder. 

In addition to that, the small screen menu displays as buttons instead of text links. I find the buttons easier to press on mobile and think they look good.

The big problem with the way the nav is done is that there are only so many links available, especially on mobile. I try to stick with just the three most important links, but depending on the length of the links you may get more or less.

```nav-mobile``` is the mobile nav, which is hidden on large screens.  
```nav-main``` is the desktop menu, which is hidden on small screens.

The buttons on the mobile nav get there color from the variables ```$btn-primary-color: #d46c5b;``` and ```$btn-primary-color-hover: #c06253;``` found in the ```variables.scss``` file found in the _sass folder.



{% highlight html linenos %}
<div class="nav-container">
	<div class="navbar-brand"> <a href="{{site.baseurl}}/"><img src="{{site.baseurl}}/assets/images/strapless-logo.png" alt="Strapless Logo"></a> </div>
	<div class="navbar-nav nav-mobile">
		<a class="nav-item nav-link btn btn-nav" href="{{site.baseurl}}/">Home</a>
		<a class="nav-item nav-link btn btn-nav" href="{{site.baseurl}}/elements/">Elements</a>
		<a class="nav-item nav-link btn btn-nav" href="{{site.baseurl}}/notes/">Notes</a>
	</div>
	<div class="navbar-nav nav-main">
		<a class="nav-item nav-link{% if page.active %} active{% endif %}" href="{{site.baseurl}}/">Home</a>
		<a class="nav-item nav-link{% if page.url == '/elements/' %} active{% endif %}" href="{{site.baseurl}}/elements/">Elements</a>
		<a class="nav-item nav-link{% if page.url == '/notes/' %} active{% endif %}" href="{{site.baseurl}}/notes/">Notes</a>
		<a class="nav-item nav-link{% if page.url == '/view-css/' %} active{% endif %}" href="{{site.baseurl}}/view-css/">View the CSS</a>
	</div>
</div>
{% endhighlight %}