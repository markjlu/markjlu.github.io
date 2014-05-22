(function($){
	var t = $.tools.scrollable;
	t.layershow={
		conf:{
			api:0,
			time:2000
		}
	}
	function Layershow(root,conf,api){
		var self = this,
		wrap = api.getItemWrap(),
		wrapChildren = $(wrap).children(),
		arr = [],
		arrIndex = [],
		wrapMoveE = $(wrapChildren).not($(".cloneClass"));
		if(conf.size>1){
			return ;
		}
		$.extend(self,{
			getconf:function(){
				return conf;
			},
			getPosition:function(){
				wrapMoveE.each(function(i,e){
					arr.push("s");
					$(e).children().each(function(i1,e1){
						arr.push($(e1).attr("top")?$(e1).attr("top"):undefined,
							$(e1).attr("right")?$(e1).attr("right"):undefined,
							$(e1).attr("bottom")?$(e1).attr("bottom"):undefined,
							$(e1).attr("left")?$(e1).attr("left"):undefined,
							$(e1).attr("topp")?$(e1).attr("topp"):undefined,
							$(e1).attr("rightp")?$(e1).attr("rightp"):undefined,
							$(e1).attr("bottomp")?$(e1).attr("bottomp"):undefined,
							$(e1).attr("leftp")?$(e1).attr("leftp"):undefined,
							$(e1).attr("time")?$(e1).attr("time"):conf.time);
						console.log("arr["+"  "+"] " + arr);
					})
					console.log("xxxx");
					console.log(arr);
				})
				for(var n = 0; n < arr.length ; n++){
					if(arr[n] == "s"){
						arrIndex.push(n)
					}
				}
				console.log(arrIndex + "xxxxx");
			},
			getSize:function(e){
				return [$(e).outerWidth(),$(e).outerHeight()]
			},
			init:function(){
				self.getPosition();
			}
		})

		self.init();

		api.onBeforeSeek(function(i,e){
			var index = api.getIndex(),
			child = wrapMoveE.children().hide();
		})

		api.onSeek(function(i,e){
			console.log(api.getIndex());
			var index = api.getIndex(),
			child = wrapMoveE.eq(index-1).children(),
			arrBegin = arrIndex[index-1];
			arrBegin++;
			var size = self.getSize(wrapMoveE);
			console.log("index ::::: " + index);
			child.each(function(i,e){
				child.show();
				var duration = {
					top:arr[arrBegin++],
					right : arr[arrBegin++],
					bottom : arr[arrBegin++],
					left : arr[arrBegin++],
					topp : arr[arrBegin++],
					rightp : arr[arrBegin++],
					bottomp : arr[arrBegin++],
					leftp : arr[arrBegin++],
					time : parseInt(arr[arrBegin++])
				};
				$(e).css({
					top : duration.topp+"px",
					left : duration.leftp+"px",
					bottom : duration.bottomp+"px",
					right : duration.rightp+"px",
				});
				$(e).animate({
					top : duration.top,
					left: duration.left,
					right : duration.right,
					bottom : duration.bottom
				},duration.time);
				console.dir(arrBegin + " arrBegin");
			})
		})
		return self;
	}
	$.fn.layershow=function(conf){
		var el = $(this).data("Layershow"),ret,conf;
		if(el){
			return el;
		}
		this.each(function(){
			var api = $(this).data("cycle");
			conf = $.extend({},api.getConf(),t.layershow.conf,conf)
			el = new Layershow($(this),conf,api);
			el = $.extend({},api,el);
			$(this).data("Layershow",el);
			ret = el;
			return ret;
		})
		return conf.api ? ret :this;
	}
})(jQuery)