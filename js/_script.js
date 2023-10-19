window.onload = function(){
    $(".modal_box").load("modal.html");
  };
  
  function openModal(modalname) {
    document.get
    $("." + modalname).fadeIn(300);
  };
  $(function () {
    $(".bg").click(function(){
      $(".modal").fadeOut(300);  
      $("#menuToggle input:checkbox").prop("checked", false);
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
      $(".modal").fadeIn(300);
    });
    $(".bt_ok").click(function(){
      $(".modal").fadeOut(300);
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
      $(".terms_a").fadeIn(300);
    });
    $(".agree2").click(function(){
      $(".terms_b").fadeIn(300);
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
    $(".bt_onoff").click(function(){
      $(this).toggleClass("on");
      $(this).text($(this).text()=='OFF'?"ON":"OFF");
    });
    $(".minus").click(function(){
      var num = $(this).siblings(".result").val();
      if(num > 5){
        $(this).siblings(".result").val(parseInt(num) - 5);  
      }else{
        num = 5;
      }
    });
    $(".plus").click(function(){
      var num = $(this).siblings(".result").val();
      
      if(num < 30){
        $(this).siblings(".result").val(parseInt(num) + 5);
      }else{
        num = 30;
      }
    });
    $("#file").on('change',function(){
      var fileName = $("#file").val();
      $(".upload-name").val(fileName);
    });
    $(".bt_close").on('click',function(){
      $(".modal").fadeOut(300);
    });
    $(".bt_ok").on('click',function(){
      $(".modal").fadeOut(300);
    });
    $(".bt_no").on('click',function(){
      $(".modal").fadeOut(300);
    });
  });
  