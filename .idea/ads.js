/**
 * Created by wanglulu on 17/1/6.
 */
$('.click-ads').click(function() {
    var clickads=$('.click-ads').width();
    var openedads=$('.openedads').width();
    $('.click-ads').css({left:-clickads+'px'});
    $('.openedads').animate({left:'0px'},2000);
    });
$('.close-icon').click(function(){
    var openedads=$('.openedads').width();
    $('.openedads').css({left:-openedads+'px'});

$('.click-ads').animate({left:0},1000);})
