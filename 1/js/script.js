$(document).ready(function(){
	
	/* gnb */
	$(".gnb>li").mouseenter(function(){
		$(this).children(".sub_menu").stop().slideDown();
	});
	$(".gnb>li").mouseleave(function(){
		$(this).children(".sub_menu").stop().slideUp();
	});

	/* gnb */
	$(".qmenu_gnb>li").click(function(){
		$(this).children(".q_sub_menu").stop().slideDown();
	});
	$(".gnb>li").click(function(){
		$(this).children(".q_sub_menu").stop().slideUp();
	});

	//모달창
	$(".top li").eq(0).click(function(){
		$(".modal").show();
	});
	$(".close").click(function(){
		$(".modal").hide();
	});

	$(".top li").eq(1).click(function(){
		$(".modal2").show();
	});
	$(".close2").click(function(){
		$(".modal2").hide();
	});

    /* 퀵메뉴 */
	$(".bars p").on("click",function(){
        $(".bars").animate({"right":"300px"},600);
        $(".qmenu").animate({"right":"0"},600);
        $(".bars p").css("display","none");
    });
    $(".hi").on("click",function(){
        $(".bars").animate({"right":"0"},600);
        $(".qmenu").animate({"right":"-300px"},600);
        $(".bars p:nth-child(1)").css("display","block");
    });


	/* menu 탭메뉴 */
	$(".sub_gnb li:nth-child(1)").on("click",function(){
		$(".menu li").css("display","none"); //초기화
		$(".menu .c").css("display","block");
	});
	$(".sub_gnb li:nth-child(2)").on("click",function(){
		$(".menu li").css("display","none"); //초기화
		$(".menu .p").css("display","block");
	});
	$(".sub_gnb li:nth-child(3)").on("click",function(){
		$(".menu li").css("display","none"); //초기화
		$(".menu .l").css("display","block");
	});
	$(".sub_gnb li:nth-child(4)").on("click",function(){
		$(".menu li").css("display","none"); //초기화
		$(".menu .a").css("display","block");
	});
	$(".sub_gnb li:nth-child(5)").on("click",function(){
		$(".menu li").css("display","none"); //초기화
		$(".menu .m").css("display","block");
	});
	$(".menu_box h2").on("click",function(){
		$(".menu li").css("display","none"); //초기화
		$(".menu li").css("display","block");
	});

	$(".sub_gnb li:nth-child(1)").on("click",function(){
		$(".menu2 li").css("display","none"); //초기화
		$(".menu2 .dessert").css("display","block");
	});
	$(".sub_gnb li:nth-child(2)").on("click",function(){
		$(".menu2 li").css("display","none"); //초기화
		$(".menu2 .bake").css("display","block");
	});
	$(".sub_gnb li:nth-child(3)").on("click",function(){
		$(".menu2 li").css("display","none"); //초기화
		$(".menu2 .cake").css("display","block");
	});
	$(".menu_box h2").on("click",function(){
		$(".menu2 li").css("display","none"); //초기화
		$(".menu2 li").css("display","block");
	});

	//menu 더보기버튼
	$(".more1").hide();
	$(".more").click(function(){
		$(".more1").hide();
		$(".ivent2").fadeIn();
	});

	//store 탭
	$(".st_tap li").eq(0).addClass("st_tab_on");
	$(".st_tap li").eq(1).addClass("st_tab_off");

	$(".st_tap li").eq(0).click(function(){
		$(".st_tap li").removeClass(); //탭버튼 초기화
		$(".st_tap li").eq(0).addClass("st_tab_on");
		$(".st_tap li").eq(1).addClass("st_tab_off");
		$(".se").show();
		$(".lo").hide();
	});
	$(".st_tap li").eq(1).click(function(){
		$(".st_tap li").removeClass(); //탭버튼 초기화
		$(".st_tap li").eq(1).addClass("st_tab_on");
		$(".st_tap li").eq(0).addClass("st_tab_off");
		$(".se").hide();
		$(".lo").show();
	});	

	

	var swiper = new Swiper(".swiper1", {
		slidesPerView: 1,
		loop: true, //반복
		autoplay: {
		delay: 3000,
		disableOnInteraction: false,
		}, //자동실행
		navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
		}, //네비게이션
		pagination: {
		el: ".swiper-pagination",
		}, //페이지
		});



})