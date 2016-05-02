---
layout: post
title: Added My GitHub Activities
date: '2016-04-14 14:20:10 +0100'
categories: update
---

Yes! Finally I have it done. As you might have recognized on the front page you can see **My Latest GitHub Activities!** For this task I used [good ol' jQuery][jQuery], [underscore.js][underscorejs] and [moment.js][momentjs].

## But why?

Because I can! No, just kidding. I always thought about my personal GitHub page as informative as it can be. And not a page just like “Hello World! I am Pete an Interface Designer from Berlin and this is my blog”. No, my page should consist of content, that I provide and some dynamically generated content, provided by the [GitHub API][GitHubAPI].

## In Depth

1. Get the data
2. Handle the data
3. Nicer timestamps with [moment.js][momentjs]
4. Templating with [underscore.js][underscorejs]
5. Displaying data in HTML


### Get the Data

In my code, the function which handles the task to display my GitHub activities carries the sound full name  ```displayActivities```. It receives two arguments. First is the username, the other is a DOM element selected with [jQuery][jQuery], that will later contain the activities as HTML code.
 
First of all, an AJAX call is made against GitHub’s User Event Stream ```https://api.github.com/users/[GITHUB_USER_NAME]/events/public```. 

If the AJAX call is successful, the received data is limited to the latest five events. Each event is passed to the function ```parseActivityJSON```.

See the whole function here:

{% highlight javascript %}
function displayActivities (_username, _$container) {

  var requestURL = 'https://api.github.com/users/' 
+ _username + '/events/public',
  activities = [];

  $.getJSON(requestURL, function (json) {
  
    if(json.message == "Not Found" || json.name == '') {
    
      _$container.append('<h2>No Info Found</h2>');
    }
    else {
    
      $.each( json, function (index){
      
        if (index <= 5) {
        
          var output = selectTemplate(parseActivityJSON(json[index]));
          activities.push(output);
        }
      });
    
      _$container.append(activities.join(''));
    }
  });
}
{% endhighlight %}


### Handle the Data

The purpose of the function ```parseActivityJSON``` is to uniform the event data and make it easier to handle. For example, there is some string split and concat going on, to build URLs to the repository or the repository owner.

At least the function returns an object, which can be imagined like this:

{% highlight javascript %}
var activityObj = {
  type = string,
  formatedTime = string,
  repoOwner = string,
  repoOwnerURL = string,
  repoName = string,
  repoURL = string,
  // if this event is of the type 'IssuesEvent'
  issueURL = string,
  issueNumber = integer
}
{% endhighlight %}

Before we follow this object returning back to the ```displayActivities``` function, we take a look what happen to the timestamp.

### Nicer timestamps with [Moment.js][momentjs]

Of course, I could have just used the given format of the event’s timestamp, but I trying to create messages that can be read most human as possible. The right library for this job is [moment.js][momentjs], especially with its ```calendar()``` function.

The desired format can be defined in a kind of dictionary:

{% highlight javascript %}
momentFormatSettings = {
   sameDay: '[Today]',
   nextDay: '[Tomorrow]',
  nextWeek: 'dddd',
   lastDay: '[Yesterday]',
  lastWeek: '[Last] dddd',
  sameElse: '[On] MMM D, YYYY'
};
{% endhighlight %}

And later the given timestamp will be parsed with the ```calendar``` function:

{% highlight javascript %}
var formatedTime = moment(givenTimestamp).calendar(null,momentFormatSettings );
{% endhighlight %}

We can now return to the ```displayActivities``` function with our nicely formatted **activityObj**.

### Templating with [Underscore.js][underscorejs]

And from ```displayActivities``` our **activityObj** is directly passed into the ```selectTemplate``` function.

One big advantage of [underscore.js][underscore] is, that you can store your template in your HTML code and just select it with [jQuery][jQuery]. The provided templates look nice in your HTML and don’t pollute your javascript code. The variables need to be enclosed like this ```<%= VARIABLE %>```

{% highlight javascript%}
<script id="watchEvent" type="text/html">
<li>
  <p>
    <%= formatedTime %> I starred <a class="repoName" href="<%= repoURL %>"><%= repoName %></a> by <a class="repoOwner" href="<%= repoOwnerURL %>"><%= repoOwner %></a>. I think it is pretty cool!
  </p>
</li>
</script>

<script id="issueEvent" type="text/html">
<li>
  <p>
      <%= formatedTime %> I filed <a href="<%= issueURL %>">issue &#8470;<%= issueNumber %></a> at the <a class="repoName" href="<%= repoURL %>"><%= repoName %></a> project by <a class="repoOwner" href="<%= repoOwnerURL %>"><%= repoOwner %></a>. Take a look, maybe you’ve got the answer.
  </p>
</li>
</script>

<script id="pushEvent" type="text/html">
  <li>
    <p>
        <%= formatedTime %> I pushed some code to my  <a class="repoName" href="<%= repoURL %>"><%= repoName %></a> project.
    </p>
  </li>
</script>

<script id="default" type="text/html">
  <li>
    <p>
      <%= formatedTime %> I have done something top secret on GitHub. If I would tell you, I had to kill you! Sorry, pal!  
    </p>
  </li>
</script> 
{% endhighlight %}

By looking at the **type** of the object, the ```selectTemplate``` function picks the right template from the HTML.

{% highlight javascript %}
function selectTemplate (_activity) {
  
  var myTemplate;
  
  switch (_activity.type) {
    
    case 'IssuesEvent':
    myTemplate = _.template($('#issueEvent').html());
    break;
    
    case 'WatchEvent':
    myTemplate = _.template($('#watchEvent').html());
    break;
    
    case 'PushEvent':
    myTemplate = _.template($('#pushEvent').html());
    break;
    
    default:
    myTemplate = _.template($('#default').html());
    break;
    
  }
  
  return myTemplate(_activity);
}
{% endhighlight %}

### Displaying Data in HTML

Finally the HTML of our **activityObj** returns to the ```displayActivities``` function and is added to the **activities** array, which afterwards is joined and added to the containing DOM element.

## That’s it

I am a little proud of the outcome and I like the tool set. I just have scratched the capabilities of [underscore.js][underscorejs], but even just for templating it is awesome. And the features of [moment.js][momentjs] allow more than I used in this example. 

I think there will be more to come! 



[jQuery]: https://jquery.com
[underscorejs]: http://underscorejs.org
[momentjs]: http://momentjs.com
[GitHubAPI]: https://developer.github.com/v3/
