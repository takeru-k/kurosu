$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.l-header__nav, .c-hamburger__line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});

var ww = window.innerWidth || document.documentElement.clientWidth || 0;
		if (ww > 767){
			var srcBgArray = [{ src: 'images/top/mv3.jpg' }, //PCでスライドする画像を配列で設定
    				 { src: 'images/top/mv.jpg' },
					 { src: 'images/top/mv2.jpg' }];
		} else {
			var srcBgArray = [{ src: 'images/top/mv3.jpg' }, //スマホでスライドする画像を配列で設定
    				 { src: 'images/top/mv.jpg' },
					 { src: 'images/top/mv2.jpg' }];
			
		}
		$('#slider').vegas({ 
			slides: srcBgArray,
			delay: 5000, 
			timer: false,
			transition: 'blur', 
			transitionDuration: 1000 
  		});