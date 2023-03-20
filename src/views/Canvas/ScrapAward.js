class ScrapAward {
  constructor(userOption) {
      this.option = {
          canvasId: 'canvas', // canvas的id
          backgroundImageUrl: '', // 背景图url
          width: 320, // canvas宽度
          height: 160, // canvas高度
          backgroundSize: '100% 100%',
          coverImage: { // 覆盖图层背景图url 如果没有就默认颜色
              url: '',
              width: 320,
              height: 160,
          },
          callback: () => {}, // 刮奖完成的回调函数
      };
    this.ctx = null;
    this.init(userOption); // 初始化
  }
  // 初始化方法
  init(userOption) {
    // 合并用户配置
    if (Object.assign) {
      Object.assign(this.option, userOption);
      console.log( Object.assign(this.option, userOption))
    } else {
        extend(this.option, userOption, true);
    }
    console.log(this)
    // 定义一系列变量
    let that = this,
        img = (this.img = new Image()), // 背景图片
        imgLoaded = false, //背景图是否加载完成
        canvas = (this.canvas = document.querySelector(`#${this.option.canvasId}`)),
        hastouch = 'ontouchstart' in window ? true : false,
        tapstart = hastouch ? 'touchstart' : 'mousedown',
        tapmove = hastouch ? 'touchmove' : 'mousemove',
        tapend = hastouch ? 'touchend' : 'mouseup',
        coverImg = (this.coverImg = new Image()),
        hasDone = false, // 是否刮奖完毕
      coverImgLoad = false;
    
    that.mousedown = false; //鼠标的mousedown事件或者touchmove事件是否开启


    // 移除事件监听，用于重新开始
    if (this.canvas) {
        this.canvas.removeEventListener(tapstart, eventDown);
        this.canvas.removeEventListener(tapend, eventUp);
        this.canvas.removeEventListener(tapmove, eventMove);
    }
    
    coverImg.src = this.option.coverImage.url;
    coverImg.crossOrigin = 'Anonymous'; // 解决一些跨域问题

    img.src = this.option.backgroundImageUrl;

    var w = (img.width = this.option.width),
        h = (img.height = this.option.height);
    this.canvasOffsetX = canvas.offsetLeft;
    this.canvasOffsetY = canvas.offsetTop;
    // canvas 宽高
    canvas.width = w;
    canvas.height = h;
   // 获取上下文
    this.ctx = canvas.getContext('2d');
    let ctx = this.ctx;
    this.img.addEventListener('load', backgroundImageLoaded);
    this.option.coverImage.url && this.coverImg.addEventListener('load', coverImageLoaded);

    // 背景图片加载完成后
    function backgroundImageLoaded(e) {
      imgLoaded = true;
        fillCanvas();
        canvas.style.background = 'url(' + img.src + ') no-repeat';
        canvas.style.backgroundSize = that.option.backgroundSize || 'contain';
    }
    // 覆蓋图片加载完成后
    function coverImageLoaded(e) {
        coverImgLoad = true;
        fillCanvas();
        canvas.style.background = 'url(' + img.src + ') no-repeat';
        canvas.style.backgroundSize = that.option.backgroundSize || 'contain';
    }

    // 绘制canvas
    function fillCanvas() {
      if (that.option.coverImage.url && (!imgLoaded || !coverImgLoad)) return;
      if (!that.option.coverImage.url) {
            ctx.fillStyle = that.option.coverImage.color || 'gray';
            ctx.fillRect(0, 0, w, h);
      } else {
            ctx.drawImage(coverImg, 0, 0, that.option.coverImage.width, that.option.coverImage.height);
      }
        ctx.globalCompositeOperation = 'destination-out';
        canvas.addEventListener(tapstart, eventDown);
        canvas.addEventListener(tapend, eventUp);
        canvas.addEventListener(tapmove, eventMove);
    }
    // 点击开始事件
    function eventDown(e) {
        e.preventDefault();
      that.mousedown = true;
      console.log(1231231)
    }
    // 点击结束事件
    function eventUp(e) {
        e.preventDefault();
        that.mousedown = false;
    }
    // 刮奖事件
    function eventMove(e) {
        if (hasDone) return; // 刮奖结束则return
        let ctx = that.ctx;
        e.preventDefault();
      if (that.mousedown) {
            if (e.changedTouches) {
                e = e.changedTouches[0];
            }
            ctx.beginPath();
            ctx.arc(e.offsetX, e.offsetY, 20, 0, Math.PI * 2);
            ctx.fill();
        }
        handleFilledPercentage(getFilledPercentage());
    }
    function getFilledPercentage() {
      let imgData = that.ctx.getImageData(0, 0, w, h);
      // imgData.data是个数组，存储着指定区域每个像素点的信息，数组中4个元素表示一个像素点的rgba值
      let pixels = imgData.data;
      let transPixels = [];
      for (let i = 0; i < pixels.length; i += 4) {
          // 严格上来说，判断像素点是否透明需要判断该像素点的a值是否等于0，
          // 为了提高计算效率，这儿设置当a值小于128，也就是半透明状态时就可以了
          if (pixels[i + 3] < 128) {
              transPixels.push(pixels[i + 3]);
          }
      }
      return ((transPixels.length / (pixels.length / 4)) * 100).toFixed(2) + '%';
  }
  // 设置阈值，去除灰色涂层
  function handleFilledPercentage(percentage) {
      percentage = percentage || 0;
      if (parseInt(percentage) > 50) {
          // 当像素点的个数超过  50% 时，清空画布，显示底图
          ctx.clearRect(0, 0, w, h);
          hasDone = true;
          that.option.callback();
      }
  }

}
  // 重新开始也是一次初始化
  restart(userOption) {
      if (userOption) {
          this.init(userOption);
      } else {
          this.init({});
      }
  }
}

export default ScrapAward