---
title: Flexbox Info 
description: How flexbox is used for column layouts, sticky footer and footer elements.
---
Flexbox is in use in a few places:

- [Sticky Footer]({{site.baseurl}}/sticky-footer/)
- The actual footer at the bottom is using flexbox. It will collapse into one column on small screens.
- The columns (other than single column) use flexbox.

It shouldn't matter that any of these things use flexbox, other than that older browsers may not support flexbox, in which case the site will be really ugly. I think this is mostly IE 6-7 and maybe IE 8. Everything else should look good.

For the flex columns, I set the width of the div in pixels, and then change that at the different break points for:  
 mobile <768) / tablets <992 / laptop <1200) / desktop 1200+.

If you create your own flex containers or items, you need to make sure they get prefixed. I have already ran the css in the different partials thru autoprefixer so everything in there is already prefixed.