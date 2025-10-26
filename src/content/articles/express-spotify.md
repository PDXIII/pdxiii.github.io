---
title: Browsing Spotify
image: /images/thoughts/express-spotify.png
tags: [development, design, ux, ironhack, css, ExpressJS, API]
publishedAt: 2023-03-20
updatedAt: 2023-06-01
isDraft: true
---

![Browsing Daft Punk titles in my app](/images/thoughts/express-spotify-1.png)

## Building An ExpressJS App

That was our boot camp cohort’s homework for the weekend. For the first time, I had to write an [ExpressJS](https://expressjs.com) app from scratch. And it wasn’t actually from scratch. [Ironhack](https://www.ironhack.com) has given us very detailed [information](https://github.com/ironhack-labs/lab-express-spotify) about what they were expecting and how to achieve it. Spotify offers an [API](https://developer.spotify.com/web-api/) that allows us to fetch data and songs, and basically, we had to build a search interface for it with the option to listen to some snippets.

Pretty cool 😃!

## Why Express?

The experienced frontend engineer might ask this. Totally fair! Usually, you would pick a frontend library like [React](https://reactjs.org), [Vue](https://vuejs.org), or something else. The reason was Ironhack’s curriculum. And from my perspective, it makes perfect sense to understand how to deliver static HTML from a server first, before you start learning what you can do dynamically in the browser. Also important is the knowledge about templating. And because of its simplicity, [HandlebarsJS](https://handlebarsjs.com) is a great library to begin learning.

## The Process

That was fun! It took me around 4 hours to solve the task, and understand what I was doing. In the original ReadMe.md file, the necessary steps to build the ExpressJS server, were well described. Therefore, I haven’t had any issues, and could focus a bit on styling the front end.

Call me weird, but I love CSS! And since we haven’t been allowed to use Javascript in the front end, that would have made it much easier to change classes of elements I had a nut to crack. My goal was to provide users with a submit and a reset button when the input field is focused.

<iframe height="300" style="width: 100%;" scrolling="no" title="Search:focus-within" src="https://codepen.io/PDXIII/embed/preview/dygBwQE?default-tab=" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/PDXIII/pen/dygBwQE">
  Search:focus-within</a> by Peter Sekan (<a href="https://codepen.io/PDXIII">@PDXIII</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

I found the solution with the `:focus-within` pseudo-class. [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within) provides good documentation about it. Applied to a parent, it is triggered when any child is focused.

```css
.home form .button-container {
  display: inline-flex;
  position: absolute;
  right: -10em; /* moved out of sight */
  opacity: 0; /* and invisible */
  transition: all 0.3s ease-in-out;
}

.home form:focus-within .button-container {
  /* a child is focused */
  right: -5em; /* moved in */
  opacity: 1; /* and visible */
}
```

I really like it! It’s simple, easy to understand, and has an elegant effect.

## The Result

Below, you see my solution embedded. For a full-browser experience head over to [Stackblitz,](https://stackblitz.com/edit/stackblitz-starters-8a4eez?file=readme.md) or explore my repository on [GitHub](https://github.com/PDXIII/lab-express-spotify).

<iframe src="https://stackblitz.com/edit/stackblitz-starters-8a4eez?ctl=1&embed=1&file=readme.md&hideExplorer=1&view=preview" width="100%" height="480px"></iframe>
