$(document).ready(function() {

	//quoteShare examples
	$('p.lead').quoteShare();

	$('.example-1').quoteShare();

	$('.example-2').quoteShare({
		background : '#ffffff',
		twitterColor : '#55acee'
	});

	$('.example-3').quoteShare({
		minLength : 20,
		maxLength : 40
	});

	$('.example-4').quoteShare({
		boxShadow : false
	});
	$('.example-5').quoteShare({
		twitterHashtags : 'jQuery, Twitter',
		twitterVia : 'Harry_Stevens'
	});
	$('.example-6').quoteShare({
		animation : 0
	});
	$('.example-7').quoteShare({
		twitterElipses : false
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
