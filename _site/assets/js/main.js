// underscore templates
var myUserTemplate = function(_json){
	var myTemplate = _.template(
		'<img class="img-round img-responsive" src=" <%= avatar_url %>&s=440" alt="My Gravatar" ><br>' +
		'<p>since <%= moment(created_at).format("YYYY") %> </p>' + 
		'<p> <%= location %> </p>'
	);
	return myTemplate(_json);
}

var myRepoTemplate = function(_repo){
	var myTemplate = _.template(
		'<div class="col-md-3 ghPage">' +
			'<h2><a href="<%= homepage %>" > <%= name %> </a></h2>' +
			'<p><%= description %> </p> <br />' +
			'<p><small><%= stargazers_count %> <i class="fa fa-star"></i></small></p>' +
		'</div>'
	);
	return myTemplate(_repo)
}

function displayUserData (_username) {
	var request = 'https://api.github.com/users/' + _username;
	$.getJSON(request, function(json) {
		if(json.message == "Not Found" || json.name == '') {
			$('#userData').append("<h2>No User Info Found</h2>");
		}
		else {
			var output = myUserTemplate(json);
			$('#userData').append(output);
		}
	});
};


function displayGHPages ( _username ) {
	var request = 'https://api.github.com/users/' + _username + '/repos?sort=pushed&direction=desc';
	var myRepos = [];
	$.getJSON(request, function(json) {
		var repositories = json;
		if(repositories.length == 0) { 
			var errorMsg = '<p>No repos!</p></div>'; 
		}
		else {
			$.each(repositories, function(index) {
				if(repositories[index].homepage && repositories[index].homepage.indexOf("pdxiii") != -1 ) {
					var output = myRepoTemplate(repositories[index]);
					myRepos.push(output);
				}
			});
		}
		$('#myGHPages').append(myRepos.join('\r'));
	});
};

$(document).ready(function() {
	//	following functions are page specific
	var bodyID = document.body.id;
	// console.log(bodyID);
	if(bodyID ==='home') {
		var username = 'PDXIII';
		displayUserData(username);
		displayGHPages(username);
	}
});