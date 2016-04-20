( function($) {

		var thisArray = [];

		$.fn.quoteShare = function(options) {

			return this.each(function() {

				var unique = $(this).context.offsetTop;

				var id = 'qs-popup-' + unique;

				console.log(id);

				//some variables to be used later
				var history = [];
				var text = "";

				//options
				var settings = $.extend({
					backgroundColor : '#55acee',
					birdColor : '#ffffff',
					minLength : 1,
					maxLength : 114,
					shareIcon : '<i class="fa fa-twitter-square share-icon" aria-hidden="true"></i>',
					size : 24
				}, options);

				//css
				var hidePopup = {
					'position' : 'absolute',
					'top' : '-10000px',
					'left' : '-10000px'
				};
				$('body').append('<div id="' + id + '">');

				$('#' + id).css({
					'background' : settings.birdColor,
					'font-size' : settings.size,
					'height' : settings.size - ((settings.size) / 4.5),
					'width' : settings.size - ((settings.size) / 5.5),
					'border-radius' : (settings.size) / 4.5,
				});

				$('#' + id).append('<a class="qs-sharelink qs-sharelink-' + unique + '">' + settings.shareIcon + '</a>');
				$("a.qs-sharelink-" + unique).css({
					'color' : settings.backgroundColor,
					'cursor' : 'pointer',
				});
				$('#' + id).css(hidePopup).addClass('qs-popup-hidden').removeClass('qs-popup-shown');
				$('.share-icon').css('margin-top', -((settings.size) / 12.25));

				$(this).mouseup(function(e) {

					var showPopup = {
						'top' : e.pageY - 10,
						'left' : e.pageX
					};

					var selection = window.getSelection();

					var text = selection.toString();
					var len = text.length;

					history.push(text);
					var historyLength = history.length;

					if (len > settings.minLength && len < settings.maxLength && (text != history[historyLength - 2]) && selection.type == "Range") {
						$('#' + id).css(showPopup).addClass('qs-popup-shown').removeClass('qs-popup-hidden');
						var shareURL = 'http://twitter.com/share?&amp;text="' + text + '" ';
						$('a.qs-sharelink').attr('onclick', "popUp=window.open('" + shareURL + "','popupwindow','scrollbars=yes,width=600,height=250');popUp.focus();return false");
					} else {
						$('#' + id).css(hidePopup).addClass('qs-popup-hidden').removeClass('qs-popup-shown');
					}

					$('.qs-popup-shown').click(function() {
						$(this).css(hidePopup).addClass('qs-popup-hidden').removeClass('qs-popup-shown');
					});

				});

				$('body').mousedown(function() {

					if ($('#' + id).hasClass('qs-popup-shown')) {
						setTimeout(function() {
							$('#' + id).css(hidePopup).removeClass('qs-popup-shown').addClass('qs-popup-hidden');
						}, 200);

					}
				});

			});

		};

	}(jQuery));
