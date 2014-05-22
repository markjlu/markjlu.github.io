## 滚动种大小屏的切换
> 1. 滚动是基于选中元素的CSS，left值判定的，所以当用户有大小屏切换，改变了滚动元素的宽度的时候，left值肯定会有变化，目前的做法是每次切换大小屏的时候初始化滚动位置为首位

## 调用方法
	var api2=$(".t1").scrollable({
		next:"#r",
		prev:"#l"
	}).cycle({size:3,api:1,allIn:false});
	$(window).resize(function(){
		$(document).width() <= 1500 ? $("body").addClass("sm") && api2.onResize() : $("body").removeClass("sm") && api2.onResize();
	})

> Demo 在用户大小屏切换的时候调用OnResize方法，就能保证用户切换屏幕的时候，浏览的记录不会被改变