$(window).bind("scroll", function() {
	scrollHeight = $(document).height();
	scrollPosition = $(window).height() + $(window).scrollTop();
	if ( (scrollHeight - scrollPosition) / scrollHeight <= 0.01) {
        //スクロールの位置が下部5%の範囲に来た場合
        window.location.href = 'happening.html';
	}
});
