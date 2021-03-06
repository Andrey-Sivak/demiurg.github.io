$(document).ready(function() {



	new WOW().init();

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu").is(":hidden")) {
			$(".menu").slideDown(600);
		} else {
			$(".menu").slideUp(600);
		}
		
	});

	$(".menu a").click(function() {
		$(".menu").slideUp(600);
		$(".sandwich").removeClass("active");
	});


	$(".serie-block:not(.serie-block_form)").click(function() {
		$(".serie-block:not(.serie-block_form)").removeClass("active");
		$(this).toggleClass("active");
	});

	{
		if ($(window).width() < 768) { 
			$(".footer__title").click(function() {
				$(this).toggleClass("active");
				$(this).siblings(".footer__list").slideToggle(200);
			});
		}
	}

	$(".choose-type__item").click(function(e) {
		e.preventDefault();
		$(this).parent().parent().find(".choose-type__item").removeClass("active");
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
	});

	$(".item-picture").click(function(e) {
		e.preventDefault();
		$(".item-picture").removeClass("active");
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
	});

	$(".slider-colors__item").click(function(e) {
		e.preventDefault();
		$(this).parent().parent().find(".slider-colors__item").removeClass("active");
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}
	});

	//слайдер

	var $slider = $('.slider-billbord');

	if ($slider.length) {
		var currentSlide;
		var slidesCount;
		var sliderCounter =  $('.controls-slider__counter');
		sliderCounter.add('slider__counter');

		var updateSliderCounter = function(slick, currentIndex) {
			currentSlide = slick.slickCurrentSlide() + 1;
			slidesCount = slick.slideCount;
			$(sliderCounter).html('<span>0' + currentSlide + '</span>' + '&nbsp;&nbsp;/&nbsp;&nbsp;' + "0" + slidesCount)
		};

		$slider.on('init', function(event, slick) {
			$slider.append(sliderCounter);
			updateSliderCounter(slick);
		});

		$slider.on('afterChange', function(event, slick, currentSlide) {
			updateSliderCounter(slick, currentSlide);
		});

		$slider.slick({
			arrows: true,
			dots: false,
			infinite: true,
			slidesToShow: 1,
			prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i><div/>',
			nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i><div/>',
			slidesToScroll: 1,
			appendArrows: '.controls-slider__arrows',
		});
	}

	$(".slider-type").slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i><div/>',
		slidesToScroll: 1,
	});

	$(".slider-series").slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow:3,
		vertical: true,
		centerMode: true,
		centerPadding: '0',
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-up" aria-hidden="true"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-down" aria-hidden="true"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		}
		]
	});

	$(".slider-picture").slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow:4,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i><div/>',
		slidesToScroll: 1,
	});

	$(".slider-colors").slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i><div/>',
		slidesToScroll: 1,
	});

	$(".slider-partners").slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
			}
		}
		]
	});

	$(".slider-portfolio").slick({
		arrows: true,
		dots: false,
		infinite: true,
		swipe: false,
		slidesToShow: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i><div/>',
		slidesToScroll: 1,
	});

	$(".slider-main-portfolio").slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i><div/>',
		slidesToScroll: 1,
	});

	$(".slider-for").slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		asNavFor: '.slider-nav',
		slidesToScroll: 1,
	});

	$(".slider-nav").slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		focusOnSelect: true,
		asNavFor: '.slider-for',
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i><div/>',
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
			}
		}
		]
	});

	$(".input-phone").mask("+7(999) 999-99-99");

	$(".item-sidebar__name").click(function(e) {
		e.preventDefault();
		$(".item-sidebar").removeClass("active");

		$(".item-sidebar__list").slideUp(200);
		if ($(this).siblings(".item-sidebar__list").is(":hidden")) {
			$(this).parent().addClass("active");
			$(this).siblings(".item-sidebar__list").slideDown(200);
		
		} else {
			$(this).parent().removeClass("active");
		$(this).siblings(".item-sidebar__list").slideUp(200);
		
		}

		});

	$(".more_catalog").click(function(e) {
		e.preventDefault();
		
		if ($(".hidden-text").is(":hidden")) {
			$(".more_catalog").html("Свернуть");
			$(".hidden-text").slideDown(200);
			
		} else {
			$(".hidden-text").slideUp(200);
			$(".more_catalog").html("Читать далее");
		}
	});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	$("#fl_inp").change(function(){
		var filename = $(this).val().replace(/.*\\/, "");
		$("#fl_nm").html(filename);
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});


	objectFitImages()

});

/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();