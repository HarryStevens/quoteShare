/*
 * quoteShare.js
 * Copyright (c) 2016 Harry Stevens
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

( function($) {

		$.fn.quoteShare = function(options) {

			return this.each(function() {

				//create unique ids for each menu so that each can be styled separately
				var unique = $(this).context.offsetTop + '-' + $(this).context.offsetLeft;
				var id = 'qs-popup-' + unique;

				//some variables to be used later
				var history = [];
				var text = "";

				//options
				var settings = $.extend({
					background : '#262626',
					minLength : 1,
					maxLength : 114,
					boxShadow : true,
					twitterColor : '#ffffff',
					twitterHashtags : '',
					twitterVia : ''
				}, options);

				//create popup menus
				$('body').append('<div id="' + id + '">');

				// style popup menu
				$('#' + id).css({
					'background' : settings.background,
					'font-size' : '24px',
					'height' : '40px',
					'width' : '40px',
					'border-radius' : '4px',
					'padding' : '9px',
					'padding-top' : '11px'
				});

				// box shadow
				if (settings.boxShadow) {
					$('#' + id).css({
						'box-shadow' : '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
					});
				}

				// add twitter
				$('#' + id).append('<a class="qs-sharelink qs-twitter qs-twitter-' + unique + '"><i class="fa fa-twitter share-icon" aria-hidden="true"></i></a>');

				// style sharelinks
				$('.qs-sharelink').css({
					'z-index' : 1,
					'cursor' : 'pointer',
					'position' : 'absolute'
				})
				$("a.qs-twitter-" + unique).css({
					'color' : settings.twitterColor,
				});

				// position share icons
				$('.share-icon').css({
					'margin-top' : '-3px',
					'position' : 'absolute'
				});

				// add a little arrow
				$('#' + id).append('<div class="qs-popup-arrow-' + unique + '">&nbsp;</div>');
				$('.qs-popup-arrow-' + unique).css({
					'background' : settings.background,
					'width' : '20px',
					'height' : '20px',
					'margin' : '0 auto',
					'margin-top' : '12px',
					'transform' : 'rotate(45deg)'
				});

				// hide the popup
				var hidePopup = {
					'position' : 'absolute',
					'top' : '-10000px',
					'left' : '-10000px'
				};
				$('#' + id).css(hidePopup).addClass('qs-popup-hidden').removeClass('qs-popup-shown');

				// mouseup function to show the popup
				$(this).mouseup(function(e) {

					// get the selection and some information about it
					var selection = window.getSelection();
					var text = selection.toString();
					var len = text.length;
					var range = selection.getRangeAt(0).cloneRange();
					var rect = range.getClientRects()[0];
					var left = rect.left;
					var top = rect.top;
					var right = rect.right;
					var mid = (left + right) / 2
					var scroll = $(window).scrollTop();

					// position the popup
					var showPopup = {
						'top' : top + scroll - 50,
						'left' : mid - 37.5
					};

					// add the latest text to the history array, and get the array's length
					history.push(text);
					var historyLength = history.length;

					// conditions to show the popup
					if (len > settings.minLength && len < settings.maxLength && (text != history[historyLength - 2]) && selection.type == "Range") {
						$('#' + id).css(showPopup).addClass('qs-popup-shown').removeClass('qs-popup-hidden');

						var urlStart = 'http://twitter.com/share?text="' + text + '"';
						var urlVia = '';
						var urlHashtags = ''; 
						var urlRelated = '';

						if (settings.twitterVia != '') {
							urlVia = '&amp;via=' + settings.twitterVia;
						} 
						if (settings.twitterHashtags != '') {
							urlHashtags = '&amp;hashtags=' + settings.twitterHashtags;
						}

						var shareTwitter = urlStart.concat(urlVia, urlHashtags);

						$('a.qs-twitter').attr('onclick', "popUp=window.open('" + shareTwitter + "','popupwindow','scrollbars=yes,width=600,height=250');popUp.focus();return false");
					} else {
						$('#' + id).css(hidePopup).addClass('qs-popup-hidden').removeClass('qs-popup-shown');
					}

				});

				// hide the popup on click away
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
