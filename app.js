$(window).on('scroll', function () {
    var doch = $(document).innerHeight(); //ページ全体の高さ
    var winh = $(window).innerHeight(); //ウィンドウの高さ
    var bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
    if (bottom <= $(window).scrollTop()) {
    //一番下までスクロールした時に実行
    window.location.href = 'happening.html';
    }
});
