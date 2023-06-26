
class CanvasApp {
  constructor(props) {
    this.canvas = document.getElementById('myCanvas')
    this.ctx = this.canvas.getContext('2d')
    this.points = []
    this.regions = []
    this.arrows=[]
    this.img = props.src
    this.img.crossOrigin = 'anonymous'
    this.isDrawingArrow = false
    this.isMouseDown = false
    this.startX, this.startY, this.currentX, this.currentY
    this.arrowColor='skyblue'
    this.lineColor='skyblue'
    this.lineWidth=props.lineWidth
    this.img.onload = this.initializeCanvas.bind(this)
    this.canvas.addEventListener('click', this.handleCanvasClick.bind(this))
    this.canvas.addEventListener('mousemove', this.handleCanvasMouseMove.bind(this))
    this.canvas.addEventListener('mousedown', this.handleCanvasMouseDown.bind(this))
    this.canvas.addEventListener('mouseup', this.handleCanvasMouseUp.bind(this))
    document.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  initializeCanvas() {
    this.canvas.width = this.img.width
    this.canvas.height = this.img.height-80
    this.ctx.drawImage(this.img, 0, 0)
    this.img.style.display = 'none'
  }
  handleCanvasMouseDown(event) {
    if (this.isDrawingArrow) {
      this.startX = event.clientX - this.canvas.offsetLeft
      this.startY = event.clientY - this.canvas.offsetTop
      this.isMouseDown = true
      this.arrows.push({ startX: this.startX, startY: this.startY, endX: this.startX, endY: this.startY });
      console.log(this.arrows)
    }
    if(true){

    }
  }
  handleCanvasClick(event) {
    const rect = this.canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    if (this.isDrawingArrow) {
    } else {
      this.points.push({ x, y })
      this.renderPoint(x, y)
      if(this.points.length==2){

      }
      // this.renderLine()

    }
  }
  handleCanvasMouseUp(event) {
    if (this.isMouseDown) {
      this.isMouseDown = false
      this.currentX = event.clientX - this.canvas.offsetLeft
      this.currentY = event.clientY - this.canvas.offsetTop
      this.drawArrowLine(this.startX, this.startY, this.currentX, this.currentY)
      const distance = this.calculateDistance(this.startX, this.startY, this.currentX, this.currentY);
      if (distance < 10) {
        alert('请重新画线，距离太短！');
        this.arrows.pop()
        this.redrawCanvas()
        // this.renderBackgroundImage()
        // this.drawArrowLine()
      } else {
      }
    }
  }
  handleCanvasMouseMove(event) {
    if (this.isDrawingArrow) {
      if (this.isMouseDown) {
        let index = this.arrows.length - 1;
        this.arrows[index].endX = event.clientX - this.canvas.offsetLeft;
        this.arrows[index].endY = event.clientY - this.canvas.offsetTop;
        console.log(this.arrows)
        this.redrawCanvas()
        // this.currentX = event.clientX - this.canvas.offsetLeft
        // this.currentY = event.clientY - this.canvas.offsetTop
        // this.drawArrowLine(this.startX, this.startY, this.currentX, this.currentY)
      }
    } else {
      // this.clearCanvas()
      this.redrawCanvas()
      this.renderAllRegions()
      // this.renderBackgroundImage()
      if (this.points.length > 0) {
        const rect = this.canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const startPoint = this.points[this.points.length - 1]
        this.renderRay(startPoint.x, startPoint.y, x, y)
        this.renderPointsAndLines()
      }
    }
  }
  redrawCanvas(){
    this.clearCanvas()
    this.renderBackgroundImage()
    for (var i = 0; i < this.arrows.length; i++) {
      let line = this.arrows[i];
      this.drawArrowLine(line.startX, line.startY, line.endX, line.endY);
    }
  }
  // 画箭头
  drawArrowLine(startX, startY, endX, endY) {
    // this.clearCanvas()
    // this.renderBackgroundImage()
    this.renderAllRegions()
    this.ctx.beginPath()
    this.ctx.moveTo(startX, startY)
    this.ctx.lineTo(endX, endY)
    this.ctx.strokeStyle = this.arrowColor;
    this.ctx.lineWidth = this.lineWidth
    this.ctx.stroke()
    // 绘制箭头
    let angle = Math.atan2(endY - startY, endX - startX)
    let arrowSize = 10
    this.ctx.beginPath()
    this.ctx.moveTo(endX, endY)
    this.ctx.lineTo(endX - arrowSize * Math.cos(angle - Math.PI / 6), endY - arrowSize * Math.sin(angle - Math.PI / 6))
    this.ctx.moveTo(endX, endY)
    this.ctx.lineTo(endX - arrowSize * Math.cos(angle + Math.PI / 6), endY - arrowSize * Math.sin(angle + Math.PI / 6))
    this.ctx.stroke()
  }
  calculateDistance(startx,starty,endx,endy) {
    const dx = endx - startx;
    const dy = endy - starty;
    return Math.sqrt(dx * dx + dy * dy);
  }
  handleKeyDown(event) {
    if (event.key === 'Enter' && this.points.length >= 3) {
      this.regions.push(this.points)
      // this.clearCanvas()
      // this.drawArrowLine()
      this.redrawCanvas()
      // this.renderBackgroundImage()
      this.renderAllRegions()
      this.points = []
    }
  }
  // 切换箭头
  DrawingArrow(color) {
    this.isDrawingArrow = true
    this.arrowColor=color
  }
  // 切换线段
  lineSegment(color){
    this.isDrawingArrow = false
    this.lineColor=color
  }
  renderAllRegions() {
    for (const region of this.regions) {
      this.renderRegion(region);
    }
  }
  renderRegion(points) {
    this.ctx.beginPath()
    const startPoint = points[0]
    this.ctx.moveTo(startPoint.x, startPoint.y)
    for (let i = 1; i < points.length; i++) {
      const point = points[i]
      this.ctx.lineTo(point.x, point.y)
    }
    this.ctx.closePath()
    this.ctx.fillStyle = 'rgba(135, 206, 235, 0.3)'
    this.ctx.strokeStyle = 'rgba(135, 206, 235, 0.8)'
    this.ctx.lineWidth = this.lineWidth
    this.ctx.fill()
    this.ctx.stroke()
  }
  deleRoi() {
    this.clearCanvas()
    this.renderBackgroundImage()
    this.points = []
    this.regions=[]
    this.arrows=[]
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  renderBackgroundImage() {
    this.ctx.drawImage(this.img, 0, 0)
  }
  // 这个修改圆点样式
  renderPoint(x, y) {
    this.ctx.beginPath()
    this.ctx.arc(x, y, 3, 0, 2 * Math.PI)
    this.ctx.fillStyle = this.lineColor
    this.ctx.fill()
    this.ctx.stroke()
  }
  // 
  renderLine() {
    if (this.points.length > 1) {
      const startPoint = this.points[this.points.length - 2]
      const endPoint = this.points[this.points.length - 1]
      this.ctx.beginPath()
      this.ctx.moveTo(startPoint.x, startPoint.y)
      this.ctx.lineTo(endPoint.x, endPoint.y)
      this.ctx.strokeStyle = this.lineColor
      this.ctx.lineWidth = this.lineWidth
      this.ctx.stroke()
    }
  }
  renderRay(startX, startY, endX, endY) {
    this.ctx.beginPath()
    this.ctx.moveTo(startX, startY)
    this.ctx.lineTo(endX, endY)
    this.ctx.strokeStyle = this.lineColor
    this.ctx.lineWidth = this.lineWidth
    this.ctx.stroke()
  }
  renderPointsAndLines() {
    for (let i = 0; i < this.points.length; i++) {
      const point = this.points[i]
      this.renderPoint(point.x, point.y)
      if (i < this.points.length - 1) {
        const nextPoint = this.points[i + 1]
        this.ctx.beginPath()
        this.ctx.moveTo(point.x, point.y)
        this.ctx.lineTo(nextPoint.x, nextPoint.y)
        this.ctx.strokeStyle = this.lineColor
        this.ctx.lineWidth = this.lineWidth
        this.ctx.stroke()
      }
    }
  }
  renderEnclosedArea() {
    if (this.points.length >= 3) {
      this.ctx.beginPath()
      const startPoint = this.points[0]
      this.ctx.moveTo(startPoint.x, startPoint.y)
      for (let i = 1; i < this.points.length; i++) {
        const point = this.points[i]
        this.ctx.lineTo(point.x, point.y)
      }
      this.ctx.closePath()
      this.ctx.fillStyle = 'rgba(135, 206, 235, 0.3)'
      this.ctx.strokeStyle = 'rgba(135, 206, 235, 0.8)'
      this.ctx.lineWidth = this.lineWidth
      this.ctx.fill()
      this.ctx.stroke()
    }
  }
  // 撤销 区域 
  deleteSelectedRegion() {
    if (this.regions.length > 0) {
      this.regions.pop(); // 移除最后一个区域
      this.clearCanvas();
      this.renderBackgroundImage();
      this.renderAllRegions();
      this.renderPointsAndLines();
    }
  }
  // 删除第几个 区域
  deleteSelectedRegions(index){
    console.log( index)
    if(this.regions.length>0){
      this.regions.splice(index-1,1)
      this.clearCanvas();
      this.renderBackgroundImage();
      this.renderAllRegions();
      this.renderPointsAndLines();
    }
  }
  // 撤销箭头线
  deleteSelectedArrow(){
    if(this.arrows.length>0){
      this.arrows.pop()
      this.redrawCanvas()
    }
  }
  // 删除箭头线
  deleteSelectedArrows(index){
    if(this.arrows.length>0){
      this.arrows.splice(index-1,1)
      this.redrawCanvas()
    }
  }
}
export default CanvasApp
