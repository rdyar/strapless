---
permalink: /elements/
layout: raw
title: Elements
description: List of elements and their styles
exclude: true
---
{% include breadcrumb.html %}
<section class="section-main">
<div markdown="1" class="container">
<h2>Layout and Columns</h2>
  <div class="gray-box margin-bottom">
  <h3>One Column</h3>
  <p>this is a single column. This is the default, and is just the result of using the <code>container</code> class. No <code>row</code> class needed.</p></div>
  <div class="row-container">
  <div class="column-50">
  <div class="gray-box">
    <h3>Half Column</h3>
    <p>This is a half column, which requires a div with a <code>row-container</code> class and then 2 divs with the <code>column-50</code> class.</p>
  </div>
  </div>
  <div class="column-50">
    <div class="gray-box">
    <h3>Half Column</h3>
    <p>This will create 2 columns on large and medium screens and then collapse to one column on smaller screens (less than 768px).</p>
    </div>
  </div>
</div>

<div class="row-container">
  <div class="column-33 ">
  <div class="gray-box"><h3>Three Columns</h3>
  <p>This is a 33% column, which requires a div with a <code>row-container</code> class and then 3 divs with the <code>column-33</code> class.</p>
  </div>
  </div>

   <div class="column-33 ">
  <div class="gray-box"><h3>Three Columns</h3>
   <p>This will display as 3 columns on large and medium displays, then turns to 2 columns on smaller displays (768px to 992px).</p>
  </div>
  </div>

   <div class="column-33 ">
  <div class="gray-box"><h3>Three Columns</h3>
  <p>On mobile/small displays this will display as one column (less than 768px).</p>
  </div>
  </div>
</div>

<div class="row-container">
  <div class="column-33 ">
  <div class="gray-box"><h3>One Third</h3>
  <p>This is a 33% column - <code>column-33</code> class.</p>
  </div>
  </div>

   <div class="column-66 ">
  <div class="gray-box"><h3>Two thirds</h3>
   <p>This is a 66% column, which uses the <code>column-66</code> class..</p>
  </div>
  </div>
</div>

<div class="row-container">
  <div class="column-66 ">
  <div class="gray-box"><h3>This is IMPORTANT!</h3>
  <p>Hopefully this is all displaying properly and looks good, BUT, you should know that this was created by one guy whose day job is NOT web design. I use this base CSS on my company's website, which is very important to me, use it at your own risk.</p>
  </div>
  </div>

   <div class="column-33 ">
  <div class="gray-box"><h3>Pro Lab Prints</h3>
   <p>Looking for an <a href="http://prolabprints.com">AWESOME Pro Lab</a> to print your photos? Check out the inspiration for this theme - <a href="http://prolabprints.com">ProLabPrints.com</a>.</p>
  </div>
  </div>
</div>

<h1 class="headline">H1 Headline</h1>
```<h1 class="headline">H1 Headline</h1>```

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo

---

# H1 tag
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo

----

## H2 tag
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo

---

### H3 tag
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo

---

#### H4 tag
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo

---

##### H5 tag
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo

---

###### H6 tag
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo

---

## Body
Lorem ipsum dolor sit amet <a href="#">link</a> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

---

## Lead Body
```<p class="lead">....</p>```

<p class="lead">Lorem ipsum dolor sit amet <a href="#">link</a> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

---

## Well
```<p class well>...</p>``` or ```<div class="well">..</div>```
<div class="well">The 'Well' background color and border color use the alt background and border colors found in the variables.scss file (inside the _sass folder).
</div>

---

## Buttons
Buttons are more or less straight from Bootstrap. Use the button classes on an ```<a>```, ```<button>```, or ```<input>``` element.  
The Primary button style color is set in the variables.scss file, and this is also the color of the buttons used in the main nav on small screens.

```<a href="#buttons" class="btn btn-primary">Primary</a> ```

<a href="#buttons" class="btn btn-primary">Primary</a> 
<a href="#buttons" class="btn btn-secondary">Secondary</a>
<a href="#buttons" class="btn btn-success">Success</a>
<a href="#buttons" class="btn btn-warning">Warning</a>  

Smaller buttons, add the ```btn-sm``` class.  
```<a href="#buttons" class="btn-sm btn btn-primary">Primary</a>``` 

<a href="#buttons" class="btn-sm btn btn-primary">Primary</a> 
<a href="#buttons" class="btn-sm btn btn-secondary">Secondary</a>
<a href="#buttons" class="btn-sm btn btn-success">Success</a>
<a href="#buttons" class="btn-sm btn btn-warning">Warning</a>  

Larger buttons, add the ```btn-lg``` class.  
```<a href="#buttons" class="btn-lg btn btn-primary">Primary</a>```

<a href="#buttons" class="btn-lg btn btn-primary">Primary</a> 
<a href="#buttons" class="btn-lg btn btn-secondary">Secondary</a>
<a href="#buttons" class="btn-lg btn btn-success">Success</a>
<a href="#buttons" class="btn-lg btn btn-warning">Warning</a>

---

## Inline Text Elements

<ul class="list">
    <li>To highlight small bits of code wrap it with three backticks ``` ... code ... ``` or wrap in &lt;code&gt; ...&lt;/code&gt;</li>
	<li>You can use the <code>&lt;mark&gt;</code> tag to <mark>highlight text</mark></li>
	<li>For indicating blocks of text that have been <del>deleted</del> use the <code>&lt;del&gt;</code> tag</li>
	<li>To <u>underline</u> text use the <code>&lt;u&gt;</code> tag.</li>
	<li>For <small>de-emphasizing</small> inline or blocks of text, use the <code>&lt;small&gt;</code> tag to set text at 80% the size of the parent.</li>
	<li>For <strong>emphasizing</strong> a snippet of text with a heavier font-weight use <code>&lt;strong&gt;</code> tag</li>
	<li>For emphasizing a snippet of text with <em>italics</em> use <code>&lt;em&gt;</code> tag</li>
</ul>

---

## Highlighting Code Blocks
<p>To highlight small bits of code wrap it with three backticks ``` ... code ... ``` or wrap in &lt;code&gt; ...&lt;/code&gt;</p>

For mulitline blocks of code, wrap them in &#x7B;&#x25; highlight html &#x25;&#x7D;  .. lots of code... &#x7B;&#x25; endhighlight &#x25;&#x7D;

You can replace 'html' with another language to get the proper formatting for that language, you can also add 'linenos' to add line numbers to it.

&#x7B;&#x25; highlight ruby linenos &#x25;&#x7D; ... &#x7B;&#x25; endhighlight &#x25;&#x7D;

Please note that highlighting code seems to work best in markdown - not inside html. If you are trying to add code formatting (or for that matter markdown) inside of an html element like a div it might not work by default as Kramdown sees the opening div and skips processing the contents. You can try adding ```markdown="1"``` inside of a div like ```<div markdown="1" class="container">``` and it may work.

---

## Blockquote
Wrap <code>&lt;blockquote&gt;</code> around any HTML as the quote.

<blockquote>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
	<footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>

{% highlight html %}
<blockquote>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit .... </p>
   <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
 </blockquote>
{% endhighlight %}

You can also add ```.blockquote-danger``` or ```.blockquote-info``` classes to change the color like so:
<blockquote class="blockquote-info">
	<p>This is a blockquote with <code>class="blockquote-info"</code> added to it.</p>
</blockquote>

<blockquote class="blockquote-danger">
	<p>This is a blockquote with <code>class="blockquote-danger"</code> added to it.</p>
</blockquote>

---

## Lists

#### Unordered
A list of items in which the order does not explicitly matter.

<ul>
	<li>Lorem ipsum dolor sit amet</li>
	<li>Consectetur adipiscing elit</li>
	<li>Integer molestie lorem at massa</li>
	<li>Facilisis in pretium nisl aliquet</li>
	<li>Nulla volutpat aliquam velit
		<ul>
			<li>Phasellus iaculis neque</li>
			<li>Purus sodales ultricies</li>
			<li>Vestibulum laoreet porttitor sem</li>
			<li>Ac tristique libero volutpat at</li>
		</ul>
	</li>
	<li>Faucibus porta lacus fringilla vel</li>
	<li>Aenean sit amet erat nunc</li>
	<li>Eget porttitor lorem</li>
</ul>

{% highlight html %}
<ul>
  <li>....</li>
  <li>....</li>
 </ul>
{% endhighlight %}                       

#### Ordered
A list of items in which the order does explicitly matter.

<ol>
	<li>Lorem ipsum dolor sit amet</li>
	<li>Consectetur adipiscing elit</li>
	<li>Integer molestie lorem at massa</li>
	<li>Facilisis in pretium nisl aliquet</li>
	<li>Nulla volutpat aliquam velit</li>
	<li>Faucibus porta lacus fringilla vel</li>
	<li>Aenean sit amet erat nunc</li>
	<li>Eget porttitor lorem</li>
</ol>
{% highlight html %}
<ol>
  <li>....</li>
 </ol>
{% endhighlight %}  

#### Unstyled
Remove the default list-style and left margin on list items (immediate children only).

<ul class="list-unstyled">
	<li>Lorem ipsum dolor sit amet</li>
	<li>Consectetur adipiscing elit</li>
	<li>Integer molestie lorem at massa</li>
	<li>Facilisis in pretium nisl aliquet</li>
	<li>Nulla volutpat aliquam velit
		<ul>
			<li>Phasellus iaculis neque</li>
			<li>Purus sodales ultricies</li>
			<li>Vestibulum laoreet porttitor sem</li>
			<li>Ac tristique libero volutpat at</li>
		</ul>
	</li>
	<li>Faucibus porta lacus fringilla vel</li>
	<li>Aenean sit amet erat nunc</li>
	<li>Eget porttitor lorem</li>
</ul>
<pre>&lt;ul class="list-unstyled"&gt;....&lt;/ul&gt;</pre>
</div>
</section>
<section class="section-alt">
<div markdown="1" class="container">

## This is a Section with a Full Width Background Color.
A section with a class of ```alt-section``` will have a background and border color derived from variables in the variables.scss file.

These are the variables:

$alt-background-color:#F9F8F6;  
$alt-background-border:1px solid #EFE8DD;

Create a section by using the code below - sections are the outer most element - do not add them inside of a container div.

{% highlight html %}
 <section class="section-alt">
   <div class="container">
    <h2>This is a Great Section</h2>
    <p>I really like it.</p>
   </div>
  </section>
{% endhighlight %}  

The section-alt is used in this site for the breadcrumbs (probably need a better name for that since I don't actually show the url breadcrumb there), like the one at top of this page with the title and the description. It is also used on the home page for the top part.

When using the section be careful with the layout file you use. The default layout for this site has the main section coded into the layout with the content put inbetween. This way the content doesn't need the opening or closing section and container divs. If you want to alternate between section and section-alt use the raw layout as it doesn't inculde a section element.

</div>
</section>
<section class="section-main">
<div class="container" markdown="1">


## Hidden on Desktop
There is only one special container - used for hiding content on medium and larger screens.
If you are on a desktop computer you won't see anything unless you resize your screen smaller.

<div class="hidden-desktop">
 <blockquote class="blockquote-danger">
	This is a hidden div with a blockquote (danger) on screens wider that 768px.
 </blockquote>
</div>

{% highlight html%}
<div class="hidden-desktop">
<blockquote class="blockquote-danger">
	This is a hidden div with a blockquote (danger) on screens wider that 768px.
</blockquote>
</div>
{% endhighlight %}

--- 

## Helpers
There are a variety of helper classes to make things more flexible - like ```pad-top``` to add a bit of padding to the top. These are found in the ```helpers.scss``` file inside the ```_sass``` folder.

{% highlight html%}
.text-center {
    text-align: center;
}
.pad-top{
    padding-top:2rem;
}
.pad-bottom{
	padding-bottom: 25px;
}
.pull-right {
    float: right!important;
}
.hr-half{
    margin-right:33%;
 } 
.no-border{
    border-bottom:none;
}
.bold {
    font-weight:bold;
}
.max800{
	max-width:800px;
	margin: 0 auto;
}
.img-shadow{
	box-shadow: 0 0 6px rgba(121, 121, 121, 0.43);
}
.small {
    font-size: 85%;
}
.margin-bottom{
    margin-bottom:10px;
}
{% endhighlight %}
</div>
</section>