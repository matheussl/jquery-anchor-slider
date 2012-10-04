/*******

	***	Anchor Slider by Cedric Dugas   ***
	*** Http://www.position-absolute.com ***
	
	*** Firefox scrollTop bug fixed by Matheus Lima ***
	*** http://www.matheuslima.org/  @matheeusLimaaa ***
	*** Github: mattheussl ***
	
	Never have an anchor jumping your content, slide it.

	Don't forget to put an id to your anchor !
	You can use and modify this script for any project you want, but please leave this comment as credit.
	
*****/


jQuery.fn.anchorAnimate = function(settings) {

 	settings = jQuery.extend({
		speed : 1100,
		offset: 0
	}, settings);	
	
	return this.each(function(){
		var caller = this
		$(caller).click(function (event) {	
			event.preventDefault();
			event.returnValue = false;
			var locationHref = window.location.href;
			var elementClick = $(caller).attr("href");
			var destination = $(elementClick).offset().top - settings.offset;
			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
				scrollPosition = $(window).scrollTop(); // Firefox hack
				window.location.hash = elementClick;
				$(window).scrollTop(scrollPosition); // Firefox hack

			});
		  	return false;
		})
	})
}
