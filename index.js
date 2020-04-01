$(function () { 
    var box = $("#box");
    box.html('<div class="slider" id="slider">'+
    '<div class="slide"><img src="img/b5.png" alt=""></div>'+
    '<div class="slide"><img src="img/b1.png" alt=""></div>'+
    '<div class="slide"><img src="img/b2.png" alt=""></div>'+
    '<div class="slide"><img src="img/b3.png" alt=""></div>'+
    '<div class="slide"><img src="img/b4.png" alt=""></div>'+
    '<div class="slide"><img src="img/b5.png" alt=""></div>'+
    '<div class="slide"><img src="img/b1.png" alt=""></div>'+
    '</div>'+
    '<span id="left"><</span>'+
    '<span id="right">></span>'+
    '<ul class="nav" id="navs">'+
        '<li>1</li>'+
        '<li>2</li>'+
        '<li>3</li>'+
        '<li>4</li>'+
        '<li>5</li>'+
    '</ul>'
    )
    var left = $("#left"),
        right = $("#right"),
        slider = $("#slider"),
        navs = $("#navs").children(),
        num = 0,//圆点
        timer;
    navs[num].className="active";
    //左右箭头
    box.mouseover(function () { 
        clearInterval(timer);
        right.css("opacity",0.8);
        left.css("opacity",0.8);
        
     })
     box.mouseout(function () {
         autoPlay();
        right.css("opacity",0);
        left.css("opacity",0);
     })
     right.click(function () { 
        nextPic();
    })
        
    left.click(function () { 
        prevPic();
     })
    function nextPic() { 
        num ++;
        var newLeft;
        if(num > 4){
            num = 0;
        }
        showDot();
        if(slider.css("left") === '-7200px'){
            newLeft = -2400;
        }else{
            newLeft = parseInt(slider.css("left"))-1200;
        }
        slider.css("left",newLeft);
        
    }
    function prevPic() { 
        num --;
        var newLeft;
        if(num < 0){
            num = 4;
        }
        showDot();
        if(slider.css("left") === '0px'){
            newLeft = -4800;
        }else{
            newLeft = parseInt(slider.css("left"))+1200;
        }
        slider.css("left",newLeft);
        
    }
    //自动播放
    function autoPlay () {
        timer = setInterval(function(){
            nextPic();
        },2000)
    }
    autoPlay();

    //下边圆点
    function showDot(){
        for(var i = 0; i < navs.length; i++){
            navs[i].className="";
        }
        navs[num].className = "active";
    }

    //点击圆点
    for(var j = 0; j< navs.length; j++){
        (function(k) {
            console.log(k)
            navs[k].onclick = function () { 
                var index = num - k;
                if(num == 4 && parseInt(slider.css("left")) !== -6000){
                    index = index - 5;
                }
                if(num == 0 && parseInt(slider.css("left")) !== -1200){
                    index = index + 5
                }
                slider.css("left",parseInt(slider.css("left")) + index * 1200 );
                num = k;
                showDot();
             }
        })(j)
    }
})
