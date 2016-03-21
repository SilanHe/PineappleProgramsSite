
$(function() {
	$('.boxText').on('click', function(){
		var boxid = $(this).attr('data-boxid');
		if ($(this).css("top") == '170px'){
			$(this).animate({top: '-=80px'}, 400);
			$('#'+boxid).delay(400).slideToggle(700);
		} else {
			$('#'+boxid).slideToggle(700);
			$(this).delay(700).animate({top: '+=80px'}, 400);
		};

	});
});