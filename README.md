# quotesShare.js

## quoteShare.js is a jQuery plugin that lets users share highlighted text on Twitter.

### Dependencies

**jQuery** - You can link to a CDN of the latest version at <a href="https://developers.google.com/speed/libraries/#jquery">Google's Hosted Libraries page</a>.
**Font Awesome** - Download the latest version <a href="https://fortawesome.github.io/Font-Awesome/">from Font Awesome's website</a>. (NOTE: To use Font Awesome, include the /fonts/ directory in your project.)

Include jQuery and Font Awesome in your html file, like so:

```
<!-- Font Awesome —>
<link rel="stylesheet" href="css/font-awesome.min.css" /> 

<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
```

### Usage

***First***, download quoteShare.js from this GitHub repository and include it in your html file. Be sure to place it below where you have included jQuery, like so:

```
<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<!-- quoteShare.js -->
<script src="js/quoteShare.js"></script>
```

***Second***, use the quoteShare method on the selector of your choice. For example:

```
<script>
$(document).ready(function(){
	$('p').quoteShare();
});
</script>
```

There is no third; it's that easy to use. See the example provided in this GitHub repository for help.






