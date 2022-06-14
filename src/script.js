// 静态彩带
! function() {
  function attr(node, attr, default_value) {
    return Number(node.getAttribute(attr)) || default_value;
  }

  // get user config
  var scripts = document.getElementsByTagName('script'),
    script = scripts[scripts.length - 1]; // 当前加载的script
  config = {
    z: attr(script, "zIndex", -10), // z-index
    a: attr(script, "alpha", 0.6), // alpha
    s: attr(script, "size", 150), // size
  };

  var canvas = document.createElement('canvas'),
    g2d = canvas.getContext('2d'),
    pr = window.devicePixelRatio || 1,
    width = window.innerWidth,
    height = window.innerHeight,
    f = config.s,
    q, t,
    m = Math,
    r = 0,
    pi = m.PI*2,
    cos = m.cos,
    random = m.random;
  canvas.width = width * pr;
  canvas.height = height * pr;
  g2d.scale(pr, pr);
  g2d.globalAlpha = config.a;
  canvas.style.cssText = 'opacity: ' + config.a + ';position:fixed;top:0;left:0;z-index: ' + config.z + ';width:100%;height:100%;pointer-events:none;';
  // create canvas
  document.getElementsByTagName('body')[0].appendChild(canvas);

  function redraw() {
    g2d.clearRect(0, 0, width, height);
    q = [{x: 0, y: height * 0.7 + f}, {x: 0, y: height * 0.7 - f}];
    while(q[1].x < width + f) draw(q[0], q[1]);
  }
  function draw(i, j) {
    g2d.beginPath();
    g2d.moveTo(i.x, i.y);
    g2d.lineTo(j.x, j.y);
    var k = j.x + (random()*2-0.25)*f, n = line(j.y);
    g2d.lineTo(k, n);
    g2d.closePath();
    r -= pi / -50;
    g2d.fillStyle = '#'+(cos(r)*127+128<<16 | cos(r+pi/3)*127+128<<8 | cos(r+pi/3*2)*127+128).toString(16);
    g2d.fill();
    q[0] = q[1];
    q[1] = {x: k, y: n};
  }
  function line(p){
    t = p + (random() * 2 - 1.1) * f;
    return (t > height || t < 0) ? line(p) : t;
  }

  document.onclick = redraw;
  document.ontouchstart = redraw;
  redraw();
}();

// 复制提醒
document.body.oncopy = function () {
    iziToast.info({
        timeout: 3000,
        icon: 'fa fa-copy fa-fw',
        closeOnEscape: 'true',
        transitionIn: 'bounceInLeft',
        transitionOut: 'fadeOutRight',
        displayMode: 'replace',
        layout: '2',
        position: 'topRight',
        backgroundColor: '#FFFFFF',
        title: '复制成功',
        message: '请遵守 CC BY-NC-SA 4.0 协议'
    });
}

// 屏蔽右键
document.oncontextmenu = function () {
    iziToast.info({
        timeout: 2000,
        iconUrl: '../img/warn.png',
        closeOnEscape: 'true',
        transitionIn: 'bounceInLeft',
        transitionOut: 'fadeOutRight',
        displayMode: 'replace',
        layout: '2',
        position: 'topRight',
        backgroundColor: '#F56C6C',
        message: '本站禁用右键'
    });
    return false;
}

// 屏蔽 F12
document.onkeydown = function (event) {
    if (window.event && window.event.keyCode === 123) {
        event.keyCode = 0;
        event.returnValue = false;
        iziToast.info({
            timeout: 2000,
            iconUrl: '../img/warn.png',
            closeOnEscape: 'true',
            transitionIn: 'bounceInLeft',
            transitionOut: 'fadeOutRight',
            displayMode: 'replace',
            layout: '2',
            position: 'topRight',
            backgroundColor: '#F56C6C',
            message: '本站禁用 F12'
        });
    return false;
    }
}

// 控制台输出
if (window.console) {
    var cons = console;
    if (cons) {
        console.log('%c欢迎来到本站 代码开源 请勿滥用',
        'color:#fff; background: #5e72e4;font-size: 12px;border-radius:5px;padding:3px 10px 3px 10px;');
        console.log('%c本站主页基于無名大佬的源码搭建',
        'color:#fff; background: #5e72e4;font-size: 12px;border-radius:5px;padding:3px 10px 3px 10px;');
        console.log('%c本站遵守 CC BY-NC-SA 4.0 协议',
        'font-size: 12px;border-radius:5px;padding:3px 10px 3px 10px;border:1px solid #5e72e4;');
    }
}