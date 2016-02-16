---
title: CSS and SASS Info
description: Basic info on how the CSS is setup using SASS.
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