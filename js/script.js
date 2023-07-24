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
    $(".terms_a").fadeIn();
  });
  $(".agree2").click(function(){
    $(".terms_b").fadeIn();
  });
  $("#all_ck").change(function(){
    if($(this).is(":checked")){
      $("input:checkbox[name='chk']").prop("checked", true);
    }else{
      $("input:checkbox[name='chk']").prop("checked", false);  
    }
  });
  $(".bt_save").click(function(){
    if($("#ck1").is(":checked") == false){
      alert("모든 약관에 동의 하셔야 다음 단계로 진행 가능합니다.");
      return;
  }else if($("#ck2").is(":checked") == false){
      alert("모든 약관에 동의 하셔야 다음 단계로 진행 가능합니다..");
      return;
  }else{
      location.href='index.html'
  }
  });
  $(".pages span").click(function(){
    $(".pages span").removeClass("active");
    $(this).addClass("active");
  });
});