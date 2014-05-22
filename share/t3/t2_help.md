## CSS3 实现 新蛋摩天轮大转盘
> 最近新蛋上线了一个[摩天轮](http://www.newegg.cn/Ferriswheel?cm_sp=HP-_-Top-banner-_-Ferriswheel "去转一圈")的抽奖活动，大致流程就是点击抽奖，然后调用一个Flash的大转盘。那么，这个大转盘可不可以用CSS来实现呢~

>下列浏览器表示毫无压力：

![](h1.png)

>如果是希望在 _IE9-_ 浏览器中实现这个特性，那么请无视此页面~~
>![](th1.gif)

>摩天轮用到的CSS3属性

> __transition__：
>> * 语法 ： transition：[ transition-property ] || [ transition-duration ] || [ transition-timing-function ] || [ transition-delay ]
>* 说明：CSS3 的 transition  可以实现和 Jquery 的 animate函数一样的效果。
>>
		img{ -webkit-transition:width 1s linear 1s  }
		/*这句话代表图片的宽度如果改变了，在1秒钟内图片的会匀速变动到新的尺寸*/
>>所有的CSS动画都是基于此项属性的。
>> <style>#t1{-webkit-transition:width 1s linear ;background:pink;width:100px;text-align:center;height:30px;line-height:30px} #t1:hover{width:100%;cursor:pointer}</style>
>> <div id="t1" style="">鼠标悬浮</div>

>__transform__：
>> * 语法 ： none | matrix(<number>,<number>,<number>,<number>,<number>,<number>)? translate(<length>[,<length>])? translateX(<length>)? translateY(<length>)? rotate(<angle>)? scale(<number>[,<number>])? scaleX(<number>)? scaleY(<number>)? skew(<angle>[,<angle>])? skewX(<angle>) || skewY(<angle>)?
>> * 说明： transformer就是CSS3动画里面的变形金刚，一个元素的各种变形都能通过他来实现，摩天轮主要用到了transformer的rotate【旋转】属性。	
		img{ -webkit-transformer:rotate(360deg) }
		/*这句话代表图片旋转360度，也就是一圈 摩天轮大的轮盘旋转就是靠这个实现的*/



>><div><div id="t2"><img src="zhuan.png"></div></div>

<style>#t2{float:left;-webkit-animation:chelun 1s linear  infinite} @-webkit-keyframes chelun{100%{-webkit-transform:rotate(360deg)} }</style>


><div style="clear:both">__animation__:</div>
>>* 语法：animation：[[ animation-name ] || [ animation-duration ] || [ animation-timing-function ] || [ animation-delay ] || [ animation-iteration-count ] || [ animation-direction ]] [ , [ animation-name ] || [ animation-duration ] || [ animation-timing-function ] || [ animation-delay ] || [ animation-iteration-count ] || [ animation-direction ]]
>>* 说明：需要搭配keyframes使用，实现动画步骤与样式的分离
>> 
      img{-webkit-animation:keyfn 2s linear infinite}
	  @-webkit-keyframes{
			50%{
				width:100px;
            }
			100%{
				width:200px;
   			}
      }	
	  /*图片从原始大小变化到100px宽【0S → 1S】，再变化到200px宽 【1S → 2s】*/![](http://i.imgur.com/m8HckGa.gif)

<style> .t1{position: absolute; left:50%; -webkit-animation:sport 3s linear 1s infinite ; } @-webkit-keyframes sport{1%{-webkit-transform:  translate(10px) ; } 50%{-webkit-transform:  translate(500px) scale(1.5); } 51%{-webkit-transform:	translate(500px) rotateY(186deg) scale(1.5)} 100%{-webkit-transform:	rotateY(186deg) scale(1)} } </style>

>> <div class="t1"><img src="ren.gif" alt="" /></div>
>>css3 实现的忙碌小人

>摩天轮的__实现原理__：
>>有了上面几个属性，实现摩天轮的效果就很简单了，
>>* 利用transform的rotate属性让摩天轮自转
>>* 通过transform的translate属性让人物坐进摩天轮，走出摩天轮
>>* 整个场景的动画通过时间延时经行控制。