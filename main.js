(function ($) {
	"use strict";

    jQuery(document).ready(function($){

				
		         //===== Sticky Menu-Bar Start
		        $(window).on('scroll',function(event) {    
		            var scroll = $(window).scrollTop();
		             if (scroll < 100) {
		                 $("header").removeClass("sticky");
		             }else{
		                 $("header").addClass("sticky");
		             }
		         });
		        //===== Sticky Menu-Bar End


		        //===== Scroll To Top Start
		        $(window).on('scroll', function (event) {
		            if ($(this).scrollTop() > 600) {
		                $('.down-button').fadeIn(200)
		            } else {
		                $('.down-button').fadeOut(200)
		            }
		        });
		            //Animate the scroll to yop
		        $('.down-button').on('click', function (event) {
		            event.preventDefault();

		            $('html, body').animate({
		                scrollTop: 0,
		            }, 1500);
		        });

		         //===== Scroll To Top End



				// Owl-Carousel Plugin Active Start
				$(".news-slider").owlCarousel({
					items:4,
					nav:true,
					dot:false,
					loop:true,
					margin:30,
					autoplay:false,
					autoplayTimeout:3000,
					smartSpeed:1000,
					navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
					responsiveClass:true,
					responsive : {
						// breakpoint from 0 up
						0 : {
							items:1,
							dot:true,
						},
						// breakpoint from 480 up
						480 : {
							items:1,
							dot:true,
						},
						// breakpoint from 768 up
						768 : {
							items:2,
							dot:false,
						},
						992 : {
							items:4,
							dot:false,
						}
					}

				});
				// Owl-Carousel Plugin Active End


				// Owl-Carousel Plugin Active Start
				$(".brand-slider").owlCarousel({
					items:4,
					nav:false,
					dot:false,
					loop:true,
					margin:30,
					autoplay:true,
					autoplayTimeout:3000,
					smartSpeed:1000,
					responsiveClass:true,
					responsive : {
						// breakpoint from 0 up
						0 : {
							items:3,
							dot:true,
						},
						// breakpoint from 480 up
						480 : {
							items:3,
							dot:true,
						},
						// breakpoint from 768 up
						768 : {
							items:4,
							dot:false,
						},
						992 : {
							items:4,
							dot:false,
						}
					}

				});
				// Owl-Carousel Plugin Active End

		
				$(".menu_trigger").click(function(){
					$(".slide-menu").addClass("active");
				});
				$(".cross").click(function(){
					$(".slide-menu").removeClass("active");
				});


				$(".pack-btn button").click(function(event){  
					$(this).toggleClass('active').siblings().removeClass('active'); 
				});  

			//===== Prealoder Start
			$(window).on('load', function (event) {
				$('.proloader').delay(500).fadeOut(500);
			});
			//===== Prealoder End


			// Nice_select Plugin Active Start
			$(document).ready(function() {
			$('select').niceSelect();
			});
		// Nice_select Plugin Active End
			  

	});



    jQuery(window).load(function(){


    });


}(jQuery));	