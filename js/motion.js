/*
// 모바일인지 아닌지 체그하여 사이즈 리사이징 
	  └ 1100이상에서는 리사이징 발생하지 않아 브라우저 작은사이즈에서 1100이상의 브라우저로 리사이즈 시 새로고침을 하지않아 jQuery작동불능
	  ▼
//모바일 체크
function isMobile(){
 return /(iphone|ipod|ipad|android|blackberry|windows ce|palm|symbian)/i.test(navigator.userAgent);
}
 
//모바일이 아닌경우
if(!isMobile()){
    //사이즈 조정시 리사이징
    var startBool = true;
    $( window ).resize( function(){
 
        if( startBool ) {
            
            var locUrl = location.href;
            location.href = locUrl;        
            startBool = false; 
        }
    });
}
*/

// 윈도우 리사이즈 변화 감지하여 > 새로고침
// 일반적인 다시 읽기 > window.location.reload(); 컴퓨터의 캐쉬에서 우선 파일 찾음 이후 없는 소스 서버에서 내려받기
$( window ).resize(function() {
   window.location.reload(); 
});




$(function(){
    
//------------------------------------------------------------
// (공통) 스크롤 탑 버튼
    $(".btn_top").click(function(){
        $("html,body").animate({scrollTop:"0"});
    });
    
    
if (document.body.clientWidth < 1100) {
	
 
}else{
//   $("<section id='scroll'></section>").prependTo("body");
//		$("<p class='ms'>111</p><p class='n1a'>111</p><p class='n1b'>111</p><p class='n1c'>111</p><p class='n1d'>111</p>").prependTo("#scroll");
//		$("#scroll").css({position: "fixed", width: "200px", height: "150px", background: "rgba(0,0,0,0.8)", right: "0", zIndex:"50"});
//		$("#scroll p").css({color:"#fff", textAlign: "center", right: "0", zIndex:"100"});
		$(".newest1_a_part2 ul li").css({display:"none"});

		// 직접 동적요소   
		$("h1").css({marginLeft:"-700px"});
		$("h1").animate({marginLeft:"0"},800);

		$(".gnb").css({marginTop:"-50px"});
		$(".gnb li:eq(0)").animate({marginTop:"80px"},400);
		$(".gnb li:eq(1)").animate({marginTop:"80px"},500);
		$(".gnb li:eq(2)").animate({marginTop:"80px"},600);
		$(".gnb li:eq(3)").animate({marginTop:"80px"},800);
		$(".visual_wrap p").css({paddingTop:"80px", opacity:"0"});
		$(".visual_wrap p").animate({paddingTop:"0", opacity:"1"},1500);

		// 자바스크립트 문서는 html문서의 위치로 부터 경로를 시작	
		$(".newest1_d_wrap p:eq(1)").mouseover(function(){   
			$(this).css({"background":"url(images/popup_btn2.png) no-repeat left 30px center #dc287c"});
			$(".newest1_d_wrap p:eq(1) button").css({"color":"#fff"});
		});
		$(".newest1_d_wrap p:eq(1)").mouseleave(function(){
		  $(this).css({"background":"url(images/popup_btn1.png) no-repeat left 30px center #fff"});
		  $(".newest1_d_wrap p:eq(1) button").css({"color":"#dc287c"});
		});
		// 스크롤

		var sectionState1 = 1; // newest1 h3
		var sectionState2 = 1; // newest1_a
		var sectionState3 = 1; // newest1_c
		var sectionState3_1 = 1; // newest1_c li
		var sectionState4 = 1; // newest1_d
		var sectionState5 = 1; // newest1_d
		var sectionState6 = 1; // newest2_wrap>p
		var sectionState7 = 1; // newest3

	// ★ Q. 스크롤 움직일때 마다 실행됨
		function snsMotion1(){
		  if( sectionState1 == 1){   
			 sectionState1 = 2;
			 $(".newest1 h3").css({paddingTop:"100px", opacity:"0"});
			 $(".newest1 h3").animate({paddingTop:"0", opacity:"1"}, 1500);
		  }else{
			 $(".newest1 h3").css({paddingTop:"0px", opacity:"1"});
		  }
		}; // newest1 h3

		function snsMotion2(){

		  if( sectionState2 == 1){            
			  sectionState2 = 2;

			$(".newest1_a_part1_1").css({opacity:"0", marginTop:"100px"});//1.조작
			$(".newest1_a_part1_2 p, .newest1_a_part1_2 ul li").css({opacity:"0"});//1.조작
			$(".newest1_a_part1_3>*").css({ opacity:0 });//1.조작

			$(".newest1_a_part1_1").stop().animate({marginTop:"25px", opacity:"1"}, 1500, function(){
					$(this).stop().animate({opacity:"0"}, 2500);
					$(".newest1_a_part1_2 p").stop().animate({opacity:"1"},2000,function(){

							$(".newest1_a_part1_2 li:eq(0)").stop().animate({opacity:"1"},1500);
							$(".newest1_a_part1_2 li:eq(1)").stop().delay(800).animate({opacity:"1"},2000);
							$(".newest1_a_part1_2 li:eq(2)").stop().delay(1800).animate({opacity:"1"},2500);
							$(".newest1_a_part1_2 li:eq(3)").stop().delay(1800).animate({opacity:"1"},2500);
							$(".newest1_a_part1_2 li:eq(4)").stop().delay(3000).animate({opacity:"1"},2500,function(){

								  $(".newest1_a_part1_2>*").stop().animate({opacity:"0"},2000,function(){
										  $(".newest1_a_part1_3 p:eq(0)").css({marginTop:"-55px"});
										  $(".newest1_a_part1_3 p:eq(0)").stop().animate({marginTop:"-300px", opacity: "1"},2000,function(){

												 $(".newest1_a_part1_3 p:eq(1)").stop().animate({opacity:"1"}, 2000,function(){

														$(".newest1_a_part1_3").css({display:"block"});//조작
														$(".newest1_a_part2").css({marginTop:"-125px"});//조작
														$(".newest1_a_part2 ul li").css({display:"block", opacity:"0"});//조작

														$(".newest1_a_part2 ul li:eq(0)").stop().animate({display:"block", opacity:"1"},3000);
														$(".newest1_a_part2 ul li:eq(1)").stop().delay(1000).animate({display:"block", opacity:"1"},2500);
														$(".newest1_a_part2 ul li:eq(2)").stop().delay(2000).animate({display:"block", opacity:"1"},2000);
														$(".newest1_a_part2 ul li:eq(3)").stop().delay(3000).animate({display:"block", opacity:"1"},1500);
												 });
										  });
									});  
							}); 
					});
			});
			 
		  }else{
			 $(".newest1_a_part1_1").css({opacity:"0"});
									//$(".newest1_a_part1_2").css({opacity:"0"});
									// $(".newest1_a_part1_3 p").css({opacity:"1"});    의심1
			 $(".newest1_a_part2 li").css({opacity:"1"});
		  }; 
		}; // newest1_a
		function snsMotion3(){
		  if(sectionState3 == 1){
			 sectionState3 = 2;

	//           $(".newest1_c li").css({opacity:"0"})
	//           $(".newest1_c li").animate({opacity:"1"},2000);
			 $(".newest1_c h4").css({marginRight:"-100px", opacity:"0"});   
			 $(".newest1_c h4").stop().animate({marginRight:"0", opacity:"1"},2000);   
			 $(".newest1_c p").css({marginTop:"50px", opacity:"0"});

			 $(".newest1_c p").stop().animate({marginTop:"0", opacity:"1"},2000);
		  }else{
			 $(".newest1_c h4, .newest1_c p").css({opacity:"1"});
		  };   
		}; // newest1_c 
		function snsMotion3_1(){
		  if(sectionState3_1 == 1){
			 sectionState3_1 = 2;

				$(".newest1_c li").css({opacity:"0", marginTop:"-50px"});
				$(".newest1_c li").animate({opacity:"1", marginTop:"0px"},2000);

			 }else{
				$(".newest1_c li").animate({opacity:"1", marginTop:"0px"});
			 };
		}; // newest1_c li
		function snsMotion4(){
		  if(sectionState4 == 1){
			 sectionState4 = 2;

			 $(".newest1_d h4").css({marginLeft:"-100px", opacity:"0"});   
			 $(".newest1_d ul li").css({ marginTop:"-50px", opacity:"0"});
			 $(".newest1_d p:eq(0)").css({marginTop:"50px", opacity:"0"});

			 $(".newest1_d h4").stop().animate({marginLeft:"0", opacity:"1"},2000);   
			 $(".newest1_d p:eq(0)").stop().animate({marginTop:"0", opacity:"1"},2000,function(){
				$(".newest1_d li:eq(0)").stop().animate({marginTop:"-20px", opacity:"1"},1500);
				$(".newest1_d li:eq(1)").stop().animate({marginTop:"0", opacity:"1"},1500);
				$(".newest1_d li:eq(2)").stop().animate({marginTop:"20px", opacity:"1"},1500);
				$(".newest1_d li:eq(3)").stop().animate({marginTop:"40px", opacity:"1"},1500);
			 });
		  } 
		}; // newest1_d
		function snsMotion5(){
		  if( sectionState5 == 1){
			  sectionState5 = 2;

				$(".newest1_d p:eq(1)").css({width:"100px", opacity:"0"}); 
				$(".newest1_d p:eq(2)").css({width:"50%", opacity:"0"}); 
				$(".newest1_d p:eq(1)").stop().animate({width:"400px", opacity:"1"},3000); 
				$(".newest1_d p:eq(2)").stop().animate({width:"100%", opacity:"1"},3000); 
			 }else{
				$(".newest1_d p:eq(1)").css({width:"400px", opacity:"1"}); 
				$(".newest1_d p:eq(2)").css({width:"100%", opacity:"1"}); 
			 };
		}; // newest1_d p:eq(2)
	//  ★ Q. d에서 c로 넘어갈때 스크롤이 먹히지 않음 / snsMotion4~5번에서 원인이 있을것으로 예상됨...
		function snsMotion6(){
		  if( sectionState6 == 1){
			  sectionState6 = 2;

				$(".newest2_wrap>p").css({paddingTop:"50px", opacity:"0"});
				$(".newest2_wrap>p").animate({paddingTop:"-50px",opacity:"1"},2000);
		  }else{
				$(".newest2_wrap>p").animate({paddingTop:"0",opacity:"1"},2000);
		  };
		}; // newest2_wrap>p
		function snsMotion7(){
		   if(sectionState7 == 1){
			  sectionState7 = 2;

				 $(".newest3 p:eq(0)").css({marginTop:"50px", opacity:"0"});
				 $(".newest3 p:eq(1)").css({marginTop:"-50px", opacity:"0"});
				 $(".newest3 p:eq(2)").css({opacity:"0"});

				 $(".newest3 p:eq(0)").animate({marginTop:"0", opacity:"1"}, 1500, function(){
					$(".newest3 p:eq(1)").animate({marginTop:"0", opacity:"1"}, 1500, function(){
						$(".newest3 p:eq(2)").animate({opacity:"1"});
					});
				 });   
		   };
		}; // newest3


		//-------------------------------각콘텐츠 영역별 애니메이션 진행 이전 조작단계 설정 구역------------------------
			
			//1.
			$(".newest1 h3").css({paddingTop:"200px", opacity:"0"});
			
			//2. 따뜻한 기부 문화의 확산,카카오플랫폼을 통한 쉬운 기부
			$(".newest1_a_part1_1").css({opacity:"0"});
			$(".newest1_a_part1_2 p, .newest1_a_part1_2 ul li").css({opacity:"0"});
			$(".newest1_a_part1_3").css({marginTop:"55px" });

			//3.나눔, 함께 할 수 있기에 더욱 즐겁습니다(타이틀 & 아이콘 리스트)
			 $(".newest1_c h4, .newest1_c p").css({opacity:"0"});
			 $(".newest1_c li").css({opacity:"0"});

			//4. 응원, 공유하면 기부되는 가장 쉬운 나눔/나눔이 모여 함께 만든 변화는 어떨까요?/카드(타이틀 & 나눔카드)
			$(".newest1_d h4, .newest1_d p:eq(0), .newest1_d li").css({opacity:"0"});
			//4-1. 버튼/하단 문구
			$(".newest1_d p:eq(1)").css({width:"0", opacity:"1"}); 
			$(".newest1_d p:eq(2)").css({width:"100%", opacity:"1"}); 

			//5. 속마음버스 본내용문구
			$(".newest2_wrap>p").css({opacity:"0"});

			//6. 최하단 로고/슬로건/버튼
			$(".newest3 p:eq(0)").css({marginTop:"50px", opacity:"0"});
			$(".newest3 p:eq(1)").css({marginTop:"-50px", opacity:"0"});
			$(".newest3 p:eq(2)").css({opacity:"0"});

        //------------------------------------------------------------
        // 메뉴 스크롤    
    
        $(".gnb li:eq(0)").click(function(){
            $("html,body").stop().animate({scrollTop: 1000});
        });
        $(".gnb li:eq(1)").click(function(){
            $("html,body").stop().animate({scrollTop: 4000});
        });
        $(".gnb li:eq(2)").click(function(){
            $("html,body").stop().animate({scrollTop: 5100});
        });
        $(".gnb li:eq(3)").click(function(){
            $("html,body").stop().animate({scrollTop: 6350});
        });
    
    
		//-------------------------------------------------------------
		  $(window).scroll(function(){
				 var sn = $("html,body").scrollTop();
				 $("#scroll .ms").text( sn );


				 var n1a = parseInt($(".newest1_a").css("height"));
				 //$("#scroll .n1a").text( n1a );

				 var n1b = parseInt($(".newest1_b").css("height")) + n1a;
				 $("#scroll .n1b").text( n1b );

				 var n1c = parseInt($(".newest1_c").css("height")) + n1b;
				 $("#scroll .n1c").text( n1c );

				 var n1d = parseInt($(".newest1_d").css("height")) + n1c;
				 $("#scroll .n1d").text( n1d );

			    //1.
				 if(sn>300){ snsMotion1();};         
				 //2.
				 if(sn>550){ snsMotion2();};
				 //3-1.
				 if(sn>2250){ snsMotion3();};
				 //3-2.
				 if(sn>2500){ snsMotion3_1(); };
				 //4-1.
				 if(sn>3150){ snsMotion4();  };
				 //4-1.
				 if(sn>3600){  snsMotion5(); };
				//newest2
				 if(sn>4850){ snsMotion6(); };
				 //newest3
				 if(sn>5805){ snsMotion7(); };
		  });
	};
});