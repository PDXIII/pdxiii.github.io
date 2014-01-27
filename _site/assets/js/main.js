
/*globals jQuery, document */
(function ($) {
	"use strict";

	function displayUserData (_username) {
		var request = 'https://api.github.com/users/' + _username;
		var myTemplate = _.template(
			'<img class="img-round img-responsive" src="<%= avatar_url %>&s=440" alt="My Gravatar" ><br>' +
			'<p>since <%= moment(created_at).format("YYYY") %></p>' + 
			'<p><%= location %></p>'
		);
		$.getJSON(request, function(json) {
			if(json.message == "Not Found" || json.name == '') {
				$('#userData').append("<h2>No User Info Found</h2>");
			}
			else {
				var output = myTemplate(json);
				$('#userData').append(output);
			}
		});
	};

	function displayGHPages ( _username ) {
		var request = 'https://api.github.com/users/' + _username + '/repos?sort=pushed&direction=desc';
		var myTemplate = _.template(
			'<div class="col-md-3 ghPage">' +
				'<h2><a href="<%= homepage %>" > <%= name %> </a></h2>' +
				'<p><%= description %> </p> <br />' +
				'<p><small><%= stargazers_count %> <i class="fa fa-star"></i></small></p>' +
			'</div>'
		);
		$.getJSON(request, function(json){
			var repositories = json;
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

	function increaseFontSize ( _selector, _fontSize) {
		$(_selector).css({
			fontSize : _fontSize + 'px',
			lineHeight: _fontSize + 'px'
		})
	}

	function parseFontSize (_fontSize){
		var fontSize = _fontSize.split('px')[0];
		var fontFloat = parseFloat(fontSize);
		return fontFloat
	}


	function decreaseFontSize (_selector) {
		$(_selector).animate({
			fontSize: 14 + 'px',
			lineHeight: 14 + 'px'
		},
		{
			duration: 'slow',
			easing: 'easeOutElastic'
		})
	}

	$(document).ready(function(){
		//	following functions are page specific

		var bodyID = document.body.id;
		console.log(bodyID);
		if(bodyID ==='home'){
			var username = 'PDXIII';

			displayUserData(username);
			displayGHPages(username);
		}

		if(bodyID === 'side04'){
			var direction;
			var originalPosition;

			$('#dragDiv').position({
				my: 'center top',
				at: 'center top',
				of: '#dragArea'
			})
			.draggable({ 
				axis: 'x', 
				containment: 'parent',
				cursor: 'hand',
				drag: function (event, ui){
					originalPosition = ui.originalPosition.left;
					ui.originalPosition.left > ui.position.left ? direction = '#attributeLeft' : direction = '#attributeRight';
				}
			})
			.bind('drag', function(){
				var fontIncreasement = Math.abs(originalPosition - parseFontSize($(this).css('left')));
				increaseFontSize(direction, fontIncreasement);
				console.log('left position: ' + $(this).css('left'));
				console.log('right position: ' + $(this).css('right'));
			})
			.bind('dragstop', function(){
				$(this).animate({
					left: originalPosition
				},
				{
					duration: 'slow',
					easing: 'easeOutElastic'
				});
				decreaseFontSize(direction);
				direction = null;
			});
		}
	});
}(jQuery));