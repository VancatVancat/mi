//搜索框
var oText = document.getElementById('text'),
    oBtn = document.getElementById('btn'),
    oKey = document.getElementsByClassName('search-keyword')[0],
    oLink = document.getElementsByClassName('link-keyword')[0];
// console.log(oLink)

oText.addEventListener('focus', function () {
    oText.style.borderColor = '#ff6700';
    oBtn.style.borderColor = '#ff6700';
    oKey.style.display = 'none';
    oLink.style.display = 'block';
    oLink.style.border = '1px solid #ff6700';
    // console.log(oLink)
})
oText.addEventListener('blur', function () {
    oText.style.borderColor = 'rgb(224, 224, 224)';
    oBtn.style.borderColor = 'rgb(224, 224, 224)';
    oKey.style.display = 'block';
    oLink.style.display = 'none';
})



//轮播图
var oPrev = document.getElementById('prev'),
    oNext = document.getElementById('next'),
    oXm = document.getElementsByClassName('xm-slider')[0],
    oList = document.getElementsByClassName('xm-dot')[0],
    oLi = oList.getElementsByTagName('li'),
    oHero = document.getElementsByClassName('hero-slider')[0];

var timer, timer2,
    len = oLi.length,
    index = 0,
    flag = true;

//左右翻页
function moveImg(dis) {
    flag = false;
    var time = 400;
    var eachTime = 20;
    var eachDis = dis / (time / eachTime);

    var newLeft = oXm.offsetLeft + dis;
    function eachMove() {
        if (dis > 0 && oXm.offsetLeft < newLeft || dis < 0 && oXm.offsetLeft > newLeft) {
            oXm.style.left = oXm.offsetLeft + eachDis + 'px';
        } else {
            clearInterval(timer);
            oXm.style.left = newLeft + 'px';
            if (newLeft == -7356) {
                oXm.style.left = -1226 + 'px';
            }
            if (newLeft == 0) {
                oXm.style.left = -6130 + 'px';
            }
            flag = true;
        }
    }
    timer = setInterval(eachMove, eachTime);
}

oPrev.onclick = function () {
    if (flag == false) return;
    moveImg(1226);
    if (index == 0) {
        index = 4;
    } else {
        index--;
    }
    oLiChange();
}

oNext.onclick = function () {
    if (flag == false) return;
    moveImg(-1226);
    if (index == 4) {
        index = 0;
    } else {
        index++;
    }
    oLiChange();
}

//圆点点击翻页
function oLiChange() {
    oList.getElementsByClassName('active')[0].className = '';
    oLi[index].className = 'active';
}
for (var i = 0; i < len; i++) {
    (function (j) {
        oLi[j].onclick = function () {
            var offset = (j - index) * -1226;
            moveImg(offset);
            index = j;
            oLiChange();
        }
    })(i);
}

//自动翻页
timer2 = setInterval(oNext.onclick, 2000);
oHero.onmouseover = function () {
    clearInterval(timer2);
}
oHero.onmouseout = function () {
    timer2 = setInterval(oNext.onclick, 2000);
}



var oCat = document.getElementsByClassName('category-list')[0],
    oCatLi = oCat.getElementsByTagName('li'),
    oHeroList = document.getElementsByClassName('hero-list')[0],
    oChild = oHeroList.getElementsByTagName('ul');
// console.log(oCatLi)
// //  console.log(oChild)
// // var count = 0;
for (var i = 0; i < oCatLi.length; i++) {
    (function (n) {
        oCatLi[n].addEventListener('mouseover', function () {
            oHeroList.style.display = 'block';
        })
        oCatLi[n].addEventListener('mouseout', function () {
            oHeroList.style.display = 'none';
        })
    })(i)
}