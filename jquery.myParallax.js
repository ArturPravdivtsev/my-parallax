(function($) {

	$.fn.myParallax = function( options ) {

		var settings = $.extend({
			"speed" : "15"
		}, options);

		return this.each(function() {

			var that = $(this);

			that
			.css({
				"min-height" : "300px",
				"position" : "relative",
				"overflow" : "hidden"
			})
			.wrapInner("<div class='parallax-content' style='position:relative;z-index:1'>")
			.prepend("<div class='image-parallax' style='background-image:url(" + that.data('parallax-image') + ");background-size:cover;background-position:top;position:absolute;top:0;width:100%'>");

			function parallaxInit() {

				var pheight = that.height();

				that.children(".image-parallax").css({
					"height" : pheight*2,
					"top" : -pheight
				});

				var st = $(document).scrollTop();
				var sp = that.offset().top - $(window).height();
				var ob = that.offset().top + pheight;
				var sr = st-sp;

				if(st >= sp && st <= ob) {

					that.children(".image-parallax").css({
						"transform" : "translate3d(0px, " + sr /settings.speed + "%, .01px)",
						"-webkit-transform" : "translate3d(0px, " + sr /settings.speed + "%, .01px)"
					});

				};

			};

			$(window).scroll(function() {
				parallaxInit();
			}).load(function() {
				parallaxInit();
			});
			$("*").resize(function() {
				parallaxInit();
			});

		});

	};

})(jQuery);