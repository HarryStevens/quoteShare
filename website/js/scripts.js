$(document).ready(function() {

	//quoteShare examples
	$('p.lead').quoteShare({
		size : 30,
	});

	$('.example-1').quoteShare();

	$('.example-2').quoteShare({
		backgroundColor : 'orange',
		birdColor : 'green',
		size : 40
	});

	$('.example-3').quoteShare({
		minLength : 20,
		maxLength : 40
	});

	$('.example-4').quoteShare({
		shareIcon : '<img src="img/smiley.png">'
	});

	//other functions
	$('a[href^="#"]').on('click', function(e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop' : ($target.offset().top) - 40
		}, 900, 'swing');
	});
	
	var offset = 41;

	var waypointHome = new Waypoint({
		element : $('#home'),
		handler : function() {
			$('.nav li').removeClass('active');
		},
		offset : offset
	});
	var waypointUsage = new Waypoint({
		element : $('#usage'),
		handler : function() {
			$('.nav li').removeClass('active');
			$('.nav li:nth-of-type(1)').addClass('active');
		},
		offset : offset
	});
	var waypointOptions = new Waypoint({
		element : $('#options'),
		handler : function() {
			$('.nav li').removeClass('active');
			$('.nav li:nth-of-type(2)').addClass('active');
		},
		offset : offset
	});
	var waypointExamples = new Waypoint({
		element : $('#examples'),
		handler : function() {
			$('.nav li').removeClass('active');
			$('.nav li:nth-of-type(3)').addClass('active');
		},
		offset : offset
	});

});
