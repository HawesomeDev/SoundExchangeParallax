// JavaScript Document

$(document).ready(function(){
	//Initial Animation
	
	var panelOneTL = new TimelineLite();
	
	panelOneTL.to($('#panel_one img'), 1.3, {
		opacity: "1",
		delay: 0.5
	})
	.to($('#panel_one img'), 0.2, {
		paddingTop: "375px",
		delay: 1,
		ease: Power1.easeOut
	})
	.to($('#panel_one img'), 0.5, {
		paddingTop: "85px",
		ease: Power1.easeInOut
	})
	.to($('#panel_one_backing'), 0.5, {
		marginRight: "0px",
		opacity: "1",
		ease: Power1.easeIn
	})
	.to($('#main_title h1'), 0.5, {
		marginTop: "0px",
		opacity: "1",
		ease:Bounce.easeOut,
		delay: 0.2
	})
	.to($('#main_title p'), 0.4, {
		marginTop: "0px",
		opacity: "1",
		ease:Bounce.easeOut
	})
	.to($('#body_text h1'), 0.3, {
		marginTop: "60px",
		opacity: "1",
		ease: Power1.easeIn
	})
	.to($('#body_text h1'), 0.2, {
		marginTop: "70px",
		ease: Power1.easeOut
	})
	.to($('#body_text p'), 0.4, {
		marginTop: "20px",
		opacity: "1",
		ease: Power1.easeOut
	})
	.to($('#body_text p'), 0.2, {
		marginTop: "30px",
		opacity: "1",
		ease: Power1.easeOut
	});
	
	
	$('#panel_one img').waypoint(function() {
		
		//select all number plates
		var allPlates = $(".number_plate");
		
		for(var i=0; i < allPlates.length; i++){
			allPlates[i].class = i;	
		}

		var plate_array = $(".num").toArray();

		var dollar_sign = $('.count_elements')[0];

	  	var panelTwoTL = new TimelineLite();

	  	panelTwoTL.to($('#panel_two'), 1, {
			marginTop: "0px",
			opacity: "1",
			ease: Power1.easeOut
		})
		.to($('#panel_two h1'), 0.5, {
			marginTop: "0px",
			opacity: "1",
			ease: Power1.easeOut
		})
		.to($('#counter_holder'), 0.3, {
			opacity: "1",
			ease: Power1.easeOut
		})
		.to(dollar_sign, 0.3, {
			paddingTop: "0px",
			rotationY: 360,
			ease:Power1.easeOut,
			opacity:"1"
		})
		.to(dollar_sign, 0.7, {
			paddingTop: "18px",
			ease:Bounce.easeOut,
			opacity:"1"
		})
		.staggerTo(plate_array, 1.5, {
			rotationY: 720,
			opacity: "1",
			ease: Power2.easeOut
		}, 0.07)
		.to($('#panel_two h2'), 0.3, {
			paddingTop: "0px",
			opacity: "1",
			ease: Power1.easeInOut
		})
	}, { offset: -80 });
	
});