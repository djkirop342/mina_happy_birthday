$(window).load(function(){
	$('.loading').fadeOut('fast');

	var targetDate = new Date(2024, 9, 17); // 2024년 10월 17일
	var currentDate = new Date(); // 현재 시간
	var devTest = false // 테스트를 위한 변수

	// 10월 17일보다 시간이 작을 경우 타이머를 설정
	if (currentDate >= targetDate || devTest) {
		// 10월 17일보다 시간이 클 경우 .container를 페이드 인
		$("countdown-timer").hide();
		$('.container').fadeIn('fast');
	} else {
		var countDown = new IOWA.CountdownTimer.Core(
			targetDate,
			document.querySelector('countdown-timer')
		);
		
		countDown.setUp(false);
		countDown.attachEvents();
		countDown.play(false);

		// 1초마다 현재 시간을 확인
		var timerInterval = setInterval(checkTime, 1000);
	}

	// 함수: 시간을 체크하여 조건을 실행
	function checkTime() {
		var currentDate = new Date(); // 매번 새로운 현재 시간
		if (currentDate >= targetDate || devTest) {
			// 10월 17일보다 시간이 크거나 같을 경우 .container를 페이드 인
			$("countdown-timer").hide();
			$('.container').fadeIn('fast');
			clearInterval(timerInterval); // 타이머 중지
		}
	}
});

$('document').ready(function(){
	var vw;
	$(window).resize(function(){
		vw = $(window).width()/2;
		$('#b1,#b2,#b3,#b4').stop();
		$('#b11').animate({top:200, left: vw-165},500);
		$('#b22').animate({top:200, left: vw-80},500);
		$('#b33').animate({top:200, left: vw-0},500);
		$('#b44').animate({top:200, left: vw+70},500);
		/* $('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500); */
	});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').trigger('click');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').trigger('click');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		/* loopFive();
		loopSix();
		loopSeven(); */
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').trigger('click');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').trigger('click');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		/* $('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77') */
		$('#b11').animate({top:200, left: vw-165},500);
		$('#b22').animate({top:200, left: vw-80},500);
		$('#b33').animate({top:200, left: vw-0},500);
		$('#b44').animate({top:200, left: vw+70},500);
		/* $('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500); */
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		/*$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});*/
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
				i=i+1;
				$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
				if(i==50){
					$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
						$('.cake').fadeIn('fast');
					});
				} else {
					msgLoop(i);
				}			
			});
		}
		
		msgLoop(0);
	});
});