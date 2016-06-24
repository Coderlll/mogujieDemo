/**
 * Created by lilonglong on 6/12/16.
 */

var oBox = document.getElementById("box");
var oWrap = document.getElementById("banner");
var oPoint = document.getElementById("point");
var aAas = oWrap.getElementsByTagName("a");
var aPointLis = oPoint.getElementsByTagName("a");
var oBtnLeft = oBox.getElementsByTagName("a")[4];
var oBtnRight = oBox.getElementsByTagName("a")[5];
var step = 0;
var tempFun = function () {
    
};
var oClone = aAas[0].cloneNode(true);

console.log(oWrap.style.width);

oWrap.appendChild(oClone);
var curValueWidth = aAas.length * oClone.offsetWidth;

window.setCss(oWrap,"width",curValueWidth);


console.log(oWrap.style.width);


var pointTips = function (number) {

    if( number === aPointLis.length){
        number = 0;
    }

    for ( var i = 0; i < aPointLis.length; i++){
        aPointLis[i].className = "";
    }
    aPointLis[number].className = "select";
    
}

var moveLeft = function () {
    
    step  = step + 1; 
    if( step === aAas.length){
        step = 1;
        window.setCss(oWrap, "left", 0);
    }

    window.moveAnimate(oWrap,{"left": -step * 715}, 600, tempFun());
    pointTips(step);
}


var moveRight = function () {
    step  = step - 1;
    
    if( step === -1){
        step = aAas.length - 2;
        window.setCss(oWrap,"left", (step + 1) * -715 );
    }

    window.moveAnimate(oWrap,{"left": -step * 715}, 600, tempFun());

    pointTips(step);
}


    for( var i = 0; i < aPointLis.length; i++) {
        var curPointLi = aPointLis[i];
        curPointLi.index = i;
        curPointLi.onclick = function () {
            step = this.index;
            window.moveAnimate(oWrap, {"left": -715 * step}, 600, tempFun);
            pointTips(step);
        }
    }

 autoTimer = window.setInterval(moveLeft,2000);
oBtnLeft.onclick = moveLeft;
oBtnRight.onclick = moveRight;

oBox.onmouseover = function () {
    window.setCss(oBtnLeft,"display","block");
    window.setCss(oBtnRight,"display","block");
    window.clearInterval(autoTimer);
}

oBox.onmouseout = function () {
    window.setCss(oBtnLeft,"display","none");
    window.setCss(oBtnRight,"display","none");
    autoTimer = window.setInterval(moveLeft,2000);

}