import Vue from 'vue'
import store from '../../vue/store-service'
import View360 from '../../vue/components/CarPageTemplate/View-360.vue'

window.vueStore = store;

new Vue({
	el: '#view360',
	store,
	components: {
		'view-360': View360
	}
});

$(function () {
	var controller = new ScrollMagic.Controller();

	if ($(window).outerWidth() >  1262) {
		var controller2 = new ScrollMagic.Controller({ globalSceneOptions: { offset: -48, triggerHook: '0' } });
	} else {
		var controller2 = new ScrollMagic.Controller({ globalSceneOptions: { offset: -104, triggerHook: '0' } });
	}


	controller.scrollTo(function (newScrollPos) {
		$('html, body').animate({ scrollTop: newScrollPos });
	});

	$('a.scroll').on('click', function(e) {
		e.preventDefault();
		var obj = $(this).attr('href');

		if ($(window).outerWidth() > 1262) {
			controller.scrollTo($(obj).offset().top - 47);
		} else {
			controller.scrollTo($(obj).offset().top - 103);
		}
	})

	//Подсветка активного пункта меню
	var scene1 = new ScrollMagic.Scene({ triggerElement: '#exterior' })
		.addTo(controller2);

	scene1.on("enter", function (event) {
		$('a.scroll').removeClass('active');
		$('a.scroll[href="#exterior"]').addClass('active');
		checkNavPos();
	});
	scene1.on("leave", function (event) {
		$('a.scroll').removeClass('active');
		checkNavPos();
	});

	var scene2 = new ScrollMagic.Scene({ triggerElement: '#interior' })
		.addTo(controller2);

	scene2.on("enter", function (event) {
		$('a.scroll').removeClass('active');
		$('a.scroll[href="#interior"]').addClass('active');
		checkNavPos();
	});
	scene2.on("leave", function (event) {
		$('a.scroll').removeClass('active');
		$('a.scroll[href="#exterior"]').addClass('active');
		checkNavPos();
	});

	var scene3 = new ScrollMagic.Scene({ triggerElement: '#engine' })
		.addTo(controller2);

	scene3.on("enter", function (event) {
		$('a.scroll').removeClass('active');
		$('a.scroll[href="#engine"]').addClass('active');
		checkNavPos();
	});
	scene3.on("leave", function (event) {
		$('a.scroll').removeClass('active');
		$('a.scroll[href="#interior"]').addClass('active');
		checkNavPos();
	});

	var scene4 = new ScrollMagic.Scene({ triggerElement: '#safety' })
		.addTo(controller2);

	scene4.on("enter", function (event) {
		$('a.scroll').removeClass('active');
		$('a.scroll[href="#safety"]').addClass('active');
		checkNavPos();
	});
	scene4.on("leave", function (event) {
		$('a.scroll').removeClass('active');
		$('a.scroll[href="#engine"]').addClass('active');
		checkNavPos();
	});

	function checkNavPos () {
		var obj = $('a.scroll.active'),
			windowWidth = $(window).width(),
			scrollLeft = $('.nav').scrollLeft();

		if (obj.length > 0) {
			if (obj.offset().left < scrollLeft || obj.offset().left + obj.width() >= windowWidth) {
				$('.nav').animate({ scrollLeft: obj.position().left })
			}
		}
	}

	$.extend($.lazyLoadXT, {
		edgeY:  500
	});

	//Фиксирование меню
	var fixMenu = new ScrollMagic.Scene({ triggerElement: ".nav", duration: '0', triggerHook: '0' })
		.setPin('.nav')
		.addTo(controller);

	$(window).on('resize', function () {
		checkMenuOffset();
	})

	checkMenuOffset();

	function checkMenuOffset () {
		if ($(window).outerWidth() < 1263) {
			fixMenu.offset(-56);
		} else {
			fixMenu.offset(0);
		}
  }

  // popup
  $('.form__desc').on('click', function() {
    $('.more-popup').fadeIn();
  });

  $(document).on('click', '.js-close-popup', function(e) {
    e.preventDefault();
    $('.df-popup').fadeOut();
  });

  $(document).mouseup(function(e) {
    var container = $('.df-popup');
      if (container.has(e.target).length === 0) {
      container.fadeOut();
    }
	});
	
	var arrowMob = $('.arrow-mob');

	arrowMob.on('click', function() {
		var destination = $('#second-screen').offset().top - $('.header-main').outerHeight() - $('.nav').outerHeight();
		$('body, html').animate({
			scrollTop: destination
		}, 700);
	});  
});
