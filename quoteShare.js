( function($) {

		$.fn.quoteShare = function(options) {

			var settings = $.extend({
				backgroundColor : '#55acee',
				birdColor : '#ffffff',
				minLength : 1,
				maxLength : 114,
				shareIcon : '<i class="fa fa-twitter-square" style="margin-top:-2px" aria-hidden="true"></i>',
				size : 24
			}, options);

			var url = window.location.href;

			var hidePopup = {
				'position' : 'absolute',
				'top' : '-10000px',
				'left' : '-10000px'
			};
			$('body').append('<div id="qs-popup">');
			$('#qs-popup').css({
				'background' : settings.birdColor,
				'font-size' : settings.size,
				'height' : (settings.size) - 5,
				'width' : (settings.size) - 4,
				'border-radius' : '6px',
			});
			$('#qs-popup').append('<a class="qs-sharelink">'+settings.shareIcon+'</a>');
			$("a.qs-sharelink").css({
				'color' : settings.backgroundColor,
				'cursor' : 'pointer',
				'opacity' : '.9'
			});
			$("a.qs-sharelink").hover(function() {
				$(this).css('opacity', '1');
			}, function() {
				$(this).css('opacity', '.9');
			});
			$('#qs-popup').css(hidePopup).addClass('qs-popup-hidden').removeClass('qs-popup-shown');

			var history = [];

			var text = "";
			this.mouseup(function(e) {

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
					$('#qs-popup').css(showPopup).addClass('qs-popup-shown').removeClass('qs-popup-hidden');
					var shareURL = 'http://twitter.com/share?&amp;text="' + text + '" ' + url;
					$('a.qs-sharelink').attr('onclick', "popUp=window.open('" + shareURL + "','popupwindow','scrollbars=yes,width=600,height=250');popUp.focus();return false");
				} else {
					$('#qs-popup').css(hidePopup).addClass('qs-popup-hidden').removeClass('qs-popup-shown');
				}

				$('.qs-popup-shown').click(function() {
					$(this).css(hidePopup).addClass('qs-popup-hidden').removeClass('qs-popup-shown');
				});

			});

			return this;

		};

	}(jQuery));
