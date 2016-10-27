$(function(){
	var names=[
				["http://www.baidu.com"], //0   这一个是左下角编程的地址，从下面开始对应图标
				["http://www.bootstrap.com"], //1
				["http://www.4399.com"], //2
				["http://www.jq22.com"]
			];
			
	$(".orange").click(function(){
		window.location.href=names[0];
	})
	$(".blue").click(function(){
		window.location.href=names[1]
	})
	$(".red").click(function(){
		window.location.href=names[2]
	})
	$(".green").click(function(){
		window.location.href=names[3]
	})
		});