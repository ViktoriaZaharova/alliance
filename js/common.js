$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.btn-burger').on('click', function () {
	$('.nav-menu').fadeToggle();
});

Fancybox.bind("[data-fancybox]");

$('.article-gallery').slick({
	slidesToshow: 4,
	infinite: false,
	variableWidth: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

$('.about-family-slider').slick({
	slidesToshow: 1,
	fade: true,
	dots: true,
	arrows: false
});

$('.product-card__image').slick({
	slidesToshow: 1,
	fade: true,
	dots: true,
	arrows: false,
	// autoplay: true,
	// autoplaySpeed: 2000,
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

