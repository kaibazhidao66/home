//加载动画
window.addEventListener('load', function () {
    $('#loading-box').attr('class', 'loaded');
    $('#section').css("cssText", "transform: scale(1) !important;opacity: 1 !important;filter: blur(0px) !important");
}, false);
//加载延时
// setTimeout(function () {
//     $('#loading-text').html("加载中");
// }, 1000);

//延迟加载音乐播放器
function downloadJSAtOnload() {
    var element = document.createElement("script");
    element.src = "./js/music.js";
    document.body.appendChild(element);
}
if (window.addEventListener)
    window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
    window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;

//获取一言
fetch('https://v1.hitokoto.cn?max_length=24')
    .then(response => response.json())
    .then(data => {
        $('#hitokoto_text').text(data.hitokoto)
        $('#from_text').text(data.from)
    })
    .catch(console.error)

//获取天气
fetch('https://www.yiketianqi.com/free/day?appid=67955487&appsecret=BP9J0siy&unescape=1')
    .then(response => response.json())
    .then(data => {
        $('#wea_text').text(data.wea)
        $('#city_text').text(data.city)
        $('#tem_night').text(data.tem_night)
        $('#tem_day').text(data.tem_day)
        $('#win_text').text(data.win)
        $('#win_speed').text(data.win_speed)
    })
    .catch(console.error)

//获取时间
var t = null;
t = setTimeout(time, 1000);

function time() {
    clearTimeout(t);
    dt = new Date();
    var y = dt.getYear() + 1900;
    var mm = dt.getMonth() + 1;
    var d = dt.getDate();
    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var day = dt.getDay();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    $("#time").html(y + "&nbsp;年&nbsp;" + mm + "&nbsp;月&nbsp;" + d + "&nbsp;日&nbsp;" + "<span class='weekday'>" + weekday[day] + "</span><br>" + "<span class='time-text'>" + h + ":" + m + ":" + s + "</span>");
    t = setTimeout(time, 1000);
}

//链接提示文字
$("#social").mouseover(function () {
    $("#social").css({
        "background": "rgb(0 0 0 / 25%)",
        'border-radius': '6px',
        "backdrop-filter": "blur(5px)"
    });
    $("#link-text").css({
        "display": "block",
    });
}).mouseout(function () {
    $("#social").css({
        "background": "none",
        "border-radius": "6px",
        "backdrop-filter": "none"
    });
    $("#link-text").css({
        "display": "none"
    });
});

$("#shequ").mouseover(function () {
    $("#link-text").html("讨论问题 :)");
}).mouseout(function () {
    $("#link-text").html("联系我");
});
$("#sixin").mouseover(function () {
    $("#link-text").html("私信问题 :)");
}).mouseout(function () {
    $("#link-text").html("联系我");
});
$("#qq").mouseover(function () {
    $("#link-text").html("有事吗 ？");
}).mouseout(function () {
    $("#link-text").html("联系我");
});
$("#weixin").mouseover(function () {
    $("#link-text").html("你懂的 ~");
}).mouseout(function () {
    $("#link-text").html("联系我");
});
$("#email").mouseover(function () {
    $("#link-text").html("来封 Email");
}).mouseout(function () {
    $("#link-text").html("联系我");
});

//更多页面切换
var shoemore = false;
$('#switchmore').on('click', function () {
    shoemore = !shoemore;
    if (shoemore && $(document).width() >= 990) {
        $('#container').attr('class', 'container mores');
        $("#change").html("Oops&nbsp;!");
        $("#change1").html("哎呀，这都被你发现了（ 再点击一次即可关闭 ）");
    } else {
        $('#container').attr('class', 'container');
        $("#change").html("Hello&nbsp;World&nbsp;!");
        $("#change1").html("一个建立于 21 世纪的小站，存活于互联网的边缘");
    }
});

//更多页面关闭按钮
$('#close').on('click', function () {
    $('#container').attr('class', 'container');
    $("#change").html("Hello&nbsp;World&nbsp;!");
    $("#change1").html("一个建立于 21 世纪的小站，存活于互联网的边缘");
});

//菜单栏切换
var switchmenu = false;
$('#switchmenu').on('click', function () {
    switchmenu = !switchmenu;
    if (switchmenu) {
        $('#row').attr('class', 'row menus');
        $("#menu").html("<i class='iconfont icon-times'></i>");
    } else {
        $('#row').attr('class', 'row');
        $("#menu").html("<i class='iconfont icon-bars'>");
    }
});

//更多弹窗页面
$('#openmore').on('click', function () {
    $('#box').css("display", "block");
    $('#row').css("display", "none");
    $('#more').css("cssText", "display:none !important");
});
$('#closemore').on('click', function () {
    $('#box').css("display", "none");
    $('#row').css("display", "flex");
    $('#more').css("display", "flex");
});

//监听网页宽度
window.addEventListener('load', function () {
    window.addEventListener('resize', function () {
        //关闭移动端样式
        if (window.innerWidth >= 600) {
            $('#row').attr('class', 'row');
            $("#menu").html("<i class='iconfont icon-bars'>");
            //移除移动端切换功能区
            $('#rightone').attr('class', 'row rightone');
        }

        if (window.innerWidth <= 990) {
            //移动端隐藏更多页面
            $('#container').attr('class', 'container');
            $("#change").html("Hello&nbsp;World&nbsp;!");
            $("#change1").html("一个建立于 21 世纪的小站，存活于互联网的边缘");

            //移动端隐藏弹窗页面
            $('#box').css("display", "none");
            $('#row').css("display", "flex");
            $('#more').css("display", "flex");
        }
    })
})

//移动端切换功能区
var changemore = false;
$('#changemore').on('click', function () {
    changemore = !changemore;
    if (changemore) {
        $('#rightone').attr('class', 'row menus mobile');
    } else {
        $('#rightone').attr('class', 'row menus');
    }
});

//更多页面显示关闭按钮
$("#more").hover(function () {
    $('#close').css("display", "block");
}, function () {
    $('#close').css("display", "none");
})

//弹窗样式
iziToast.settings({
    timeout: 10000,
    closeOnEscape: 'true',
    position: 'topLeft',
    transitionIn: 'bounceInRight',
    transitionOut: 'fadeOutLeft',
    displayMode: 'replace',
    layout: '2',
    titleColor: '#efefef',
    messageColor: '#efefef',
    iconColor: '#efefef',
});

//欢迎语
window.addEventListener('load', function () {
    setTimeout(function () {
        iziToast.show({
        timeout: 2000,
        icon: 'fad fa-comment-alt-smile',
        position: 'topRight',
        title: hello,
        message: '欢迎来到我的主页'
        });
    }, 500);
}, false)

//屏蔽右键
document.oncontextmenu = function () {
    iziToast.info({
        timeout: 3000,
        icon: 'fad fa-tire-pressure-warning',
        title: '温馨提醒',
        message: '为了浏览体验，本站禁用右键'
    });
    return false;
}

//屏蔽终端
document.onkeydown = function (event) {
    if (window.event && window.event.keyCode === 123) {
        event.keyCode = 0;
        event.returnValue = false;
        iziToast.info({
            timeout: 5000,
            icon: 'fad fa-tire-pressure-warning',
            title: '温馨提醒',
            message: '为了浏览体验，本站禁用 F12'
        });
    return false;
    }
}

//兼容提醒
if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.href = './css/firefox.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    head.appendChild(link);
    window.addEventListener('load', function () {
        iziToast.info({
            timeout: 7000,
            iconUrl: './img/warn.png',
            title: '兼容提醒',
            message: '您正在使用火狐浏览器，部分功能可能不支持'
        });
    }, false)
}

//自动变灰
var myDate = new Date;
var mon = myDate.getMonth() + 1;
var date = myDate.getDate();
var days = ['4.4', '5.12', '7.7', '9.18', '12.13'];
for (var day of days) {
    var d = day.split('.');
    if (mon == d[0] && date == d[1]) {
        document.write(
            '<style>html{-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);_filter:none}</style>'
        )
        $("#change").html("Silence&nbsp;in&nbsp;silence");
        $("#change1").html("今天是国家纪念日，全站已切换为黑白模式");
        iziToast.info({
            timeout: 9000,
            iconUrl: './img/candle.png',
            title: '今天是国家纪念日',
            message: '历史不会忘记，人民永远铭记！'
        });
    }
}

//终端文字
try {
    var typed = new Typed("#subtitle", {
        strings: ['一分耕耘，一分收获', '叫我起床的不是闹钟，是理想', '今天未完成的，明天更不会完成', '接受改变不了的，改变可以改变的', '每一个不曾起舞的日子都是对生命的辜负'],
        startDelay: 300,
        typeSpeed: 150,
        loop: true,
        backSpeed: 75,
        showCursor: true
    });
    } catch (err) {
    console.log(err)
}

//离开标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~';
        document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});

//控制台输出
var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
var styleTitle2 = `
font-size:12px;
color: rgb(244,167,89);
`
var styleContent = `
color: rgb(30,152,255);
`
var title1 = 'XKの主页'
var title2 = `版权所有`
var content = `

更新说明：

1. 新增 音乐播放器
2. 新增 开屏载入动画
3. 新增 用户欢迎语界面
4. 修复 部分边距不一致
5. 修复 时光胶囊显示错误
6. 优化 移动端动画及细节
7. 优化 页面加载缓慢问题

更新日期：2022-03-5   版 本 号：1.6.3
`
console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)


//新春灯笼
! function (t) {
    "function" == typeof define && define.amd ? define(t) : t()
}((function () {
    "use strict";
    ! function (t, e) {
        void 0 === e && (e = {});
        var n = e.insertAt;
        if (t && "undefined" != typeof document) {
            var r = document.head || document.getElementsByTagName("head")[0],
                a = document.createElement("style");
            a.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(a, r.firstChild) : r.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t))
        }
    };
    var t;
    (t = document.createElement("div")).className = "j-china-lantern", t.innerHTML = '<div class="lantern__warpper"><div class="lantern__box"><div class="lantern__line"></div><div class="lantern__circle"><div class="lantern__ellipse"><div class="lantern__text">欢</div></div></div><div class="lantern__tail"><div class="lantern__rect"></div><div class="lantern__junction"></div></div></div></div><div class="lantern__warpper lantern__secondary"><div class="lantern__box"><div class="lantern__line"></div><div class="lantern__circle"><div class="lantern__ellipse"><div class="lantern__text">迎</div></div></div><div class="lantern__tail"><div class="lantern__rect"></div><div class="lantern__junction"></div></div></div></div>', document.body.appendChild(t)
}));

