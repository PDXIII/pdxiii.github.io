(function ($) {
  
  // underscore templates
  
  var activityTemplate = function (_activity) {
    var currentActivity = parseActivityJSON(_activity);
    var myTemplate;
    switch (currentActivity.type) {
        
      case 'IssuesEvent':
        myTemplate = _.template($('#filedIssue').html());
        return myTemplate(currentActivity);
        break;
      
      case 'WatchEvent':
        myTemplate = _.template($('#starredRepo').html());
        return myTemplate(currentActivity);
        break;
      
      case 'PushEvent':
        myTemplate = _.template($('#pushEvent').html());
        return myTemplate(currentActivity);
        break;
        
      default:
        myTemplate = _.template($('#default').html());
        return myTemplate(currentActivity);
        break;
      
    }

    // var myTemplate = _.template($('#thisTemplate').html());
    // return myTemplate(_activity);
  }
  
  function parseActivityJSON ( _activityJSON ) {
      var activityObj = {};
      var repoSplit = _activityJSON.repo.name.split('/');
      activityObj.type = _activityJSON.type;
      activityObj.formatedTime = moment(_activityJSON.created_at).format('MMM Do YYYY');
      activityObj.repoOwner = repoSplit[0];
      activityObj.repoOwnerURL = 'https://github.com/' + repoSplit[0];
      activityObj.repoName = repoSplit[1];
      activityObj.repoURL = 'https://github.com/'+ _activityJSON.repo.name + '/';
      
      if ( activityObj.type === 'IssuesEvent') {
        activityObj.issueURL = _activityJSON.payload.issue.html_url;
        activityObj.issueNumber = _activityJSON.payload.issue.number;
      }
      
      console.log(activityObj);
      
      return activityObj;
  }
  
  function displayActivities (_username, _$container) {

    var request = 'https://api.github.com/users/' 
      + _username + '/events/public',
        activities = [];
    
    $.getJSON(request, function(json) {

      if(json.message == "Not Found" || json.name == '') {

        _$container.append("<h2>No User Info Found</h2>");
      }
      else {
        
        $.each( json, function (index){
          
          if ( index <= 5 ) {
            
            

            var output = activityTemplate(json[index]);
            activities.push(output);
            // parseActivityJSON(json[index]);
            // console.log(json[index]);
          }
        });
      }
      
      _$container.append(activities.join('\r'));
    });
  }

  function app () {

	  var ghUserName = 'PDXIII',
      $activityContainer = $('#gh-activity-container');
      
      displayActivities( ghUserName, $activityContainer );  
  }
  
  app();
  
}(jQuery));