import svg4everybody from 'svg4everybody';
// import $ from 'jquery';

$(($) => {
	svg4everybody();

	const $navTrigger = $('.nav__trigger');
	const $navList = $('.nav__list');

	$navTrigger.on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('nav__trigger_active');
		$navList.toggleClass('nav__list_open');
	});


});
