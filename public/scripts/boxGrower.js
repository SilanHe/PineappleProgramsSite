
$(function() {
	$('.boxText').on('click', function(){
		var boxid = $(this).attr('data-boxid');
		var imageid = $(this).attr('data-imageid')
		if ($(this).css("top") >= '-580px'){//open
			$(this).animate({top: '-=80px'}, 400);
			$('#'+boxid).delay(400).slideToggle(700);
			$('#'+imageid).animate({right:'300px', top:'-=80px'}, 600);
		} else {//close
			$('#'+boxid).slideToggle(700);
			$(this).delay(700).animate({top: '+=80px'}, 400);
			$('#'+imageid).animate({right:'0px', top:'+=80px'}, 600);

		};

	});
});