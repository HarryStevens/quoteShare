# quotesShare.js

## quoteShare.js is a jQuery plugin that lets users share highlighted text on Twitter.

### Dependencies

**jQuery** - You can link to a CDN of the latest version at <a href="https://developers.google.com/speed/libraries/#jquery">Google's Hosted Libraries page</a>.

**Font Awesome** - Download the latest version <a href="https://fortawesome.github.io/Font-Awesome/">from Font Awesome's website</a>.

Include jQuery and Font Awesome in your html file, like so:

```html
<!-- Font Awesome —>
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

There is no third; it's that easy to use. See the <a href="https://github.com/HarryStevens/quoteShare/tree/master/example">example provided in this GitHub repository</a> for help.

### Options

The `quoteShare()` method accepts five options, enabling you to customize when and how your share button displays on the page.

| Option        | Date Type     | Default  | Description |
| ------------- |-------------| ---|---|
| backgroundColor      | string | '#55acee' | The color of the background of the Twitter icon. Default is Twitter's blue. Hex, RGB, and other color codes are accepted. |
| birdColor      | string | '#ffffff' | The color of the bird in the Twitter icon. Default is white. Hex, RGB, and other color codes are accepted. |
| minLength      | number      |  1 | The minimum number of characters that must be highlighted for the share icon to appear. |
| maxLength      | number      |  112 | The maximum number of characters that must be highlighted for the share icon to appear. Default is 112 because shortened links require 23 characters, and quoteShare adds two quotes, two spaces and a dash to the highlighted text (112+23+2+2+1=140). |
| shareIcon | string      |  '...' | The icon that appears next to the highlighted text. Default is Font Awesome's Twitter icon. You can add your own HTML, including images or other icons. |
| size | number  |  24 | The size of the Twitter icon, in pixels. |



