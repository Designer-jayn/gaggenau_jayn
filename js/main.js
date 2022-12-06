/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
 _
 ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */


$(document).ready(function () {//HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.
    Logic();



    $("#container").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    // =========================
    // on event section      ===
    //==========================




    $(".showroom_img").slick({ //
        dots: false, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.text_container02 .left'), //이전 화살표
        nextArrow: $('.text_container02 .right'), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        // asNavFor: '.slider2', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,

    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){

    }).on('afterChange', function(event, slick, currentSlide, nextSlide){

        if(currentSlide === 0){
            $('#section06 .text_container02 .number > div:nth-child(1) img').attr('src','img/main/section06/main_sc06_slidetext_01.png');
        }else if(currentSlide === 1){
            $('#section06 .text_container02 .number > div:nth-child(1) img').attr('src','img/main/section06/main_sc06_slidetext_02.png');
        }else if(currentSlide === 2){
            $('#section06 .text_container02 .number > div:nth-child(1) img').attr('src','img/main/section06/main_sc06_slidetext_03.png');
        }else if(currentSlide === 3){
            $('#section06 .text_container02 .number > div:nth-child(1) img').attr('src','img/main/section06/main_sc06_slidetext_04.png');
        }else if(currentSlide === 4){
            $('#section06 .text_container02 .number > div:nth-child(1) img').attr('src','img/main/section06/main_sc06_slidetext_05.png');
        }else if(currentSlide === 5){
            $('#section06 .text_container02 .number > div:nth-child(1) img').attr('src','img/main/section06/main_sc06_slidetext_06.png');
        }else if(currentSlide === 6){
            $('#section06 .text_container02 .number > div:nth-child(1) img').attr('src','img/main/section06/main_sc06_slidetext_07.png');
        }else if(currentSlide === 7){
            $('#section06 .text_container02 .number > div:nth-child(1) img').attr('src','img/main/section06/main_sc06_slidetext_08.png');
        }else if(currentSlide === 8){
            $('#section06 .text_container02 .number > div:nth-child(1) img').attr('src','img/main/section06/main_sc06_slidetext_09.png');
        }else if(currentSlide === 9){
            $('#section06 .text_container02 .number > div:nth-child(1) img').attr('src','img/main/section06/main_sc06_slidetext_10.png');
        }

        });

    $(".img_box .slide_img").slick({ //
        dots: false, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('#section07 .contents_box .arrow .left'), //이전 화살표
        nextArrow: $('#section07 .contents_box .arrow .right'), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        // asNavFor: '.slider2', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,

    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){

    }).on('afterChange', function(event, slick, currentSlide, nextSlide){

        if(currentSlide === 0){
            $('#section07 .img_box .number_box .box_text > div img').attr('src','img/main/section07/box_text01.png');
        }else if(currentSlide === 1){
            $('#section07 .img_box .number_box .box_text > div img').attr('src','img/main/section07/box_text02.png');
        }else if(currentSlide === 2){
            $('#section07 .img_box .number_box .box_text > div img').attr('src','img/main/section07/box_text03.png');
        }

    });





    $("#product_slider").slick({ //
        dots: false, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('.prev'), //이전 화살표
        nextArrow: $('#product_page .up .button'), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        // asNavFor: '.slider2', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 2, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: true,


    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){

    }).on('afterChange', function(event, slick, currentSlide, nextSlide){

        if(currentSlide === 0){
            $('.change .inner').css('transform',`translateY(0px)`);
        }else if(currentSlide === 1){
            $('.change .inner').css('transform',`translateY(-296px)`);
        }else if(currentSlide === 2){
            $('.change .inner').css('transform',`translateY(-592px)`);
        }else if(currentSlide === 3){
            $('.change .inner').css('transform',`translateY(-893px)`);
        }

        if(currentSlide === 0){
            $('.number .small_number > div img').attr('src','img/product/small_number01.png');
        }else if(currentSlide === 1){
            $('.number .small_number > div img').attr('src','img/product/small_number02.png');
        }else if(currentSlide === 2){
            $('.number .small_number > div img').attr('src','img/product/small_number03.png');
        }else if(currentSlide === 3){
            $('.number .small_number > div img').attr('src','img/product/small_number04.png');
        }




    });


    $(".product_big_img").slick({ //
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product_small_img'
    });

    $(".product_small_img").slick({ //
        slidesToShow: 3,
        slidesToScroll: 0,
        asNavFor: '.product_big_img',
        dots: false,
        centerMode: false,
        arrows: false,
        focusOnSelect: true,
    });



    $(".about_slider_img").slick({ //
        dots: true, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $(".about_slider_container .slider_arrow_left"), //이전 화살표
        nextArrow: $(".about_slider_container .slider_arrow_right"), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        // asNavFor: '.slider2', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition

        variableWidth: false,
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $

    }).on('afterChange', function(event, slick, currentSlide, nextSlide){


    });

    $(".showroom_slider01_img").slick({ //
        dots: true, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $(".showroom_slider01 .arrow_left"), //이전 화살표
        nextArrow: $(".showroom_slider01 .arrow_right"), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        // asNavFor: '.slider2', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $

    }).on('afterChange', function(event, slick, currentSlide, nextSlide){
    });




    $(".showroom_slider02_img").slick({ //
        dots: true, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $(".showroom_slider02 .arrow_left"), //이전 화살표
        nextArrow: $(".showroom_slider02 .arrow_right"), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        // asNavFor: '.slider2', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0', //센터 모드 시 여백
        slidesToShow: 2, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: true,
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $

    }).on('afterChange', function(event, slick, currentSlide, nextSlide){
    });





    $(".showroom_slider03_img").slick({ //
        dots: true, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $(".showroom_slider03 .arrow_left"), //이전 화살표
        nextArrow: $(".showroom_slider03 .arrow_right"), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        // asNavFor: '.slider2', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0', //센터 모드 시 여백
        slidesToShow: 2, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: true,
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $

    }).on('afterChange', function(event, slick, currentSlide, nextSlide){
    });





    $(".showroom_slider04_img").slick({ //
        dots: true, //네비게이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $(".showroom_slider04 .arrow_left"), //이전 화살표
        nextArrow: $(".showroom_slider04 .arrow_right"), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        // asNavFor: '.slider2', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0', //센터 모드 시 여백
        slidesToShow: 2, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        vertical: false, //세로 슬라이드
        verticalSwiping: false, //세로 스와이프
        initialSlide:0,//슬라이드 시작순서
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: true,
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $

    }).on('afterChange', function(event, slick, currentSlide, nextSlide){
    });

    $('#select').click(function () {
        $('.in_c01').toggleClass('on');
        $('#select > div > div').toggleClass('on');
        $('#product_in01').toggleClass('on');
        $('#product_in01 .product_contents .down').toggleClass('on');
    });

    $('#select02').click(function () {
        $('.in_c02').toggleClass('on');
        $('#select02 > div > div').toggleClass('on');
        $('#product_in01').toggleClass('on');
        $('#product_in01 .product_contents .down').toggleClass('on');
    });

    $('#select03').click(function () {
        $('.in_c03').toggleClass('on');
        $('#select03 > div > div').toggleClass('on');
        $('#product_in01').toggleClass('on');
        $('#product_in01 .product_contents .down').toggleClass('on');
    });



//==============================================================
});

$(function () {
    // scroll event
    $('#container').scroll(function () {
        var scrollTop = $('#container').scrollTop();
        $('.posNum').text(scrollTop); // 스크롤값

        // =========================
        // scroll event section  ===
        //==========================

        $('#section01 .half_img').css('width',`${ (1300) + scrollTop * -5.0}`);

        // $('#section01 .half_img').css('width','100px');

        // $("").stop().animate({"margin-top": -scrollTop * 0.1}, 200);


        if(scrollTop >= 900){
            $('#section02 .section02_1 >div:nth-child(2)').addClass('on');
        }

        if(scrollTop >= 1450){
            $('#section02 .section02_2 >div:nth-child(2)').addClass('on');
        }


        if(scrollTop >= 1490){
                $('#home_connect_in .contents_03_01 .move_01').addClass('on');
        }

        if(scrollTop >= 2800){
            $('#home_connect_in .contents_03_02 .move_02').addClass('on');
        }

        if(scrollTop >= 2300){
            $('#section03 .text_container').addClass('on');
        }

        if(scrollTop >= 500){
            $('#home_connect_in .contents_02 > div:nth-child(1)').addClass('on');
        }




        // /#section03 .text_container.on



        //===================================================================
        // nav on/off event
        $('#container .main > section').each(function (i) {
            var fastNum = 100;
            var firstY = $('#container .main > section:first').position().top;
            var posY = $(this).position().top;
            if (scrollTop <= firstY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollTop >= posY - fastNum) {
                $('#nav').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        })

    });
});











