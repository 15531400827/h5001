//正前方的是地3张从左数
$(function(){
	//定义图片的信息参数
	var json=[
	   //第一张图片
	   {width:400,top:20,left:50,opacity:0.2, z:2},
	   //第二张图片
	   {width:600,top:70,left:0,opacity:0.8, z:3},
	   //第三张图片
	   {width:1000,top:0,left:100,opacity:1, z:4},
	   //第四张图片
	   {width:600,top:80,left:600,opacity:0.8, z:3},
	   //第五张图片
	   {width:400,top:20,left:800,opacity:0.2, z:2}
	];
	//封装移动的函数
	function move(obj){
		if(obj){
			//单击了下一个按钮
			json.unshift(json.pop());
		}else{
			//单击了上一个按钮
			json.push(json.shift());
		}
		//遍历
		$.each(json, function(i,value) {
			lis.eq(i).css('zIndex',json[i].z).stop().animate(json[i],500,function(){
				//flag标志性变量true标志课执行 为false不可执行
				flag=true;
			});
		});
	}
	var slide=$('.slide');
	var lis=slide.find('li');
	//console.log(lis.length);
	slide.hover(function(){
		clearInterval(timer);
		$(this).children('.arrow').stop().fadeIn();
	},function(){
		clearInterval(timer);
		timer = setInterval(function(){
		move(true);
	},3000);
		$(this).children('.arrow').stop().fadeOut();
	});
	//按钮的点击
	//左单击的功能
	$('.prev').on('click',function(){
		//封装一个函数  知道单击的那个
		if(flag==true){
			//alert('你点击了上一个')
			move(true);
			flag=false;
		}
	});
	//又单击的功能
	$('.next').on('click',function(){
		if(flag==true){
			//alert('你点击了下一个')
			move(true);
			flag=false;
		}
	});
	move();
	timer = setInterval(function(){
		move(true);
	},3000);
})


