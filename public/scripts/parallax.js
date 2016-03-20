	

	function parallax(){
		var lay_0 = document.getElementById('layer0');
		lay_0.style.top = -(window.pageYOffset / 4) + 'px';
		}
	window.addEventListener("scroll", parallax, false);