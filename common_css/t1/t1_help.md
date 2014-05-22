## 网站公用样式说明
> ###按钮：
>> 1. 目前网站共有4种尺寸，4种颜色的公用按钮
>> 2. 颜色的使用与按钮的重要程度有关，橙 > 深蓝 > 天蓝 >
  白色 > 灰
>> 3. 橙色按钮代表最重要的，一般和购买，支付行为有关
>> 4. 深蓝色按钮一般会与购物车小图标搭配使用
>> 5. 灰色图标表示按钮状态为不可点击
>> 6. 按钮的尺寸与重要性无关

使用说明：
> 
	egg_btns_t1 ~ egg_btns_t4    代表按钮的四种尺寸 
    egg_btns_org , egg_btns_blue , egg_btns_lightblue , 
    egg_btns_gray ,egg_btns_white  代表按钮的四种颜色 
    egg_btns_icon 代表按钮是有图标的
    egg_btns_car 代表按钮的图标是购物车
    
>举例：
>>一个3号灰色按钮的样式就是 
>    
    <a href="#" class="egg_btns_t3 egg_btn_gray"></a>
>>一个2号蓝色代购物车的按钮的样式就是 
>    
    <a href="#" class="egg_btns_t2 egg_btns_blue egg_btns_car egg_btns_icon"></a> 
	


> ###下拉选择：
> 目前有 __1行2列__ ，__1行1列__ 两种
