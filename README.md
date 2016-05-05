# <a href="http://harryjstevens.com/quotesharejs/">quoteShare.js</a>

## A jQuery plugin that lets users share highlighted text on Twitter.

### Menu

<a href="https://github.com/HarryStevens/quoteShare#dependencies">Dependencies</a>

<a href="https://github.com/HarryStevens/quoteShare#usage">Usage</a>

<a href="https://github.com/HarryStevens/quoteShare#options">Options</a>

---

### Dependencies

**jQuery** - You can link to a CDN of the latest version at <a href="https://developers.google.com/speed/libraries/#jquery">Google's Hosted Libraries page</a>.

**Font Awesome** - Download the latest version <a href="https://fortawesome.github.io/Font-Awesome/">from Font Awesome's website</a>.

Include jQuery and Font Awesome in your html file, like so:

```html
<!-- Font Awesome -->
<link rel="stylesheet" href="css/font-awesome.min.css" /> 
<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
```

(NOTE: To use Font Awesome, also include the /fonts/ directory in your project.)

### Usage

***First***, download <a href="https://github.com/HarryStevens/quoteShare/blob/master/quoteShare.js">quoteShare.js</a> or <a href="https://github.com/HarryStevens/quoteShare/blob/master/quoteShare.min.js">quoteShare.min.js</a> from this GitHub repository and include it in your html file. Be sure to place it below where you have included jQuery, like so:

```html
<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<!-- quoteShare.js -->
<script src="js/quoteShare.js"></script>
```

***Second***, use the quoteShare method on the selector of your choice. For example:

```javascript
<script>
$(document).ready(function(){
	$('p').quoteShare();
});
</script>
```

See the <a href="http://harryjstevens.com/quotesharejs">quoteShare.js website</a> for help.

### Options

The `quoteShare()` method accepts options, enabling you to customize when and how your share button displays on the page.

| Option        | Date Type     | Default  | Description |
| ------------- |-------------| ---|---|
| animation      | number | `75` | Speed of the animation, in milliseconds, with which the popup appears. Set to `0` to disable. |
| backgroundColor      | string | `'#262626'` | The background color of the popup menu. Default is off-black. Hex, RGB, and other color codes are accepted. |
| boxShadow | boolean      |  `true` | A shadow that appears below the menu. Set to `false` to disable. |
| maxLength      | number      |  `114` | The maximum number of characters that must be highlighted for the share icon to appear. Useful if you want to add hashtags or a source to the tweet. |
| minLength      | number      |  `1` | The minimum number of characters that must be highlighted for the share icon to appear. |
| twitterColor      | string | `'#ffffff'` | The color of the bird in the Twitter icon. Default is white. Hex, RGB, and other color codes are accepted. |
| twtterElipses      | boolean | `true` | If the length of the tweet is 140 characters, quoteShare will abridge excessively long text and add an elipses. Works even if hashtags and a source are included in the tweet. Set to `false` to disable. |
| twitterHashtags      | string | `''` | A comma separated list of hashtags that accompany the tweet. |
| twitterVia      | string | `''` | A Twitter handle to accompany the tweet. |




