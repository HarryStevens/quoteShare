# quotesShare.js

## quoteShare.js is a jQuery plugin that lets users share highlighted text on Twitter.

### Dependencies

**jQuery** - You can link to a CDN of the latest version at <a href="https://developers.google.com/speed/libraries/#jquery">Google's Hosted Libraries page</a>.

**Font Awesome** - Download the latest version <a href="https://fortawesome.github.io/Font-Awesome/">from Font Awesome's website</a>.

Include jQuery and Font Awesome in your html file, like so:

```
<!-- Font Awesome —>
<link rel="stylesheet" href="css/font-awesome.min.css" /> 

<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
```

(NOTE: To use Font Awesome, also include the /fonts/ directory in your project.)

### Usage

***First***, download <a href="https://github.com/HarryStevens/quoteShare/blob/master/quoteShare.js">quoteShare.js</a> or <a href="https://github.com/HarryStevens/quoteShare/blob/master/quoteShare.min.js">quoteShare.min.js</a> from this GitHub repository and include it in your html file. Be sure to place it below where you have included jQuery, like so:

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

There is no third; it's that easy to use. See the <a href="https://github.com/HarryStevens/quoteShare/tree/master/example">example provided in this GitHub repository</a> for help.






