$(function () {
	var current = $('#slides > :first');

	function nextSlide() {
		var next = current.next();
		if (next.length == 0) {
			console.log('Next = first');
			var prev = current.prevAll();
			next = $(prev[prev.length - 1]);
		}

		console.log(current, next);

		current.css('left', '0').animate({'left': '-100%'}, 'slow');
		next.css('display', 'block').css('top', '0').css('left', $('html').css('width')).animate({'left': '0'}, 'slow');
			current = next;
	}

	$('body').click(nextSlide);
})