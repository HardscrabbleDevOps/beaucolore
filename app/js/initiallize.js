;(function( window ){
    var body = document.body,
		grids = [].slice.call(document.querySelectorAll('.grid')),
        masonry = [];

    function init() {
		// Preload images
		imagesLoaded(body, function() {

			grids.forEach(function(grid) {
				var m = new Masonry(grid, {
					itemSelector: '.grid__item',
					columnWidth: '.grid__sizer',
					percentPosition: true,
					transitionDuration: 0
				});
				masonry.push(m);
			});
			// body.classList.remove('loading');
		});
	}

    init();
})( window );
