(function ($) {
  
  /*
  * params single original GH Event object
  * returns activity as HTML
  */
  
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
  
  /*
  * params single GH Event as original object
  * returns  customized object
  */
  
  function parseActivityJSON ( _activityJSON ) {

    var activityObj = {};
    var repoSplit = _activityJSON.repo.name.split('/');
    activityObj.type = _activityJSON.type;
    // activityObj.formatedTime = moment(_activityJSON.created_at).format('MMM Do YYYY');
    activityObj.formatedTime = moment(_activityJSON.created_at).calendar(null, {
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: '[On] MMM D, YYYY'
    });
    activityObj.repoOwner = repoSplit[0];
    activityObj.repoOwnerURL = 'https://github.com/' + repoSplit[0];
    activityObj.repoName = repoSplit[1];
    activityObj.repoURL = 'https://github.com/'+ _activityJSON.repo.name + '/';
    
    if ( activityObj.type === 'IssuesEvent') {
      activityObj.issueURL = _activityJSON.payload.issue.html_url;
      activityObj.issueNumber = _activityJSON.payload.issue.number;
    }
    
    // print original GH Event object
    // console.log(_activityJSON);

    // print customized object
    // console.log(activityObj);
    
    return activityObj;
  }
  
  /*
  * params string, $element
  * gets JSON from GitHub about user events
  * appends received information to DOM
  */ 
   
  function displayActivities (_username, _$container) {

    var request = 'https://api.github.com/users/' 
      + _username + '/events/public',
        activities = [];
    
    $.getJSON(request, function (json) {

      if(json.message == "Not Found" || json.name == '') {

        _$container.append('<h2>No Info Found</h2>');
      }
      else {
        
        $.each( json, function (index){
          
          if (index <= 10) {
            
            var output = selectTemplate(parseActivityJSON(json[index]));
            activities.push(output);
          }
        });
      }
      
      _$container.append(activities.join(''));
    });
  }

  // main function
  
  function init () {

	  var ghUserName = 'PDXIII',
      $activityContainer = $('#gh-activity-container');
      
      displayActivities( ghUserName, $activityContainer );  
  }
  
  init();
  
}(jQuery));