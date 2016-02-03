//等待的loading

// var str = '<div class="loader"><div class="loader-inner pacman"><div></div><div></div><div></div><div></div><div></div></div></div>';

var $load = $('#load');
var aImg = ['img/bg1.png', 'img/bg2.jpg', 'img/bg3.jpg', 'img/bg4_1.png', 'img/bg4_2.png', 'img/bg5.png', 'img/bg11.png', 'img/bg21.png', 'img/bg31.png', 'img/bg41.jpg', 'img/bg51.png', 'img/button.png', 'img/car.png', 'img/car2.png', 'img/car5.png', 'img/fa.png', 'img/logo.png', 'img/lun.png'];

// var load = document.getElementById('load');
// loading.init(load), {
$load.loading({
    // loaders:str,
    color:"blue",
    imgs:aImg
},function(){
    setTimeout(function(){
        $load.hide();
        swiperFn();
    },1000);
});

//加载期间手势滑动无效
$load.on('touchstart', function(){
    event.preventDefault();
});


//swiper
function swiperFn(){
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        }, 
        onSlideChangeEnd: function(swiper){ 
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });
}
