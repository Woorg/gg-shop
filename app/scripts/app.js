import svg4everybody from 'svg4everybody';
// import $ from 'jquery';


(function () {

	jQuery(function ($) {



		svg4everybody();

		// menu

		const $navTrigger = $('.nav__trigger');
		const $navList = $('.nav__list');

		$navTrigger.on('click', function (e) {
			e.preventDefault();
			$(this).toggleClass('nav__trigger_active');
			$navList.toggleClass('nav__list_open');
		});


		// sidebar accordeon

		const $sideNavTrigger = $('.side-nav__link');

		$('.side-nav__sub_active').show();
		$sideNavTrigger.on('click', function () {
			$(this)
				.toggleClass('side-nav__link_active')
				.next()
				.slideToggle('fast');
		});


		// sidebar Trigger

		const $sidebarTrigger = $('.sidebar__trigger');

		$sidebarTrigger.on('click', function () {
			$(this).next().slideToggle();
		});

		// filter Trigger

		const $filterTrigger = $('.filter__trigger');

		$filterTrigger.on('click', function () {
			$(this).next().slideToggle();
		});

		$(window).resize(function () {
			let viewWidth = $(window).width();
			if (viewWidth > 1436) {
				$filterTrigger.next().show();
				$sidebarTrigger.next().show();
			}
		});

	});


})();


