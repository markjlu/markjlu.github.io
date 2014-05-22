## 节点分步动画
> 根据Dom传入的参数，可以自定义Dom载入到屏幕之后的运动轨迹

## 代码调用
>js：
>	
	$(".t1").scrollable({next:"#r",prev:"#l"}).cycle({
		size:1,
		allIn:true,
		apiShow:0
	}).layershow();
>Html
>	
			<li class="s2 n2">
				<div class="loader" left=100 top=10 topp=-150 leftp=-200 time=1500>
				  <div class="spinner yellow"></div>
				  <div class="spinner orange"></div>
				  <div class="spinner red"></div>
				  <div class="spinner pink"></div>
				  <div class="spinner violet"></div>
				  <div class="spinner mauve"></div>
				  <div class="spinner light-yellow"></div>
				</div>
				<div class="loader" right=870 top=10 topp=-150 rightp=-836 time=1500>
				  <div class="spinner yellow"></div>
				  <div class="spinner orange"></div>
				  <div class="spinner red"></div>
				  <div class="spinner pink"></div>
				  <div class="spinner violet"></div>
				  <div class="spinner mauve"></div>
				  <div class="spinner light-yellow"></div>
				</div>
				<div class="loader" left=315 top=10 topp=-150 leftp=-200 time=1500>
				  <div class="spinner yellow"></div>
				  <div class="spinner orange"></div>
				  <div class="spinner red"></div>
				  <div class="spinner pink"></div>
				  <div class="spinner violet"></div>
				  <div class="spinner mauve"></div>
				  <div class="spinner light-yellow"></div>
				</div>
				<div class="loader" right=620 bottom=42 bottomp=-150 rightp=-200 time=1500>
				  <div class="spinner yellow"></div>
				  <div class="spinner orange"></div>
				  <div class="spinner red"></div>
				  <div class="spinner pink"></div>
				  <div class="spinner violet"></div>
				  <div class="spinner mauve"></div>
				  <div class="spinner light-yellow"></div>
				</div>
				<div class="loader" left=1020 top=10 topp=-150 leftp=-200 time=1500>
				  <div class="spinner yellow"></div>
				  <div class="spinner orange"></div>
				  <div class="spinner red"></div>
				  <div class="spinner pink"></div>
				  <div class="spinner violet"></div>
				  <div class="spinner mauve"></div>
				  <div class="spinner light-yellow"></div>
				</div>
				<div class="loader" left=1267 bottom=42 bottomp=-150 leftp=-200 time=1500>
				  <div class="spinner yellow"></div>
				  <div class="spinner orange"></div>
				  <div class="spinner red"></div>
				  <div class="spinner pink"></div>
				  <div class="spinner violet"></div>
				  <div class="spinner mauve"></div>
				  <div class="spinner light-yellow"></div>
				</div>
			</li>
> 通过给标签加入left,leftp,top,toop,bottom,bottomp,right,rightpmtime属性可以控制每一个标签的运动方向，初始运动点，运动时间组合成各种运动效果
>
	<a href="#"  left=100 top=67 topp=-150 leftp=100 time=1500></a>
>表示Dom从Top:-150px,left:100px的位置花1.5秒移动到left:100px;67px位置【DOM垂直从上往下运动】
>
	<div class="loader" left=1267 bottom=42 bottomp=-150 leftp=-200 time=1500>
>表示Dom从Bottom:-150px,leftp:-200px的位置花1.5秒移动到left:1267px;bottom:42px位置【DOM从下往上运动】