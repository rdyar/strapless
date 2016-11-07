---
permalink: /notes/
layout: default
title: Random Notes
description: random notes about the Strapless CSS
---

**Use at Your Own Risk**  
I use this base theme for my website for my small business, and I am fairly obsessive about it so I think it works very well on all screen sizes and modern browsers. That said it is entirely possible it is broken in some circumstances. If you find a problem please create an issue on GH and I will try to look at it.

**Flexbox - Probable Problems in Internet Exploder 6-7-8**  
Flexbox is used in a number of places including as a wrapper around the header, main and footer in order to create a sticky footer. Older browsers like IE 6 or 7, maybe even 8 may not display this site properly.

**Links Have an Underline Style Which is Really Border-Bottom**  
I did the link style as ```border-bottom``` instead of just using ```text-decoration```. This can cause problems on other types of links that have a border, like buttons. I had a variety of problems and weirdness that was all traced back to the way I styled the links. I think they are all cleaned up, just know that if you use something that is a link and also has a border you may have trouble.

**Main Navigation and Mobile**  
The main nav is really 2 main navs - one for small screens and one for desktops. They are totally separate! The mobile nav uses buttons and can only fit 3-4 links before it runs out of space. For my purposes this is fine, but it may not work for you. The desktop nav can handle quite a few, so I use more on it and then remove a couple on mobile that I think are not very important. See the Navigation Info section below for more info.

---

This site uses SASS/SCSS to build the ```site.css``` file. If you look inside ```assets/css``` you will find a file called ```site.scss```. Rather than have one giant file with all of the css in it, instead all it has is references to other files which are called 'partials'. The partials are just ways to divide up the css into logical groups. For instance, there is a partial called ```nav.scss``` which has all the css related to the main navigation in it. The partials all live in the ```_sass``` folder - this is important, as Jekyll looks for them there by default.

The ```site.scss``` file imports all of the partials and applies any variables (I'll get there in a sec) and then saves it all into a new file called ```site.css``` inside the ```_site/assets/css``` folder. For the most part the way I have done the SASS/SCSS/CSS is nothing special, SASS/SCSS is totally new to me, all I am really using is its ability to import the partials into one file (and variables).

Note the order of the imports matters - the variables come first, then the base/reset etc. The order they import in will be the order that they get applied. I do the ```custom-styles``` last in case it needs to override something else.

Contents of the site.scss file - note the front matter which is required even if it is empty (exclude:true keeps it out of other things like the sitemap):
{% highlight scss linenos %}
---
exclude: true
---
@import "variables";
@import "base";
@import "container";
@import "nav";
@import "tables";
@import "buttons";
@import "service-flexbox";
@import "footer";
@import "helpers";
@import "highlighting";
@import "custom-styles";
{% endhighlight %}

### Variables
The only non-CSS thing in use are the variables. Inside the ```_sass``` folder where all the partials are is an additional file that looks like the rest of them, called ```variables.scss```. Variables are just what it sounds like they are - a way to set a value once and then use it over and over. For instance I use a variable for ```btn-primary-color``` which makes it really easy to change the color of the primary button style.

A variable starts with a '$', then the name, and then whatever values you want it to have - so for the primary button color I created a variable like this:

```$btn-primary-color: #d46c5b;```  

Since a button really has at least 2 colors - a base color and a hover color - I also created:  

```$btn-primary-color-hover: #c06253;```

Then once you have set a variable, you use it like this - example from the buttons.scss partial:

{% highlight scss linenos %}
.btn-primary {
  color: #fff;
  background-image: none;
  background-color: $btn-primary-color;
  border-color: $btn-primary-color; }
{% endhighlight %}

I could have done a better job of using variables, there are only a few, but they were new to me and I wasn't always sure when to use them.

Here are all the variables (as of 02-14-2016) - notice there is no front matter:

{% highlight scss linenos %}
$main_font_family: arial, sans serif;

$main_font-size: 15px;
$mobile-font-size: 16px;

$body-font-color: #373a3c;

$nav-desktop-color: #d46c5b;
$nav-mobile-btn-color:#d46c5b;

$heading-font-family: arial, sans serif;
$heading-default-color: #292929;
$heading-h1-color: #1ba8b9;
$heading-h2-color: #d46c5b;
$heading-h3-color: #1ba8b9;

$link-color: #428bca;
$link-border-bottom: 1px dotted #909090;
$link-border-bottom-hover:none;
$link-text-decoration: none;
$link-text-decoration-hover: none;

$alt-background-color:#F9F8F6;
$alt-background-border:1px solid #EFE8DD;

$btn-primary-color: #d46c5b;
$btn-primary-color-hover: #c06253;

{% endhighlight %}

---

Flexbox is in use in a few places:

- [Sticky Footer]({{site.baseurl}}/sticky-footer/)
- The actual footer at the bottom is using flexbox. It will collapse into one column on small screens.
- The columns (other than single column) use flexbox.

It shouldn't matter that any of these things use flexbox, other than that older browsers may not support flexbox, in which case the site will be really ugly. I think this is mostly IE 6-7 and maybe IE 8. Everything else should look good.

For the flex columns, I set the width of the div in pixels, and then change that at the different break points for:  
 mobile < 768) / tablets < 992 / laptop < 1200) / desktop 1200+.

If you create your own flex containers or items, you need to make sure they get prefixed. I have already ran the css in the different partials thru autoprefixer so everything in there is already prefixed.

---

The main nav is a little different that most. Rather than try and force one set of links into one menu that works on all devices, instead there are 2 navs - one for small screens and one for larger screens.

The css for the nav is found in the ```config.yml``` file found. 

In addition to that, the small screen menu displays as buttons instead of text links. I find the buttons easier to press on mobile and think they look good.

The big problem with the way the nav is done is that there are only so many links available, especially on mobile. I try to stick with just the three most important links, but depending on the length of the links you may get more or less.

```nav-mobile``` is the mobile nav, which is hidden on large screens.  
```nav-main``` is the desktop menu, which is hidden on small screens.

The buttons on the mobile nav get there color from the variables ```$btn-primary-color: #d46c5b;``` and ```$btn-primary-color-hover: #c06253;``` found in the ```variables.scss``` file found in the _sass folder.