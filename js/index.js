$(function(){
  $('#mainnb ul li>a').removeClass('on').first().addClass('on');
  $('html,body').stop().animate({scrollTop: 0},2000);
  $('#mainnb ul li a').on('click',function(){
    var n = $(this).parent().index();
    var target =  $('#contents>div').eq(n).offset().top;
    $('html,body').stop().animate({scrollTop: target},2000);
    $('#mainnb ul li>a').removeClass('on').eq(n).addClass('on');
    return false;
  })
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
  $('#contents>div').on('mousewheel',function(e,delta){
    if(delta<0){
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