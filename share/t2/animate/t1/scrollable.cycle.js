(function($){
	var t = $.tools.scrollable;
	t.cycle = {
		conf:{
			apiShow:1,
			cloneClass:"cloneClass",
			api:0,
			cycle:true,
			size:2,
			allIn:true
		}
	};
	function Cycle(root,conf,api){
		var self = this,
		items=api.getItems(),
			wrap=api.getItemWrap(),
			index=0,
			tail=null,
			isEnd=false,
			isAnimate=false,
			wrapChildren=$(wrap).children(),
			beginClone=false;
			if(items.length < api.size) {return false;}
		$.extend(self,{
			begin:function(time){
				$(wrap).animate({
					left:-$(wrap).children().eq(conf.size).position().left+"px"
				},conf.time,function(){
					api.setIndex(conf.size);
				})
			},
			makeComplent:function(){
				var n = self.getLength() % conf.size;
				if(n){
					items.slice(0 , conf.size-n).each(function(i){
						$(this).clone().appendTo(wrap);
						items = api.getItems();
					})
				}
				return n;
			},
			makeClone:function(i){
				var n = self.makeComplent();
				self.cloneFirst();
				self.cloneTail(n,i);
			},
			cloneFirst:function(){
				items.slice(0 , conf.size).each(function(i){
					$(this).clone().appendTo(wrap).addClass(conf.cloneClass);
				})
			},
			cloneTail:function(n,i){
				tail = $.makeArray(items.slice(-conf.size)).reverse();
				$(tail).each(function(i){
					console.log($(this).clone());
					$(this).clone().prependTo(wrap).addClass(conf.cloneClass);
				})
				if(!conf.allIn && !n){
					$(wrap).css("left",0);
					self.begin();
				}else if(n){
					$(wrap).css("left",-$(wrap).children().eq(self.getLength()-conf.size).position().left+"px");
					$(wrap).animate({
						left:-$(wrap).children().eq(api.getIndex()+conf.size).position().left+"px"
					},conf.time,function(){
						api.setIndex(api.getIndex()+conf.size);
						api.setEnd(true);
					})
				}else{
					$(wrap).css("left",-$(wrap).children().eq(api.getIndex()+conf.size).position().left+"px")
					api.setIndex(conf.size);
				}
				api.setEnd(false);
			},
			getLength:function(){
				return $(wrap).children().not($(".cloneClass")).length
			},
			judgeEnd:function(){
				var wrapLeft = parseInt($(wrap).css("left"));
				var length = self.getLength();
				var lastDomPostion = parseInt(-$(wrap).children().eq(length).position().left);
				if(wrapLeft == lastDomPostion){
					return true;
				}
			},
			judgeFirst:function(){
				var wrapLeft = parseInt($(wrap).css("left"));
				var firstDomPostion = parseInt(-$(wrap).children().eq(conf.size).position().left);
				if(wrapLeft == firstDomPostion){
					return true;
				}
			},
			groupbegin:function(time){
				return self.seekTo(conf.size, time);	
			},
			getIndexCycle:function(){
				return api.getIndex()/conf.size;
			},
			next:function(time){
				return api.move(conf.size, time);
			},
			ajaxOver:function(i){
				self.makeClone(i);
			},
			isClone:function(){
				return api.getItems().hasClass("cloneClass")
			},
			init:function(){
				t.conf = $.extend({},t.cycle.conf,conf);
				api.setConf(t.conf);
				if(conf.allIn){
					self.makeClone();
					return 1;
				}
				if(self.isClone()){
					$(wrap).css("left",-$(wrap).children().eq(conf.size).position().left);
					api.setIndex(conf.size);
					api.next = self.next;
				}
			}
		})
		api.onBeforeSeek(function(e,i){
			if(self.isClone()){
				var length = self.getLength();
				api.setIndex(conf.size);
				if(self.judgeEnd() && i==length+conf.size ){
					isEnd = true;
					$(wrap).css("left",0);
					$(wrap).animate({
						left:-$(wrap).children().eq(conf.size).position().left+"px"
					},conf.time,function(){
						api.setEnd(true);
					})
					return false;
				}
				if(self.judgeFirst() && i==0 ){
					isFirst = true;
					var n = conf.size + length;
					api.setIndex(length);
					$(wrap).css("left",-$(wrap).children().eq(n).position().left+"px");
					$(wrap).animate({
						left:-$(wrap).children().eq(length).position().left+"px"
					},conf.time,function(){
						api.setEnd(true);
					})
					return false;
				}
				api.setEnd(false)
			}
		})
		self.init();
		return self;
	}
	$.fn.cycle=function(conf){
		var opts = $.extend({},t.cycle.conf,conf),ret,
		el=$(this).data("cycle");
		if(el){return el}
		this.each(function(){
			var api = $(this).data("scrollable");
			el = $.extend({},api,new Cycle($(this),opts,api),el);
			$(this).data("cycle",el);
			ret = el;
			return el;
		})
		return  opts.apiShow ? ret :this ;
	}
})(jQuery)