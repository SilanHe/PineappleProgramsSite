
$(function() {
	
	$('#circleText').on('click', function() {
		if ($(".circle1").css("left") == "87px"){
			$(".circle1").animate({left: "+=300px", top: "-=500px", opacity: "1"}, 1000);
			$(".circle2").animate({top: "-=500px", opacity: "1"}, 1000);
			$(".circle3").animate({left: "-=300px", top: "-=500px", opacity: "1"}, 1000);
			$("#Rbox5").animate({top: "200px"}, 1000);
		} else{

			$(".circle1").animate({left: "-=300px", top: "+=500px", opacity: "0"}, 1000);
			$(".circle2").animate({top: "+=500px", opacity: "0"}, 1000);
			$(".circle3").animate({left: "+=300px", top: "+=500px", opacity: "0"}, 1000);
			$("#Rbox5").animate({top: "100px"}, 1000);
		}

	});
});