$ (function() {
	$('.logo').on('click', function(){
		var textid = $(this).attr('data-textid');
		if ($('#'+ textid).css("width") == '1px'){
			$('#'+ textid).animate({width:'300px'}, 2000);
			$(this).animate({left: '300px'}, 2000);
		} else {
			$('#'+ textid).animate({width:'1px'}, 2000);
			$(this).animate({left: '0px'}, 2000);
		};
	});


});