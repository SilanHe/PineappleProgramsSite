            function shrinkH(){
            	if (window.pageYOffset <=640){
            		var header = document.getElementById('header');
                    var bigLogo = document.getElementById('bigLogo');
                    var h1 = document.getElementById('h1');
                	header.style.height = (700 - window.pageYOffset) + 'px';
                    bigLogo.style.top = (200 - window.pageYOffset) + 'px';
                    bigLogo.style.opacity = (1 - window.pageYOffset/450);
                    h1.style.opacity = (window.pageYOffset/450);
                	} else if (window.pageYOffset > 640){
            			var header = document.getElementById('header');
            			header.style.height = 60 + 'px';
            			}
            	}
            window.addEventListener("scroll", shrinkH, false);