$(document).ready(function(){
  //   스크롤메뉴 //
  // 누르면 해당 페이지로 이동
  let menu = $("#nav > ul > li");
  let section = $(".page");

  let h = $(window).height();
  $(".page").height();
  $(window).resize(function () {
    //화면크기 바뀔때 높이 같이 수정
    let h = $(window).height();
    $(".page").height();
  });

  menu.click(function (e) {
    let size = 0;
    if(document.documentElement.scrollWidth < 800) {
      size = 500;
    }
    else {
      size = 100;
    }
    
    e.preventDefault();
    let tg = $(this);
    let i = tg.index();

    console.log(size);
    let tt = section.eq(i).offset().top-size;
    $("html,body").stop().animate({ scrollTop: tt });
  });

  // 로그 클릭시 HOME으로 복귀
  $('.logo').click(function (e) {
      e.preventDefault();
			let offset = $('#main').offset();
	    $('html').animate({scrollTop : offset.top}, 400);
  });

  // 아래화살표 누르면 about으로 이동
  $('.arrow_down').click(function (e) {
      e.preventDefault();
			let offset = $('#about').offset();
	    $('html').animate({scrollTop : offset.top-100}, 400);
  });


  
  // $(window).scroll(function () {
  //   var sct = $(window).scrollTop();
      
  //   section.each(function () {
  //     var tg = $(this);
  //     var i = tg.index();
  //     if (tg.offset().top <= sct) {
  //       menu.removeClass('on');
  //       menu.eq(i).addClass('on');
  //     }
  //   });

  // });
  
});