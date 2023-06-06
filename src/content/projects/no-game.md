---
title: No Game
image: /images/placeholder.png
tags: [development, design, ux, game]
teaser: A simple adaption of OGame.
publishedAt: 2023-03-01
updatedAt: 2023-06-01
---

## Building A Game With Bootstrap

This was my second project during the [Ironhack](https://www.ironhack.com/) boot camp in Feb 2023. My partner was [Alexandre Benat](https://github.com/ABenat1988). And our task was to build an [Express JS](https://expressjs.com/) application with a [Mongo DB](https://www.mongodb.com/) database and deploy it on [Adaptable](https://www.adaptable.app).

### Technical Requirements

- Use Express as a foundation.
- Use Mongoose for models and database communication.
- Have 2 models or more. Having one for users is a no-brainer.
- Have validation on the models with feedback for users if their submission is invalid.
- Include sign up, log in & log out functionality with encrypted passwords and authorization.
- Implement all CRUD actions on models other than users.
- Have a repo on GitHub.
- Have at least 1 commit per day that you worked on.
- Be deployed online so that anybody could use your app.

Responsive design is not a requirement, but it’s nice to have.

### Team & Idea

Alex and I share common interests, and we both have already worked in a coporate environment. Therefore, it was very easy to align about the way of working. We had a Kanban board for our tickets and a couple of touchpoints every day. And Alex came up with with a great idea. He suggested to build a clone of the famous [OGame](https://www.ogame.org/). I was fine with it, and Alex promised to take care of the game’s logic.

The idea of the game is to buy a planet and build vacilities on it to harvest resources to update your vacilities or to build new ones, that can harvest resouces. I am sure, you do understand. I hope it is obvious that we weren’t able to build a 1:1 clone of the original. So, we agreed on the following features:

- every user, logged in or not, can see and visit all planets
- logged in users can create, edit and delete planets and buildings
- and logged in users can harvest resources

### What’s Up With Bootstrap?

During the week before our project, we had a few lessons where we’ve learned about [Bootstrap](https://getbootstrap.com/). I’ve worked with it before, but that was more than 6 years ago. And I must admit that I didn’t enjoy it much. Somehow, Bootstrap always got into my way, and I had to work around it to achive the results I wanted. Therefore, I decided to give it another chance and try to write as least custom CSS as possible.

And it was fun, honestly! Bootstrap makes it very easy to start and build user interfaces. Just explore their examples and copy the source code that seems to fit best. Yes, you will probably have to adjust it to your needs. But it is still fast.

And it has so much goodies!

When I tried to figure out, why it was so painful for me to use Bootstrap in the past, and how come I’ve enjoyed working with it recently, I found that we both probably have matured.

### The Result

Here is the link to try it: [https://nogame.adaptable.app/](https://nogame.adaptable.app/)

#### How to play?

1. Visit [NoGame](https://nogame.adaptable.app/)
2. Create an account
3. Log in
4. Create your first planet
5. Add a building
6. Harvest resources
7. Level up your buildings

Sorry, no high-score board for now!

## Tools

This application was buit with:

- [Express JS](https://expressjs.com/)
- [Handlebars JS](https://handlebarsjs.com/)
- [Mongo DB](https://www.mongodb.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Feather Icons](https://feathericons.com/)
- [Themestrap](https://themestr.app/)

If you want to build an Express JS app, try [Ironlauncher](https://github.com/ironhack-edu/ironlauncher)! It provides a very nice boilerplate for your project with authentification, and other goodies!

It was deployed on:

- [Mongo Atlas](https://www.mongodb.com/atlas)
- [Adabtable](https://adaptable.io/)

## Learning Achievements

> Game logic, secure routes and synchrosity of the stats between front and back end.
> _— Alexandre_
> Don’t use custom CSS, only Bootstrap. Learn about using Mongo DB and Handlebars.
> _— Pete_
