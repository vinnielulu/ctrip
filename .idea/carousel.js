/**
 * Created by wanglulu on 17/1/4.
 */
$(function(){
    var banner=$('.banner');
    var sliderbanners=banner.find('.slide-banners'),
        showInd=banner.find('.dot-group a');

    var timer=null;//定时器返回值,主要用于关闭定时器
    var picInd=0;//正在展示的图片的索引值
    //点击序号按钮
    showInd.on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        var ind=$(this).index();
        picInd=ind;
        sliderbanners.animate({
            "left":-picInd*1920,
        })
    })
    //设置定时器
    timer=setInterval(function(){//定时器
        picInd++;//图片索引值加1,实现顺序轮播图片
        if(picInd>showInd.length-1){
            picInd=0;
        }
        showInd.eq(picInd).trigger('click');//模拟触发数字按钮的点击
    },3000);//3000为轮播时间

})