$(function(){
  $('#gnb>ul>li').on('mouseover',function(){
    $(this).find('.sub').stop().slideDown(600);
  })
  $('#gnb>ul>li').on('mouseleave',function(){
    $(this).find('.sub').stop().slideUp(600);
  })
  $('.sub').hide();
})