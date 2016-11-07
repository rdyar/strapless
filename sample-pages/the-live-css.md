---
permalink: /view-css/
layout: default
title: Live CSS
description: This is the actual live css in use right now.
---
<!-- Note - in order for this to display the actuall css instead of the list of imports, the filename needs to be alphabetically after the name of the css file. -->

{% for item in site.pages %}
{% if item.url == '/assets/css/site.css' %}
 {% highlight css linenos %}
  {{item.content}}
 {% endhighlight %}
{% endif %}
{% endfor %}

### How this Page Works 
{: .pad-top}
This page is generated with the code below.  
At first it did not seem possible to do, but I happened upon an interesting trick.

The content of the ```/assets/css/site.css``` file can be one of two things - either the list of imports (this is really the site.scss file) or the actual rendered css from the sass files. Which one you get seems to depend on the alphabetical sorting of the name of the scss file and the name of the the file where you want to display the css. Originally when I was playing with this I was just testing it on a page named ```videos``` that wasn't being used. It worked (I was half surprised) and then when I went to actually use a real page I named that page ```live-css.md``` and it just gave me the list of partials. It took a while to figure out that the content hadn't been processed yet as ```live``` sorts before ```site```.

{% highlight liquid linenos %}
{% raw %}
{% for item in site.pages %}
{% if item.url == '/assets/css/site.css' %}
 {% highlight css linenos %}
  {{item.content}}
 {% endhighlight %}
{% endif %}
{% endfor %}
{% endraw %} 
 {% endhighlight %}