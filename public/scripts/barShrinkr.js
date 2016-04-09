            function shrinkH(){
            	if (0.05*window.pageYOffset <=32){
            		var header = document.getElementById('header');
                    var bigLogo = document.getElementById('bigLogo');
                    var h1 = document.getElementById('h1');
                	header.style.height = (35 - 0.05*window.pageYOffset) + 'em';
                    bigLogo.style.opacity = (1 - 0.05*window.pageYOffset/22.5);
                    h1.style.opacity = (0.05*window.pageYOffset/22.5);
                	} else if (0.05*window.pageYOffset > 32){
            			var header = document.getElementById('header');
            			header.style.height = 3 + 'em';
            			}
            	}
            window.addEventListener("scroll", shrinkH, false);