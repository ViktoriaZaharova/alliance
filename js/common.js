$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.btn-burger').on('click', function () {
	$('.nav-menu').fadeToggle();
});

Fancybox.bind("[data-fancybox]");

$('.banner-sales__close').click(function (e) {
	e.preventDefault();
	$(this).parents('.banner-sales').fadeOut();
});

$('.home-slider').slick({
	slidesToShow: 1,
	arrows: false,
	swipe: false,
	fade: true,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				swipe: true,
			}
		}
	]
});

$('.home-gallery-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	arrows: true,
	dots: true,
	appendDots: '.home-gallery-slider__nav',
	appendArrows: '.home-gallery-slider__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#home-slider-right"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#home-slider-right"></use></svg></button>',
	asNavFor: '.home-slider',
});

$('.news-slider').slick({
	slidesToShow: 3,
	infinite: false,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		}, 
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				variableWidth: true
			}
		}
	]
});

$('.posts-slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	arrows: false
})

$('.article-gallery').slick({
	slidesToShow: 4,
	infinite: false,
	variableWidth: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

$('.about-family-slider').slick({
	slidesToShow: 1,
	fade: true,
	dots: true,
	arrows: false
});

$('.product-card__image').slick({
	slidesToShow: 1,
	fade: true,
	dots: true,
	arrows: false,
});

$(".cb-value").click(function () {
	var mainParent = $(".toggle-btn");
	if ($(mainParent).find("input.cb-value").is(":checked")) {
		$(mainParent).addClass("active");
	}
	else {
		$(mainParent).removeClass("active");
	}
});


$(".js-tab-trigger").click(function () {
	var id = $(this).attr('data-tab'),
		content = $('.js-tab-content[data-tab="' + id + '"]');

	$('.js-tab-trigger.active').removeClass('active'); // 1
	$(this).addClass('active'); // 2

	$('.js-tab-content.active').removeClass('active'); // 3
	content.addClass('active'); // 4
})

// slider range
$(".slider-range1").each(function () {
	let $this = $(this);

	$this.slider({
		animate: true,
		range: "min",
		value: 3224311,
		min: 2000000,
		max: 15000000,
		slide: function (event, ui) {
			$(".slider-range-input1").val(ui.value);
		}
	});
});
$(".slider-range-input1").val($(".slider-range1").slider("value"));
$(".slider-range-input1").keyup(function () {
	let sum = $(this).val();
	$(".slider-range1").slider("value", sum);
});


$(".slider-range2").each(function () {
	let $this = $(this);

	$this.slider({
		animate: true,
		range: "min",
		value: 1000000,
		min: 300000,
		max: 5000000,
		slide: function (event, ui) {
			$(".slider-range-input2").val(ui.value);
		}
	});
});
$(".slider-range-input2").val($(".slider-range2").slider("value"));
$(".slider-range-input2").keyup(function () {
	let sum = $(this).val();
	$(".slider-range2").slider("value", sum);
});

$(".slider-range3").each(function () {
	let $this = $(this);

	$this.slider({
		animate: true,
		range: "min",
		value: 30,
		min: 5,
		max: 30,
		slide: function (event, ui) {
			$(".slider-range-input3").val(ui.value);
		}
	});
});
$(".slider-range-input3").val($(".slider-range3").slider("value"));
$(".slider-range-input3").keyup(function () {
	let sum = $(this).val();
	$(".slider-range3").slider("value", sum);
});


$(function () {
	var handle = $(".slider-range__handle1 span");
	$(".slider-range4").slider({
		animate: true,
		range: "min",
		value: 5,
		min: 3,
		max: 8,
		create: function () {
			handle.text($(this).slider("value"));
		},
		slide: function (event, ui) {
			handle.text(ui.value);
		}
	});
});

$(function () {
	var handle = $(".slider-range__handle2 span");
	$(".slider-range5").slider({
		animate: true,
		range: "min",
		value: 76,
		min: 40,
		max: 100,
		create: function () {
			handle.text($(this).slider("value"));
		},
		slide: function (event, ui) {
			handle.text(ui.value);
		}
	});
});

$(function () {
	var handle = $(".slider-range__handle3 span");
	$(".slider-range6").slider({
		animate: true,
		range: "min",
		value: 4,
		min: 1,
		max: 10,
		create: function () {
			handle.text($(this).slider("value"));
		},
		slide: function (event, ui) {
			handle.text(ui.value);
		}
	});
});

$(function () {
	var handle = $(".slider-range__handle4 span");
	$(".slider-range7").slider({
		animate: true,
		range: "min",
		value: 15000000,
		min: 2000000,
		max: 25000000,
		create: function () {
			handle.text($(this).slider("value") + '₽');
		},
		slide: function (event, ui) {
			handle.text(ui.value + '₽');
		}
	});
});

$('.btn-filter').click(function () {
	$('.select-property-wrapper').fadeToggle();
});

$('.select-property-wrapper__close').click(function () {
	$('.select-property-wrapper').fadeOut();
});