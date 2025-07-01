$( ()=> {

    //상단메뉴(웹접근성향상 추가)
    $('.mainMenu').on( "mouseenter focus" , () =>{
        $(".subMenu , #bg").stop().slideDown();
    });
    //마우스를 뗄때
    $('header ul').mouseleave(()=> {
        $(".subMenu , #bg").stop().slideUp();
    });
    //웹접근성향상: 포커를 잃을때
    $('header li:last-child a:last-child').blur( ()=> {
        $(".subMenu , #bg").stop().slideUp();
    });

    //페이드 슬라이드
    const fade_a = $('#fade a');
    let i = 3;
    const fading =()=> {
        i--;
        i === 0  ?   (fade_a.fadeIn(1000) , i = 3 )  :  fade_a.eq(i).fadeOut(1000);
    }
    setInterval( fading , 2800 );

    //팝업모달
    $("#notice a").click( ()=> {
        $("#popup").stop().fadeIn();
    });
    $("#popup button").click(()=> {
        $("#popup").stop().fadeOut();
    });
    //웹접근성향상 (ESC키를 누를때)
    $(document).keydown( e=> {
        if(e.key ===  "Escape")  $("#popup").stop().fadeOut();
    });

});// js all end.....................