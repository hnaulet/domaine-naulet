$(function(){
	$("ul#menu li").mouseover(function(){$(this).stop().animate({backgroundPosition:"(5px 0px)"}, {duration: 600})});
	$("ul#menu li").mouseout(function(){$(this).stop().animate({backgroundPosition:"(30px 0px)"}, {duration: 300})});
	$("ul#menu li a:not(.active)").mouseover(function(){$(this).stop().animate({paddingLeft: "35px"}, {duration: 600})});
	$("ul#menu li a:not(.active)").mouseout(function(){$(this).stop().animate({paddingLeft: "60px"}, {duration: 300})});
});

