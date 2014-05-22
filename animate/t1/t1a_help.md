## 异步加载下的无缝滚动
> 1.在实际生产情况中，有很多情况下滚动的信息不是一次加载全的，只有当用户点击切换按钮的时候才会异步加载滚动事件。
> 2.当所有内容加载完成之后，用户再点击最后一页的时候就无法再无缝的滚动到第一个Tab了

## 调用方法
		var api2=$(".t1").scrollable({
			next:"#r",
			prev:"#l"
		}).cycle({size:3,api:1,allIn:false});
		var n=1;
		api2.onBeforeSeek(function(i){
			if(n==2){api2.ajaxOver(i)}
			n++;
		})
		$("#m").bind("click",function(){
			api2.ajaxOver()
		})

> Demo 模拟了一个异步加载的情况，当用户点击第二次的时候，已经没有新的数据请求了，调用ajaxOver()方法之后，可以让用户循环滚动
> 可以观察点击MakeClone之后的dom变化
> 