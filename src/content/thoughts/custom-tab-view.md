---
title: Custom Tab View
publishedAt: 2016-05-02
tags: [challenge, coding, ux]
isDraft: true
---

Recently, I had the chance to apply for a job as ui designer and creative coder at a SAAS start up. Instead of an long interview and asking for my diploma,
the head of design gave my the opportunity to proof my design and coding skills in a small challenge.

## The Task

> We need to make a list of files look cool.

1. Toggle the files as tiles and list view.
2. We need to be able to toggle between list and tile view on the screen.
3. Bonus: add a filter or search method
4. Visually we are going for if Microsoft had a baby with Apple
5. All client side stuff / hard coding is cool
6. Should be responsive
7. Layout as you think best
8. Style as you wish
9. Namespacing things… it’s important

## The Result

<p data-height="296" data-theme-id="light" data-slug-hash="XdxbYw" data-default-tab="css,result" data-user="PDXIII" data-embed-version="2" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/PDXIII/pen/XdxbYw/">Custom Tab View</a> by Peter Sekan (<a href="http://codepen.io/PDXIII">@PDXIII</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

[See the Demo!](http://s.codepen.io/PDXIII/debug/XdxbYw) [Try the CodePen!](http://codepen.io/PDXIII/pen/XdxbYw) [Get the Gist!](https://gist.github.com/PDXIII/6ebeffaa42ef53cf04b3a1112893598e)

What you see is a **customized tab view with a search field** above.
The **search field** responses immediately to the given input. So, if you start typing, items in the tab views not matching the given string are sorted out.
Below the **search field** you see the interface for the **tab views**. For simplicity I decided to use buttons labeled just with icons which represents the according view best.
Finally under the buttons you find the **tab views**. The first one is **the list view** the other one is **the tile view**.

### The List View

The list view is represented by a classic table. In in the briefing I was asked for thumbnail images in the list view. I could have done that, but in my opinion it isn’t suitable in this context (I mean what would a thumbnail of an excel file look like?) and I found it more challenging to pick a matching file icon for the particular file type. So, you see an icon, the name and the size for each file in a row.

### The Tile View

The tile view uses random background images of birds delivered by Lorem Flickr, that is the reason why it takes some time until all images are visible. Additional to that the tiles provide the same information like the list items, the file icon is just a little bit larger. For the background images I used CSS blend mode, which isn’t all browser compatible but looks pretty cool!

## The Process

I started this little experiment in **CodePen** which is quite handy to quickly test stuff, because you don’t have to care about several things in the beginning like boilerplate stuff and importing libraries.

One of the main problems while designing data driven structures is the data itself. In the past I used to spend a lot of time editing JSON files to fulfill the needs of the particular project until I found **JSON Generator**. This tool makes designing random data an ease. If you need random images you can combine **JSON Generator** with **Lorem Flickr** which provides random images.

To handle this kind of data I made good experience with **Underscore.js**. It is a small but very powerful library. I use it mainly for templating.

Now it was time to work on the visual representation of the data. **Bootstrap** has all the components for this interface. So I went for the **tab** and **search field** component (and some other component, which are only for decoration like the **jumbotron** in the header).

Now it was time to think about the filter method. I made a quick research on available jQuery plugins and found, among others, **HideSeek**, which promised to be easy to implement, and kept this promise. Maybe there are better ones out there, but this could be tested in further iterations.

Because **Helvetica** isn’t suitable for anything, especially for web and interface design, I needed to change that. I didn’t had to care about long copy text, so I went for to display fonts just for an interesting typographical mix: **Montserrat** for headlines and primary information and **Fairplay Display** for secondary information and table labeling.

For better a faster editing the source code it was time to export the project from **CodePen** to my computer. For projects at this scale I use **Codekit** for CSS compilation and Javascript linting.

In this task **Less** is the CSS preprocessor of choice. I wrote some mixins for quickly adding the right font for the particular element or class and one which takes care about choosing the right file icon, which are provided by **Font Awesome** like the icons in the tab navigation.

After I have chosen a color theme which was influenced by this sneaker:

![Nike Dunk SB Tiffany](http://cdn.sneakernews.com/wp-content/uploads/2014/01/diamond-nike-sb-dunk-high-tiffany.jpg)

I moved the code back to **CodePen** just to have another good looking experiment in my portfolio.

### Resources

#### Libraries & Frameworks

- [Bootstrap · The world's most popular mobile-first and responsive front-end framework.](http://v4-alpha.getbootstrap.com/)
- [Underscore.js](http://underscorejs.org/)
- [HideSeek: A simple, mobile-friendly, yet customizable quick/live search jQuery plugin.](http://vdw.github.io/HideSeek/)

#### Fonts

- [Font Awesome, the iconic font and CSS toolkit](https://fortawesome.github.io/Font-Awesome/)
- [Google Font Playfair Display](https://www.google.com/fonts/specimen/Playfair+Display)
- [Google Font Montserrat](https://www.google.com/fonts/specimen/Montserrat)

#### Tools

- [CodePen](http://codepen.io/)
- [JSON Generator – tool for generating random JSON data](http://beta.json-generator.com/4y_QDzceZ)
- [LoremFlickr: free placeholder images](http://loremflickr.com/)
- [Less.js](http://lesscss.org/)
- [CodeKit: THE Mac App For Web Developers](http://incident57.com/codekit/)

## Conclusion

I really enjoyed the task! I don’t know if the style is »… if Microsoft had a baby with Apple«, I would describe it more like »Edward Tufte discovered the fun of colors«.

**Best regards,**  
_Pete_
