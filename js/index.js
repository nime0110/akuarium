$(function(){
  //첫번째 메뉴 활성화
  $('#mainnb ul li>a').removeClass('on').first().addClass('on');
  //첫번째 content로 애니메이트
  $('html,body').stop().animate({scrollTop: 0},2000);
  //메뉴 클릭하면 해당 위치 찾아가기
  $('#mainnb ul li a').on('click',function(){
    //-첫째로 몇번째인지 알아야됨
    var n = $(this).parent().index();
    //해당 위치 찾아가기
    var target =  $('#contents>div').eq(n).offset().top;
    $('html,body').stop().animate({scrollTop: target},2000);
    //해당 메뉴 활성화
    // $('#menu a').removeClass('on');
    // $(this).addClass('on');
    $('#mainnb ul li>a').removeClass('on').eq(n).addClass('on');
    return false;
  })
  //스크롤에 따른 메뉴 활성화
  $(window).scroll(function(){
    var scT = $(window).scrollTop();
    $('#contents>div').each(function(){
      var i = $(this).index();
      var tgtop = $(this).offset().top;
      if(tgtop <= scT){
        $('#mainnb ul li>a').removeClass('on').eq(i).addClass('on');
      }
    })
  })
  //마우스 휠에 의한 페이지 이동
  $('#contents>div').on('mousewheel',function(e,delta){ //마우스휠을 움직엿는지 안움직엿는지 알수잇는 delta
    if(delta<0){//마우스 휠 내렷을때
      var target = $(this).next('div').offset().top;
      $('html,body').stop().animate({scrollTop:target},1500)
    }else{
      var target = $(this).prev('div').offset().top;
      $('html,body').stop().animate({scrollTop:target},1500)
    }
  })
  $('#gnb>ul>li').on('mouseover',function(){
    $(this).find('.sub').stop().slideDown(600);
  })
  $('#gnb>ul>li').on('mouseleave',function(){
    $(this).find('.sub').stop().slideUp(600);
  })
  $('.sub').hide();







})