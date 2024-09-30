$(window).load(function(){
	$('.loading').fadeOut('fast');

	var targetDate = new Date(2024, 9, 17); // 2024년 10월 17일
	
	// 10월 17일보다 시간이 작을 경우 타이머를 설정
	var countDown = new IOWA.CountdownTimer.Core(
		targetDate,
		document.querySelector('countdown-timer')
	);
	
	countDown.setUp(false);
	countDown.attachEvents();
	countDown.play(false);
});