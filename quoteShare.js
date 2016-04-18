( function($) {

		$.fn.quoteShare = function() {

				var url = window.location.href;

				var hidePopup = {
					'position' : 'absolute',
					'top' : '-10000px',
					'left' : '-10000px'
				};
				$('body').append('<div id="qs-popup">');
				$('#qs-popup').css({
					'background' : '#fff',
					'font-size' : '20px',
				});
				$('#qs-popup').append('<a class="qs-sharelink"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>');
				$("a.qs-sharelink").css({
					'color' : '#55acee',
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

					if (len > 1 && len < 117 && (text != history[historyLength - 2]) && selection.type == "Range") {
						$('#qs-popup').css(showPopup).addClass('qs-popup-shown').removeClass('qs-popup-hidden');
						var shareURL = 'http://twitter.com/share?&amp;text="' + text + '" — ' + url;
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
