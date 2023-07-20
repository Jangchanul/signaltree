$(function () {
  $(".bg").click(function(){
    $(".modal").hide();  
    $("#menuToggle input:checkbox").prop("checked", false);
  });
  $(".bt_ok").click(function(){
    $(".modal").hide();
  });
  $(".dep1>li").hover(function () {
    $(this).toggleClass("active");
    $(this).children().stop().toggleClass("active");
  });
  $(".tg_bt").click(function(){
    $(this).toggleClass("active");
    $(this).siblings().toggleClass("active");
  });
  $(".bt_guide").click(function(){
    $(".modal").show();
  });
  $(".bg").click(function(){
    $(".modal").hide();  
    $("#menuToggle input:checkbox").prop("checked", false);
  });
  $(".bt_ok").click(function(){
    $(".modal").hide();
  });
  $(".bt_close").click(function(){
    $(".modal").hide();
  });
  $(".m_menu .mid>li div").click(function(){
    $(this).toggleClass("active");
    $(this).siblings().slideToggle();
  });
  $(".m_main .touch_line").click(function(){
    // $(this).siblings().css('touch-action','pan-y');
    $(this).siblings().slideToggle();
  });
  $(".agree1").click(function(){
    $(".fade1").show();
  });
});
