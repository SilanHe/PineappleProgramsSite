            function shrinkH(){
            	var header = document.getElementById('header');
            	if (window.pageYOffset <=640){
            		var header = document.getElementById('header');
                	header.style.height = (700 - window.pageYOffset) + 'px';
                	} else if (window.pageYOffset > 640){
            			var header = document.getElementById('header');
            			header.style.height = 60 + 'px';
            			}
            	}
            window.addEventListener("scroll", shrinkH, false);