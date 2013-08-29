$(function(){
	// code in here runs when the document is ready

	$("a").click(function(){
			//get the id of the target
			var targetId = $(this).attr('href');
			console.log(targetId);
			
			//use jquery to select the target by it's id
			var target = $(targetId);
			console.log(target);

			//figure out how far the target is from the top of the page
			var offset = target.position().top - 52;
			console.log(offset);

			//scroll to the location of the target
			$("body").animate({ scrollTop : offset}, 1000, "swing");
			return false;
	});

	// $("a").animate({font-size : 50});
});