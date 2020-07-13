$(function () {

var current_scrollY;

// URLの取得
var url = location.href

function topRandom(){
  var creatorImg = [
    { img: './img/common/img_graduation_product_01.png' },
    { img: './img/common/img_graduation_product_02.png' },
    { img: './img/common/img_graduation_product_03.png' },
    { img: './img/common/img_graduation_product_04.png' },
    { img: './img/common/img_graduation_product_05.png' },
    { img: './img/common/img_graduation_product_06.png' },
    { img: './img/common/img_graduation_product_07.png' },
    { img: './img/common/img_graduation_product_08.png' },
    { img: './img/common/img_graduation_product_10.png' },
    { img: './img/common/img_graduation_product_11.png' },
    { img: './img/common/img_graduation_product_12.png' },
    { img: './img/common/img_graduation_product_13.png' },
    { img: './img/common/img_graduation_product_14.png' },
    { img: './img/common/img_graduation_product_15.png' },
    { img: './img/common/img_graduation_product_16.png' },
    { img: './img/common/img_graduation_product_17.png' },
    { img: './img/common/img_graduation_product_18.png' },
    { img: './img/common/img_graduation_product_19.png' },
    { img: './img/common/img_graduation_product_20.png' },
    { img: './img/common/img_graduation_product_21.png' },
    { img: './img/common/img_graduation_product_22.png' },
    { img: './img/common/img_graduation_product_23.png' },
    { img: './img/common/img_graduation_product_24.png' },
    { img: './img/common/img_graduation_product_25.png' },
    { img: './img/common/img_graduation_product_26.png' },
    { img: './img/common/img_graduation_product_27.png' },
    { img: './img/common/img_graduation_product_28.png' },
    { img: './img/common/img_graduation_product_29.png' },
    { img: './img/common/img_graduation_product_30.png' },
    { img: './img/common/img_graduation_product_31.png' },
    { img: './img/common/img_graduation_product_32.png' },
  ];

  var creatorImg3d = [
    { img: '../img/common/img_graduation_product_01.png' },
    { img: '../img/common/img_graduation_product_02.png' },
    { img: '../img/common/img_graduation_product_03.png' },
    { img: '../img/common/img_graduation_product_04.png' },
    { img: '../img/common/img_graduation_product_05.png' },
    { img: '../img/common/img_graduation_product_06.png' },
    { img: '../img/common/img_graduation_product_07.png' },
    { img: '../img/common/img_graduation_product_08.png' },
    { img: '../img/common/img_graduation_product_10.png' },
    { img: '../img/common/img_graduation_product_11.png' },
    { img: '../img/common/img_graduation_product_12.png' },
    { img: '../img/common/img_graduation_product_13.png' },
    { img: '../img/common/img_graduation_product_14.png' },
    { img: '../img/common/img_graduation_product_15.png' },
    { img: '../img/common/img_graduation_product_16.png' },
    { img: '../img/common/img_graduation_product_17.png' },
    { img: '../img/common/img_graduation_product_18.png' },
    { img: '../img/common/img_graduation_product_19.png' },
    { img: '../img/common/img_graduation_product_20.png' },
    { img: '../img/common/img_graduation_product_21.png' },
    { img: '../img/common/img_graduation_product_22.png' },
    { img: '../img/common/img_graduation_product_23.png' },
    { img: '../img/common/img_graduation_product_24.png' },
    { img: '../img/common/img_graduation_product_25.png' },
    { img: '../img/common/img_graduation_product_26.png' },
    { img: '../img/common/img_graduation_product_27.png' },
    { img: '../img/common/img_graduation_product_28.png' },
    { img: '../img/common/img_graduation_product_29.png' },
    { img: '../img/common/img_graduation_product_30.png' },
    { img: '../img/common/img_graduation_product_31.png' },
    { img: '../img/common/img_graduation_product_32.png' },
  ];

  for(i=creatorImg.length - 1; i > 0; i--){
      var j = Math.floor(Math.random()*(i * 1));
      var tmp = creatorImg[i];
      creatorImg[i] = creatorImg[j];
      creatorImg[j] = tmp;
  }

  $('.creator_contents li img').each(function(i,el){
    console.log(creatorImg[i].img);
    $(this).attr('src',creatorImg[i].img);
  });

  for(i=creatorImg3d.length - 1; i > 0; i--){
    var j = Math.floor(Math.random()*(i * 1));
    var tmp = creatorImg3d[i];
    creatorImg3d[i] = creatorImg3d[j];
    creatorImg3d[j] = tmp;
  }

  $('.creator_contents_3d li img').each(function(i,el){
    console.log(creatorImg[i].img);
    $(this).attr('src',creatorImg3d[i].img);
  });



}
topRandom();

//TOPアニメーション・風船
function smoothScroll(){

  var t = 3;
  
  $(window).on('load',function(){ 
    if (url == "https://222mash.ga/" || url == "https://222mash.ga/index.html" ){
      // URLが http://example.com/ の場合に実行する内容
      for(i=0; i<t ;i++){
        $('#wrap').append(
          '<img class="balloons" src="./img/common/img_footer_btn_balloon_01.png">',
          '<img class="balloons" src="./img/common/img_footer_btn_balloon_02.png">',
          '<img class="balloons" src="./img/common/img_footer_btn_balloon_03.png">',
          '<img class="balloons" src="./img/common/img_footer_btn_balloon_04.png">',
          '<img class="balloons" src="./img/common/img_footer_btn_balloon_05.png">',
          '<img class="balloons" src="./img/common/img_footer_btn_balloon_06.png">',
          '<img class="balloons" src="./img/common/img_footer_btn_balloon_07.png">',
          '<img class="balloons" src="./img/common/img_footer_btn_balloon_08.png">',
          '<img class="balloons" src="./img/common/img_footer_btn_balloon_09.png">',
          '<img class="balloons" src="./img/common/img_footer_btn_balloon_10.png">',
          );
        }
    }else if(url == "https://222mash.ga/about/about.html" || url == "https://222mash.ga/creator/creator.html"){
    for(i=0; i<t ;i++){
      $('#wrap').append(
        '<img class="balloons" src="../img/common/img_footer_btn_balloon_01.png">',
        '<img class="balloons" src="../img/common/img_footer_btn_balloon_02.png">',
        '<img class="balloons" src="../img/common/img_footer_btn_balloon_03.png">',
        '<img class="balloons" src="../img/common/img_footer_btn_balloon_04.png">',
        '<img class="balloons" src="../img/common/img_footer_btn_balloon_05.png">',
        '<img class="balloons" src="../img/common/img_footer_btn_balloon_06.png">',
        '<img class="balloons" src="../img/common/img_footer_btn_balloon_07.png">',
        '<img class="balloons" src="../img/common/img_footer_btn_balloon_08.png">',
        '<img class="balloons" src="../img/common/img_footer_btn_balloon_09.png">',
        '<img class="balloons" src="../img/common/img_footer_btn_balloon_10.png">',
        );
      }
    }else if(url == "https://222mash.ga/3d/index.html" ){
      for(i=0; i<t ;i++){
        $('#wrap').append(
          '<img class="balloons" src="../img/common/img_footer_btn_balloon_3d.png">',
          '<img class="balloons" src="../img/common/img_footer_btn_balloon_3d_02.png">',
          '<img class="balloons" src="../img/common/img_footer_btn_balloon_3d_03.png">',
          '<img class="balloons" src="../img/common/img_footer_btn_balloon_3d_04.png">',
          '<img class="balloons" src="../img/common/img_footer_btn_balloon_3d_05.png">',
          '<img class="balloons" src="../img/common/img_footer_btn_balloon_3d_06.png">',
          '<img class="balloons" src="../img/common/img_footer_btn_balloon_3d_07.png">',
          '<img class="balloons" src="../img/common/img_footer_btn_balloon_3d_08.png">',
          '<img class="balloons" src="../img/common/img_footer_btn_balloon_3d_09.png">',
          '<img class="balloons" src="../img/common/img_footer_btn_balloon_3d_10.png">'
          );
        }
      }else{
    for(i=0; i<t ;i++){
      $('#wrap').append(
        '<img class="balloons" src="../../img/common/img_footer_btn_balloon_3d.png">',
        '<img class="balloons" src="../../img/common/img_footer_btn_balloon_3d_02.png">',
        '<img class="balloons" src="../../img/common/img_footer_btn_balloon_3d_03.png">',
        '<img class="balloons" src="../../img/common/img_footer_btn_balloon_3d_04.png">',
        '<img class="balloons" src="../../img/common/img_footer_btn_balloon_3d_05.png">',
        '<img class="balloons" src="../../img/common/img_footer_btn_balloon_3d_06.png">',
        '<img class="balloons" src="../../img/common/img_footer_btn_balloon_3d_07.png">',
        '<img class="balloons" src="../../img/common/img_footer_btn_balloon_3d_08.png">',
        '<img class="balloons" src="../../img/common/img_footer_btn_balloon_3d_09.png">',
        '<img class="balloons" src="../../img/common/img_footer_btn_balloon_3d_10.png">'
        );
      }
    }

  });
   // #で始まるアンカーをクリックした場合に処理
  $('.top_btn').click(function(i) {
    // スクロールの速度
    var speed = 1800; // ミリ秒
    var bSpeed =3000;

    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    //バールン上までね????

      var balloons = $('.balloons');
    // console.log(balloons);
    // スムーススクロール
    //$('body,html').animate({scrollTop:position}, speed, 'swing');
    $('body,html').animate({scrollTop:position}, speed, 'swing',function(){
      balloons.css('display','block');
      balloons.animate({
        top : '-100%'
      },bSpeed, 'swing',function(){
        balloons.css('display','none')
        balloons.css('top','');
      });
      return false;
    }); 
  });
  $('a[href^="#"]').dblclick(function(){
    return false;
  });
}
smoothScroll();

   

//フッターの取得
function footerLink(){
  $("#footer").load("../footer/footer.html");
}
footerLink();


//ハンバーガーメニュー
function Nav(){
  $('#nav_btn > img').click(function () {
    current_scrollY = $( window ).scrollTop(); 
    $('html, body').addClass('scroll_prevent');
    $('.scroll_prevent').css({
      'top': -1 * current_scrollY
    });
    $('.nav_wrap').fadeIn(500).css('display','block');
    $('#nav_close').fadeIn(500).css('display','block');
    $(this).fadeIn(500).css('display','none');
    return false;
  });

  $('#nav_close').click(function () {
    $( 'html, body' ).removeClass('scroll_prevent');
    $( 'html, body' ).prop( 'scrollTop', current_scrollY );
    $('.nav_wrap').fadeIn(500).css('display','none');
    $(this).fadeIn(500).css('display','none');
    $('#nav_btn > img').fadeIn(500).css('display','block');
    return false;
  });

  $(window).resize(function() {
    if($('#nav_close').length){
        $('.nav_wrap').css('display','none');
        $('#nav_close').css('display','none');
        $('#nav_btn > img').css('display','block');
    } else{}

    var w = $(window).width();
    var x = 768;
    if (w > x ) {
        $('.nav_wrap').css('display','block');
    } else {}
  });
}
Nav();


//ヘッダー固定
function navFixed(){
  var $win = $(window),
      $main = $('#contents_wrap'),
      $header = $('#header'),
      headerHeight = $header.outerHeight(),
      headerPos = $header.offset().top,
      fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > headerPos ) {
      $header.addClass(fixedClass);
      $main.css('z-index', 0);
    } else {
      $header.removeClass(fixedClass);
      $main.css('margin-top', '0');
      $('#mv').css('z-index', '999');
    }
  });
}
navFixed();

//スロールアニメーション
function scrollEffect(){
  AOS.init({
    disable: window.innerWidth < 768
  });
}
scrollEffect();


//進級・卒展切り替え
function creatorSelect(){
  if ($('#creator').length ){
    $('#creator_promotion').load('promotion.html');
  }else{}

  $('#graduation_btn').on('click',function(){
    $('#promotion_btn').removeClass('select_active');
    $(this).addClass('select_active');
    $('#creator_graduation').load('graduation.html');
    $('#creator_promotion').css('display','none');
    $('#creator_graduation').css('display','block');
  })

  $('#promotion_btn').on('click',function(){
    $('#graduation_btn').removeClass('select_active');
    $(this).addClass('select_active');
    $('#creator_promotion').load('promotion.html');
    $('#creator_promotion').css('display','block');
    $('#creator_graduation').css('display','none');
  })
}
creatorSelect();


})