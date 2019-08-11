$(document).ready(function(){
	$(".otstupnav a").click(function(event){
		event.preventDefault();
		$(".navbardiv a").css('color','#fce38a').css('border-bottom', '2px solid #fce38a').not(this).css('color','white').css("border-bottom","none");
	});

});
$(document).ready(function(){
	$('.text42').click(function(event){
		event.preventDefault();
	$('.text42').css('border-top','3px solid red').not(this).css('border-top','3px solid white');	
	})

});

$(document).ready(function(){
	$('#menu1').on("click","a", function(event){
			event.preventDefault();
			var id = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);

	});
});

$(document).ready(function(){

	$('#huiqwq').on("click","a", function(event){
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop:top},1500)
	});
});

$('#wqoqwqo').click(function(){
		if($('.tueq11').is(':visible'))
			$('.tueq11').hide() &&
			$('.tueq12').show()
			else
				$('.tueq12').hide() &&
			$('.tueq11').show()
});
$('#wqoqwq2').click(function(){
		if($('.tueq14').is(':visible'))
			$('.tueq14').hide() &&
			$('.tueq15').show()
			else
				$('.tueq15').hide() &&
			$('.tueq14').show()
});
$('#wqoqwq1').click(function(){
		if($('.tueq17').is(':visible'))
			$('.tueq17').hide() &&
			$('.tueq18').show()
			else
				$('.tueq18').hide() &&
			$('.tueq17').show()
});	

$('.slickmain12').slick();