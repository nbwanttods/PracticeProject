 function changeClassName(className){
	    		$('.Click').addClass("noClick");
	    		$('.Click').removeClass('Click');
	    		$('.ClickTitle').addClass('noClickTitle');
	    		$('.ClickTitle').removeClass('ClickTitle');
	    		$(className).addClass('Click');
	    		$(className).removeClass('noClick');
	    		$(className).addClass('ClickTitle');
	    		$(className).removeClass('noClickTitle');
	    		
	    	
	    }
 
function changeImage(imgName){
	    		document.getElementById('firstPageImg').src = "img/tabbar_icon_home.svg";
	    		document.getElementById('categoryImg').src = "img/tabbar_icon_fenlei.svg";
	    		document.getElementById('buyCarImg').src = "img/tabbar_icon_gouwu.svg";
	    		document.getElementById('myImg').src = "img/tabbar_icon_wode.svg";
	    		if(imgName == 'firstPageImg'){
	    			document.getElementById(imgName).src = "img/tabbar_icon_home_pre.svg";
	    		}else if(imgName == 'categoryImg'){
	    			document.getElementById(imgName).src = "img/tabbar_icon_fenlei_pre.svg";
	    		}else if(imgName == 'buyCarImg'){
	    			document.getElementById(imgName).src = "img/tabbar_icon_gouwu_pre.svg";
	    		}else if(imgName == 'myImg'){
	    			document.getElementById(imgName).src = "img/tabbar_icon_wode_pre.svg";
	    		}
	    		
	    }
 function changeTabbar(className,imageName){
	    				changeClassName(className);
	   				changeImage(imageName);
	    }
function attach(index,className,imageName){
	   		
	   		switch (index){
	   			case 0:
	   				changeTabbar(className,imageName);
	   				break;
	   			case 1:
	   				changeTabbar(className,imageName);
	   				break;
	   			case 2:
	   				changeTabbar(className,imageName);
	   				break;
	   			case 3:
	   				changeTabbar(className,imageName);
	   				break;
	   			default:
	   				break;
	   		}
	   		
	   	}