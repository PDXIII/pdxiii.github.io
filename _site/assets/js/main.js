function displayUserData (_userRequest) {
	var myTemplate = _.template(
		'<img class="img-round img-responsive" src="<%= avatar_url %>&s=440" alt="My Gravatar" ><br>' +
		'<p>since <%= moment(created_at).format("YYYY") %></p>' + 
		'<p><%= location %></p>'
	);

	$.getJSON(_userRequest, function(json) {
		if(json.message == "Not Found" || json.name == '') {
			$('#userData').append("<h2>No User Info Found</h2>");
		}
		else {
			// var sinceWhen = moment(json.created_at,'YYYY');
			var output = myTemplate(json);
			$('#userData').append(output);
		}
	});
};

function displayGHPages (_repoRequest) {
	// var repositories;
	var myTemplate = _.template(
		'<div class="col-md-3 ghPage">' +
			'<h2><a href="<%= homepage %>" > <%= name %> </a></h2>' +
			'<p><%= description %> </p> <br />' +
			'<p><small><%= stargazers_count %> <i class="fa fa-star"></i></small></p>' +
		'</div>'
	);

	$.getJSON(_repoRequest, function(json){
		var repositories = json;
			// console.log(repositories);

		if(repositories.length == 0) { 
			var errorMsg = '<p>No repos!</p></div>'; 
		}
		else {
			$.each(repositories, function(index) {
				if(repositories[index].homepage && repositories[index].homepage.indexOf("pdxiii") != -1 ){
					
					var output = myTemplate(repositories[index]);
					$('#myGHPages').append(output);
				}
			});
		}
	});
};

var username = 'PDXIII';
var userRequest = 'https://api.github.com/users/'+username;
var repoRequest = 'https://api.github.com/users/'+username+'/repos?sort=pushed&direction=desc';

displayUserData(userRequest);
displayGHPages(repoRequest);