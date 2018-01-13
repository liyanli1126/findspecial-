function b(){
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > 100){
		$('.back-top').show();
	}else{
		$('.back-top').hide();
	}
}
$(document).ready(function(e) {
	b();
	$('.back-top').click(function(){
		$(document).scrollTop(0);	
	})
	var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					slidesPerView: 1,
					paginationClickable: true,
					spaceBetween: 30,
					loop: true
				});
});
$(window).scroll(function(e){
	b();		
});
$(function(){
	$(".menu_listLy ul>li").click(function(){
		$(this).find(".menu_second").show().siblings().parents("li").siblings().find("ul").hide();
		
		$(this).find(".menu_second").show().siblings().parents("li").siblings().find("ul").find("i").text("+")
	})
	$(".menu_addS").click(function(){
		$(this).next("ul").show().siblings().parent("li").siblings().find("ul").hide();
		$(this).find("i").text("-").siblings().parent("li").siblings().find(".menu_addS").text("+");
		$(this).siblings().parent("li").siblings().find(".menu_addS").find("i").text("+")
		
	})
	$(".app_hide i").click(function(){
		
		if($(this).attr("class") == "ui-icon-next"){
			$(this).prev().show();
			$(this).removeClass("ui-icon-next");
			$(this).addClass("ui-icon-prev");
		}else{
			$(this).prev().hide();
			$(this).removeClass();
			$(this).addClass("ui-icon-next");
		}
	})
// 注册
// $('.index_login').click(function(){
// 	$(".register_wrap").css('display','block');
// 	$(".register_bg").css('display','block');
// })
// $('.close').click(function(){
// 	$(".register_wrap").css('display','none');
// 	$(".register_bg").css('display','none');
	
// })
$('.index_login').click(function(){
	//$(".Regisration_wrap").toggle();
	$(".Regisration_wrap").css('display','block');
	$(".Regisration_bgc").css('display','block');
})
$('.close').click(function(){
	$(".Regisration_wrap").css('display','none');
	$(".Regisration_bgc").css('display','none');
	$('.specials').css('display','none');	
})/* 
$('strong').click(function(){
	$('.Terms').toggle();
	
}) */
// 订阅
/* 
$('.finish').click(function(){
	$('.specials').css('display','none');
}) */
$(".submit").click(function(){

	window.location.href="Subscribe.html"
})

// 导航
$('.toggle_show').click(function(){
	$('.ly_menu ul').addClass('index_uL1');
	$('.toggle_hide').css('display','block');
	$('.toggle_show').css('display','none')
})
$('.toggle_hide').click(function(){
	$('.ly_menu ul').css('height','60');
	$('.toggle_show').css('display','block')
	$('.toggle_hide').css('display','none')
})

//不同节日
$('.special_occasions_info').on('click',function(){
	var index = $(this).index();
	$(this).parents('.special_occasions').find('ul').eq(index).toggle();
	$(this).parents().siblings().find('.special_occasions_menu').slideUp();
})
$('.special_occasions_menu li').click(function(){
	console.log(1)
	var tex = $(this).text();
	var index = $(this).index();
	$(this).parents(".special_occasions").find('.special_occasions_info a').html(tex);
	console.log($(this).parents("li").parent())
	$(this).parent().hide();
})
	
})




