
$( document ).ready(function() {

	if( ! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		console.log("Mobile device not detected");
		// do not add mouse over event on mobiles device,
		// it causes issues with touchscreen
		$('.carousel-indicators li').on('mouseover',function(){
			$(this).trigger('click');
		});
	}

});
