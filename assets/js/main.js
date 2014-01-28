
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
		$.getJSON(request, function(json) {
			var repositories = json;
			if(repositories.length == 0) { 
				var errorMsg = '<p>No repos!</p></div>'; 
			}
			else {
				$.each(repositories, function(index) {
					if(repositories[index].homepage && repositories[index].homepage.indexOf("pdxiii") != -1 ) {
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

	function parseFontSize (_fontSize) {
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

	function getDirection (_ui) {
		// could be left right up down
		var direction = [];
		// horizontal
		if( Math.abs(_ui.originalPosition.left - _ui.position.left) > Math.abs(_ui.originalPosition.top - _ui.position.top)){
			direction.push('x');
			// left
			if (_ui.originalPosition.left > _ui.position.left) {
				direction.push('left');
			}
			// right
			else{
				direction.push('right');
			}
		}
		//vertikal
		else{
			direction.push('y');
			// up
			if (_ui.originalPosition.top > _ui.position.top) {
				direction.push('up');
			}
			// down
			else{
				direction.push('down');
			}
		}
		// console.log(direction);
		return direction;
	}

	$(document).ready(function() {
		//	following functions are page specific

		var bodyID = document.body.id;
		// console.log(bodyID);
		if(bodyID ==='home') {
			var username = 'PDXIII';

			displayUserData(username);
			displayGHPages(username);
		}

		if(bodyID === 'side04') {
			var direction;

			$('#dragDiv').position({
				my: 'center center',
				at: 'center center',
				of: '#dragArea'
			})
			.draggable({ 
				// axis: 'x', 
				containment: 'parent',
				cursor: 'hand',
				start: function (event, ui) {

				},
				drag: function (event, ui) {
					var distance;
					direction = getDirection(ui);
					$(this).draggable( "option", "axis", direction[0] );

					if(direction[0] === 'x'){
						distance = Math.abs(ui.originalPosition.left - parseFontSize($(this).css('left')));
					}
					else{
						distance = Math.abs(ui.originalPosition.top - parseFontSize($(this).css('top')));
					}
					if(distance > 50){
						$(this).css({
							backgroundColor: 'black'
						});
					}

					increaseFontSize('#attribute-' + direction[1], distance/2);
					// console.log('left position: ' + $(this).css('left'));
					// console.log('right position: ' + $(this).css('right'));
				},
				stop: function (event, ui) {
					$(this).animate({
						top: ui.originalPosition.top,
						left: ui.originalPosition.left,
						backgroundColor: 'red'
					},
					{
						duration: 'slow',
						easing: 'easeOutElastic'
					});
					decreaseFontSize('#attribute-' + direction[1]);
					direction = null;
					$('.attribute').removeAttr('style');
				}
			});

			$(document).keydown(function(e){
				switch (e.keyCode){
					case 37:
						console.log( 'left pressed' );
						break;
					case 39:
						console.log( 'right pressed' );
						break;
					case 38:
						console.log( 'up pressed' );
						break;
					case 40:
						console.log( 'down pressed' );
						break;
					case 65:
						console.log( 'left pressed' );
						break;
					case 68:
						console.log( 'right pressed' );
						break;
					case 87:
						console.log( 'up pressed' );
						break;
					case 83:
						console.log( 'down pressed' );
						break;
				}
			});
		}
	});
}(jQuery));