import * as echarts from "echarts";
const option = {
   xAxis: {
     type: 'category', 
     data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
     axisTick:{
      alignWithLabel:true
     },
     // 网格线
     splitLine: {
       show: true,
       lineStyle: {
         color:"#525252"
       }
     }
  },
  legend: {
    bottom: 5,
    left:30,
    data: [{
      name: 'Toys',
      color:"#8A8A8A"
    }, {
      name: 'Animal Care Products',
      color:"#8A8A8A"
    }
    ]
  },
   // 让图表占满容器
   grid: { 
    top:"10px",
    left:"30px",
    right:"4px",
    bottom:"50px"
  },
   yAxis: {
     type: 'value',
     splitLine: {
      show: true,    
      lineStyle: {
        color:"#525252"
      }
    }
   },
  series: [{
     name:"Toys",
     symbol: 'none',
    data: [820, 380, 901, 934, 1290, 1330, 1320, 600, 600, 511, 323, 987],
    type: 'line', smooth: true, itemStyle: {
     color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{ offset: 1, color: '#845ED7' }, {
          offset: 0, color: '#6B8AEB'
      }])
     },
     lineStyle: { width: 5 }
   },
    {
    name:'Animal Care Products',
    symbol: 'none', data: [100, 200, 300, 500, 1200, 300, 222,800,390,450,222,333], type: 'line', smooth: true,
    itemStyle: { color: '#73FFCC', }, lineStyle: { type: "dotted", width: 3 }
     },
   ]
 }
export default option