var flag  = 1;

var windowWidth = $(window).width();
var windowHight = $(window).height();
$(function($) {
  	windowWidth = 1080;
	windowHight = 720;
	
	$("#Top").css("width",windowWidth);
	$("#Top").css("height",windowHight);

	$("#TopBgIMG").css("width",windowWidth);
	$("#TopBgIMG").css("height",windowHight);
	
	$("#ToBG").css("width",windowWidth);
	$("#ToBG").css("height",windowHight);
	
	$(".TimeBG").css("width",windowWidth);
	$(".TimeBG").css("height",windowHight);
	
	$("#TopTitle").css("left",windowWidth/9);
	$("#TopTitle").css("top",(windowHight-150)/7);
	
	$("#TopCenter").css("left",windowWidth/2-75);
	$("#TopCenter").css("top",(windowHight-150)/2-100);
	
	$("#leftBotton").css("left",windowWidth/7);
	$("#leftBotton").css("top",(windowHight-150)/1.6);
});

//			function changeBGColor()
//			{
//				var from = $("#FromBG");
//				var to = $("#ToBG");
//				
//				from.removeClass();
//				to.removeClass();
//				
//				switch(flag)
//				{
//					case 2:
//						to.addClass("productDivColor2");
//						from.addClass("productDivColor1");
//						break;
//					case 3:
//						to.addClass("productDivColor4");
//						from.addClass("productDivColor3");
//						break;
//					case 1:
//						to.addClass("productDivColor1");
//						from.addClass("productDivColor5");
//						break;
//				}
//				flag++;
//				from.fadeOut(2000);
//			}
			$(window).scroll(function(){
            var top = $('#ProductDiv').offset().top;
            var windowScroll = $(window).scrollTop();
            
            if(windowScroll>top){
            	$("#caihong").css("top", windowScroll-top+8);
            	
            	var scrollPX = windowScroll - top;
            	if(scrollPX > 500)
            	{
            		$("#TimeBG7").fadeOut(1500);
            	}
            	else{
            		$("#TimeBG7").fadeIn(1500);
            	}
            	if(scrollPX > 1120)
            	{
            		$("#TimeBG6").fadeOut(1500);
            	}
            	else{
            		$("#TimeBG6").fadeIn(1500);
            	}
            	if(scrollPX > 1699)
            	{
            		$("#TimeBG5").fadeOut(1500);
            	}
            	else{
            		$("#TimeBG5").fadeIn(1500);
            	}
            	if(scrollPX > 2360)
            	{
            		$("#TimeBG4").fadeOut(1500);
            	}
            	else{
            		$("#TimeBG4").fadeIn(1500);
            	}
            	if(scrollPX > 3080)
            	{
            		$("#TimeBG3").fadeOut(1500);
            	}
            	else{
            		$("#TimeBG3").fadeIn(1500);
            	}
            	if(scrollPX > 3700)
            	{
            		$("#TimeBG2").fadeOut(1500);
            	}
            	else{
            		$("#TimeBG2").fadeIn(1500);
            	}
            }
            
//          if( top <= windowScroll ){
//              $("#FromBG").addClass("adv-float");
//          }else{
//              $("#FromBG").removeClass("adv-float");
//          }
        });