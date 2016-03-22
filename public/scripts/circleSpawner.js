
$(function() {
	
	$('#circleText').on('click', function() {
		if ($(".circle1").css("opacity") == "0"){
			$(".circle1").animate({left: "+=300px", top: "-=500px", opacity: "1"}, 800);
			$(".circle2").animate({top: "-=500px", opacity: "1"}, 800);
			$(".circle3").animate({left: "-=300px", top: "-=500px", opacity: "1"}, 800);
			$("#Rbox5").animate({top: "380px"}, 500);
		} else{

			$(".circle1").animate({left: "-=300px", top: "+=500px", opacity: "0"}, 800);
			$(".circle2").animate({top: "+=500px", opacity: "0"}, 800);
			$(".circle3").animate({left: "+=300px", top: "+=500px", opacity: "0"}, 800);
			$("#Rbox5").animate({top: "280px"}, 500);
		}

	});
});