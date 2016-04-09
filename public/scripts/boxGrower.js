
$(function() {
	$('.boxText').on('click', function(){
		var boxid = $(this).attr('data-boxid');
		var imageid = $(this).attr('data-imageid')
		if ($(this).css("top")>='-28em'){//open how do i fix thisssssss??????
			$(this).animate({top: '-=3em'}, 400);
			$('#'+boxid).delay(400).slideToggle(700);
			$('#'+imageid).animate({right:'15em', top:'-=3em'}, 600);
		} else {//close
			$('#'+boxid).slideToggle(700);
			$(this).delay(700).animate({top: '+=3em'}, 400);
			$('#'+imageid).animate({right:'0', top:'+=3em'}, 600);

		};

	});
});