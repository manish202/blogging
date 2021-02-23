$(function(){
    //drop-down menu code below
    $('.bar').click(function(){
        $(this).toggleClass('active');
        $('.drop-me').slideToggle("fast");
    });

    $('.drop-me-inner li').click(function(){
        $(this).next('.drop-me-inner').slideToggle("fast");
        $(this).toggleClass("rotate");
    });

    //ticker code below
    let length = $('.ticker-box ul li').length;
    let index = 0;
    let slideTicker = (direction) => {
        if(direction === "right"){
            (index === length-1)? index = 0:index++;
        }else if(direction === "left"){
            (index === 0)? index = (length-1):index--;
        }else{
            (index === length-1)? index = 0:index++;
        }

        for(let i = 0;i < length;i++){
            $('.ticker-box ul li').removeClass('active');
        }

        $('.ticker-box ul li').eq(index).addClass('active');

    }

    let stopAnim = setInterval(slideTicker,3000);
    $('.left-dir').click(function(){
        clearInterval(stopAnim);
        setTimeout(() => {
            stopAnim = setInterval(slideTicker,3000);
        },3000);
        slideTicker("left");
    });
    $('.right-dir').click(function(){
        clearInterval(stopAnim);
        setTimeout(() => {
            stopAnim = setInterval(slideTicker,3000);
        },3000);
        slideTicker("right");
    });
    
});