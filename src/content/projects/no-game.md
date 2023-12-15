---
title: No Game
image: /images/placeholder.png
tags: [development, design, UX, game]
teaser: A simple adaption of OGame.
publishedAt: 2023-03-01
updatedAt: 2023-06-01
---

![Start screen of our NoGame](/images/projects/no-game-1.png)

## Building A Game With Bootstrap

This was my second project during the [Ironhack](https://www.ironhack.com/) boot camp in Feb 2023. My partner was [Alexandre Benat](https://github.com/ABenat1988). And our task was to build an [Express JS](https://expressjs.com/) application with a [Mongo DB](https://www.mongodb.com/) database and deploy it on [Adaptable](https://www.adaptable.app).

### Technical Requirements

- Use Express as a foundation.
- Use Mongoose for models and database communication.
- Have two models or more. Having one for users is a no-brainer.
- Have validation on the models, giving users feedback if their submission is invalid.
- Include sign-up, log in & log-out functionality with encrypted passwords and authorization.
- Implement all CRUD actions on models other than users.
- Have a repo on GitHub.
- Have at least one commit per day that you worked on.
- Be deployed online so that anybody can use your app.

Responsive design is not a requirement, but it’s nice to have.

### Team & Idea

Alex and I share common interests and we have already worked in a corporate environment. Therefore, it was easy to align the way of working. We had a Kanban board for our tickets and a couple of daily touchpoints. And Alex came up with a great idea. He suggested building a clone of the famous [OGame](https://www.ogame.org/). I was fine with it, and Alex promised to take care of the game’s logic.

The idea of the game is to buy a planet and build facilities on it to harvest resources, to update your facilities, or to build new ones, that can generate resources. I am sure, you do understand the principle. It was obvious, that we couldn’t build a 1:1 clone of the original. So, we agreed on the following features:

- every user, logged in or not, can see and visit all planets and see the stats.
- logged-in users can create, edit and delete planets and buildings
- and logged-in users can harvest resources

### What’s Up With Bootstrap?

During the week before our project, we had a few lessons where we learned about [Bootstrap](https://getbootstrap.com/). I’ve worked with it before, but that was six years ago. And I must admit that I didn’t enjoy it much. Somehow, Bootstrap always got in my way, and I had to work around it to achieve my desired results. Therefore, I decided to give it another chance and try to write as few custom CSS as possible.

And it was fun, honestly! Bootstrap makes it very easy to start and build user interfaces. Just explore their examples and copy the source code that seems to fit best. Yes, you will probably have to adjust it to your needs. But it is an easy and fast process. And the example collection offers so many goodies!

When I tried to figure out why it was so painful for me to use Bootstrap in the past and why I’ve enjoyed working with it lately, I found that we both probably have matured.

### Visual Design

As a former designer, I know how much time can be spent creating visual assets and a general color theme. A time that we didn’t have! First, we thought about what we needed. We needed images of the different planets and the facilities. We wanted different images for different levels, at least for the facilities. We agreed that these images should change at every third level. But how would we get these images? Our solution was [Dalle-E](https://openai.com/dall-e-2). We played around with this AI image generator for a couple of hours, making sure that the images had a matching style. At the end, we had twenty images for planets and six for buildings (two building types times three states).

![Three different planets](/images/projects/no-game-6.png)
![Two different buildings](/images/projects/no-game-5.png)

Regarding the color theme, we found an easy way with [Themestrap.](https://themestr.app/) While I am writing this article, Themestrap has an issue with their certificate that results in warnings. Usually, you can pick from many different color themes for Bootstrap.
Some themes are inspired by applications like Slack, or Trello, others are made by the community. After choosing a theme, the app provides you with the necessary CSS. You can link it or download it to your project. It is important that it needs to be loaded after the original CSS from Bootstrap and before your own custom one.

For the icons, we decided to use the ones from [Feather Icons.](https://feathericons.com/) In my humble opinion, the ones from Bootstrap are a bit too bulky. No offense, just personal taste.

### The Result

Our game can’t compete with the original, but that was never the purpose. Still, it is fun to play, and we learned a lot.
Here is the link if you want to give it a shot: [https://nogame.adaptable.app/](https://nogame.adaptable.app/)

#### How to play?

1. Visit [NoGame](https://nogame.adaptable.app/)
2. Create an account
3. Log in
4. Create your first planet
5. Add a building
6. Harvest resources
7. Level up your buildings

Sorry, no high-score board for now!

## Engineering

### Sourcecode

You can learn more about our project and read the source code by visiting our [GitHub organization](https://github.com/Pete-Alex) or the [repository of our game.](https://github.com/Pete-Alex/noGame)

### Tools

- [Express JS](https://expressjs.com/)
- [Handlebars JS](https://handlebarsjs.com/)
- [Mongo DB](https://www.mongodb.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Feather Icons](https://feathericons.com/)
- [Themestrap](https://themestr.app/)

If you need to build an Express JS app, try [Ironlauncher](https://github.com/ironhack-edu/ironlauncher)! It provides a nice boilerplate for your project with authentification and other goodies!

### Deployment

- [Mongo Atlas](https://www.mongodb.com/atlas)
- [Adabtable](https://adaptable.io/)

## Learning Achievements

> Game logic, safe and secure routes, and synchronicity of the stats between the front and back end.
> _— Alexandre_

Alex did a great job figuring out the logic regarding how much facilities cost and how many resources they generate and took especially care of the synchronicity of the data between the front and the back end.

> Don’t use custom CSS, only Bootstrap. Learn about using Mongo DB and Handlebars.
> _— Pete_

I have fulfilled my goal as well. This project has only two custom CSS rules. One defines the used font, and the other adjusts the size of the icons a bit.

Besides that we have learned a lot about building a server with an API with NodeJS, respectively with ExpressJS, which was the main goal of this exercise. It gave us the convidence to pick up bigger challenges.

I want to say thank you to Alex, who was a great partner. It was really awesome working with you, buddy!
