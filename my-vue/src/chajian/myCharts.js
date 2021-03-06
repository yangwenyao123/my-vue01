import echarts from 'echarts'
import '../../node_modules/echarts/map/js/china.js' // 引入中国地图数据 




const install = function (Vue) {

  Object.defineProperties(Vue.prototype, {
    $chart: {
      get() {
        return {
          line1(id) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();
           
            const optionData = {

              color: ['#30ceff', '#fa7937','#65c48a'],
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                orient: 'horizontal',
                left: 'center',
                x: 'center',
                data: ['男', '女','未知']
              },

              label: {
                normal: {
                  position: 'inner'
                }
              },

              series: [
                {
                  name: '访问来源',
                  type: 'pie',
                  radius: '66%',
                  center: ['50%', '60%','30%'],
                  data: [
                    { value: 200, name: '男' },
                    { value: 310, name: '女' },
                    { value: 200, name: '未知'}

                  ],
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  },
                  label: {
                    normal: {
                      show: false,
                      position: 'center'
                    },
                  }
                }
              ]
            };
            this.chart.setOption(optionData);
          },

          line2(id) {
          
            this.chart = echarts.init(document.getElementById(id));
            
            window.onresize = this.chart.resize;
           
              // this.chart.clear()
            var data = [
              {
                name: '江苏省',
                value: 5.3

              },
              {
                name: '北京市',
                value: 3.8
              },
              {
                name: '上海',
                value: 4.6
              },
              {
                name: '重庆',
                value: 3.6
              },
              {
                name: '河北',
                value: 3.4
              },
              {
                name: '河南',
                value: 3.2
              },
              {
                name: '云南',
                value: 1.6
              },
              {
                name: '辽宁',
                value: 4.3
              },
              {
                name: '黑龙江',
                value: 4.1
              },
              {
                name: '湖南',
                value: 2.4
              },
              {
                name: '安徽',
                value: 3.3
              },
              {
                name: '山东',
                value: 3.0
              },
              {
                name: '新疆',
                value: 1
              },
              {
                name: '江苏',
                value: 3.9
              },
              {
                name: '浙江',
                value: 3.5
              },
              {
                name: '江西',
                value: 2.0
              },
              {
                name: '湖北',
                value: 2.1
              },
              {
                name: '广西',
                value: 3.0
              },
              {
                name: '甘肃',
                value: 1.2
              },
              {
                name: '山西',
                value: 3.2
              },
              {
                name: '内蒙古',
                value: 3.5
              },
              {
                name: '陕西',
                value: 2.5
              },
              {
                name: '吉林',
                value: 4.5
              },
              {
                name: '福建',
                value: 2.8
              },
              {
                name: '贵州',
                value: 1.8
              },
              {
                name: '广东',
                value: 3.7
              },
              {
                name: '青海',
                value: 0.6
              },
              {
                name: '西藏',
                value: 0.4
              },
              {
                name: '四川',
                value: 3.3
              },
              {
                name: '宁夏',
                value: 0.8
              },
              {
                name: '海南',
                value: 1.9
              },
              {
                name: '台湾',
                value: 0.1
              },
              {
                name: '香港',
                value: 0.1
              },
              {
                name: '澳门',
                value: 0.1
              }
            ];
            var yData = [];
            var barData = [];
            // for (var i = 0; i < 5; i++) {
            //   barData.push(data[i]);
            //   yData.push(i + data[i].name);
            // }
            let mapOption = {
              tooltip: {
                show: true,
                formatter: function (params) {
                  return params.name + "：" + params.data["value"] + "%";
                }
              },

              visualMap: {
                type: 'continuous',
                orient: 'horizontal',
                itemWidth: 8,
                itemHeight: 50,
                text: ['高', '低'],
                showLabel: true,
                seriesIndex: [0],
                min: 0,
                max: 2,
                inRange: {
                  color: ['#ccc', '#ccc', '#ccc']
                },
                textStyle: {
                  color: '#7B93A7'
                },
                bottom: 20,
                left: '10%',
              },
              grid: {
                right: 0,
                top: 50,
                // bottom: 100,
                width: 80,
                height: 80
              },
              xAxis: {
                show: false
              },
              yAxis: {
                type: "category",
                inverse: true,
                nameGap: 12,
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: "#000"
                  }
                },
                axisTick: {
                  show: false,
                  lineStyle: {
                    color: "#ddd"
                  }
                },
                axisLabel: {
                  interval: 0,
                  margin: 50,
                  textStyle: {
                    color: "#455A74",
                    align: "left",
                    fontSize: 8
                  },
                  rich: {
                    a: {
                      color: "#fff",
                      backgroundColor: "#FAAA39",
                      width: 10,
                      height: 10,
                      align: "center",
                      borderRadius: 2,
                      fontSize: 8
                    },
                    b: {
                      color: "#fff",
                      backgroundColor: "#4197FD",
                      width: 10,
                      height: 10,
                      align: "center",
                      borderRadius: 2,
                      fontSize: 8
                    }
                  },
                  formatter: function (params) {
                    if (parseInt(params.slice(0, 1)) < 3) {
                      return [
                        "{a|" +
                        (parseInt(params.slice(0, 1)) + 1) +
                        "}" +
                        "  " +
                        params.slice(1)
                      ].join("\n");
                    } else {
                      return [
                        "{b|" +
                        (parseInt(params.slice(0, 1)) + 1) +
                        "}" +
                        "  " +
                        params.slice(1)
                      ].join("\n");
                    }
                  }
                },
                data: yData
              },
              geo: {
                // roam: true,
                map: "china",
                // left: "left",
                // right: "500",
                layoutCenter: ["50%", "50%"],
                layoutSize: "100%",
                label: {
                  emphasis: {
                    show: false
                  }
                },
                itemStyle: {
                  emphasis: {
                    areaColor: "#ff9900"
                  }
                }
              },
              series: [
                {
                  name: "mapSer",
                  type: "map",
                  // zoom: 6,
                  roam: false,
                  geoIndex: 0,
                  label: {
                    show: false
                  },
                  data: data
                },
                {
                  name: "barSer",
                  type: "bar",
                  roam: false,
                  visualMap: false,
                  zlevel: 2,
                  barMaxWidth: 6,
                  barGap: 0,
                  itemStyle: {
                    normal: {
                      color: function (params) {
                        // build a color map as your need.
                        var colorList = [
                          {
                            colorStops: [
                              {
                                offset: 0,
                                color: "#FFD119" // 0% 处的颜色
                              },
                              {
                                offset: 1,
                                color: "#FFAC4C" // 100% 处的颜色
                              }
                            ]
                          },
                          {
                            colorStops: [
                              {
                                offset: 0,
                                color: "#00C0FA" // 0% 处的颜色
                              },
                              {
                                offset: 1,
                                color: "#2F95FA" // 100% 处的颜色
                              }
                            ]
                          }
                        ];
                        if (params.dataIndex < 3) {
                          return colorList[0];
                        } else {
                          return colorList[1];
                        }
                      },
                      barBorderRadius: 15
                    }
                  },
                  data: barData
                }
              ]
            };

            this.chart.setOption(mapOption);
          },
   
          line4(id) {

            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();
            var data = [70, 34, 60, 70, 34, 60, 78, 69, 78, 69,90];
            var titlename = ['扫码关注', '名片转发', '工作交接', '小程序搜索', '公众号跳转', '小程序转发', '商品分享', '拼团分享', '砍价分享', '秒杀分享','折扣分享'];
            var myColor = ['#1089E7', '#F57474', '#56D0E3', '#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6', '#F8B448', '#8B78F6','#ff9900'];
           let ranking = {
                backgroundColor: '#fff',
             
                //图标位置
                grid: {
                    top: '0',
                    left: '25%',
                    height:'300',
                    lineHeight:20
                },
                xAxis: {
                    show: false
                },
                yAxis: [{
                    show: true,
                    data: titlename,
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                 
                }],
                series: [{
                        name: '条',
                        type: 'bar',
                        yAxisIndex: 0,  
                        data: data,
                        barWidth: 10,
                        
                        label: {
                            normal: {
                            
                                show: true,
                                position: 'right',
                                textStyle: {
                                    color: '#333',
                                    fontSize: '12',
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 20,
                              
                                barHeight:20,
                                color: function(params) {
                                    var num = myColor.length;
                                    return myColor[params.dataIndex % num]
                                },
                              
                                
                            }
                        },
                        
                    },
                ]
            };
            this.chart.setOption(ranking);
          },//
          line5(id) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();
            let traoption  = {
              backgroundColor: '#fff',
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                      type: 'shadow'
                  }
              },
              
              /*legend: {
                  data: ['区域销量'],
                  align: 'left',
                  top: 10,
                  right: 10,
                  textStyle: {
                      color: "#333"
                  },
                  itemWidth: 10,
                  itemHeight: 10,
                  itemGap: 35
              },*/
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis: [{
                  type: 'category',
                  
                  data: ['已发送',
                      '已领取',
                      '已使用',
             
                  ],
                  axisLine: {
                      show: true,
                      
                      lineStyle: {
                          color: "#999",
                          width: 1,
                          type: "solid"
                      }
                  },
                  axisTick: {
                      show: false,
                  },
                  axisLabel: {
                      show: true,
                      rotate:45,
                      textStyle: {
                          color: "#333",
                      }
                  },
              }],
              yAxis: [{
                  type: 'value',
                  axisLabel: {
                      formatter: '{value} '
                  },
                  axisTick: {
                      show: false,
                  },
                  axisLine: {
                      show: false,
                      lineStyle: {
                          color: "#333",
                          width: 1,
                          type: "solid"
                      },
                  },
                  splitLine: {
                      lineStyle: {
                          color: "#063374",
                      }
                  }
              }],
              dataZoom: [{
                  type: 'inside',
                  start: 0,
                  end: 100
              },],
              series: [{
                  name: '区域销量',
                  type: 'bar',
                  label: {
                                  normal: {
                                      show: true,
                                      position: 'top',
                                      formatter: '{c}',
                                      textStyle: {
                                          color: '#333'
                                      }
                                  }
                              },
                  data: [20, 50, 80, 58, 83, 68, 57,20, 50, 80, 58, 83, 68, 57,20, 50, 80, 58, 83, 68,89],
                  barWidth: '40%', //柱子宽度
                  barGap: 0, //柱子之间间距
                  itemStyle: {
                      normal: {
                          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0,
                              color: '#7aee8e'
                          }, {
                              offset: 1,
                              color: '#43ce5b'
                          }]),
                          opacity: 1,
                      }
                  }
              }, ]
          };
         

            this.chart.setOption(traoption);
          },

          
          line6(id) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();
            const { random, PI, cos, sin } = Math;

            // 随机生成占比数据
            const val = random() * 100;


            // 圆心角的一半
            const angle = PI * val / 50 / 2;
            // 渐变起点
            const pointStart = [
              0.5 - 0.5 * cos(angle) * sin(angle),
              0.5 + 0.5 * cos(angle) * cos(angle)
            ];
            // 渐变终点
            const pointEnd = [
              0.5 - 0.5 * sin(angle),
              0.5 + 0.5 * cos(angle)
            ];


            let usageOption = {

              series: [{
                name: '占比',
                type: 'pie',
                startAngle: 270, // 环图起始位置：正下发
                radius: ['60%', '54%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: true,
                    position: 'center',
                    formatter: ({ data }) => `${data.value.toFixed(2)}%`
                  },
                  emphasis: {
                    show: true
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: [{
                  name: '满足率',
                  value: val,
                  label: {
                    normal: {
                      fontSize: 8,
                      color: '#585F6E',
                      fontWeight: 'bolder'
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: {
                        type: 'linear',
                        x: pointStart[0],
                        y: pointStart[1],
                        x2: pointEnd[0],
                        y2: pointEnd[1],
                        colorStops: [
                          // !! 在此添加渐变过程色 !!
                          { offset: 0, color: '#24BCF9' },
                          { offset: 1, color: '#1ADAE9' }
                        ]
                      },
                      shadowColor: 'rgba(34,192,245,0.8)',
                      shadowBlur: 10
                    }
                  }
                }, {
                  name: '未满足率',
                  value: 100 - val,
                  label: {
                    normal: {
                      show: false,
                      fontSize: 0
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: '#f0f0f0'
                    },
                    emphasis: {
                      color: '#f0f0f0'
                    }
                  },
                  hoverAnimation: false
                }]
              }]
            }
            this.chart.setOption(usageOption);
          },
          line6_2(id) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();
            const { random, PI, cos, sin } = Math;

            // 随机生成占比数据
            const val = random() * 100;


            // 圆心角的一半
            const angle = PI * val / 50 / 2;
            // 渐变起点
            const pointStart = [
              0.5 - 0.5 * cos(angle) * sin(angle),
              0.5 + 0.5 * cos(angle) * cos(angle)
            ];
            // 渐变终点
            const pointEnd = [
              0.5 - 0.5 * sin(angle),
              0.5 + 0.5 * cos(angle)
            ];


            let usageOption = {

              series: [{
                name: '占比',
                type: 'pie',
                startAngle: 270, // 环图起始位置：正下发
                radius: ['60%', '54%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: true,
                    position: 'center',
                    formatter: ({ data }) => `${data.value.toFixed(2)}%`
                  },
                  emphasis: {
                    show: true
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: [{
                  name: '满足率',
                  value: val,
                  label: {
                    normal: {
                      fontSize: 8,
                      color: '#585F6E',
                      fontWeight: 'bolder'
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: {
                        type: 'linear',
                        x: pointStart[0],
                        y: pointStart[1],
                        x2: pointEnd[0],
                        y2: pointEnd[1],
                        colorStops: [
                          // !! 在此添加渐变过程色 !!
                          { offset: 0, color: '#24BCF9' },
                          { offset: 1, color: '#1ADAE9' }
                        ]
                      },
                      shadowColor: 'rgba(34,192,245,0.8)',
                      shadowBlur: 10
                    }
                  }
                }, {
                  name: '未满足率',
                  value: 100 - val,
                  label: {
                    normal: {
                      show: false,
                      fontSize: 0
                    }
                  },
                  itemStyle: {
                    normal: {
                      color: '#f0f0f0'
                    },
                    emphasis: {
                      color: '#f0f0f0'
                    }
                  },
                  hoverAnimation: false
                }]
              }]
            }
            this.chart.setOption(usageOption);
          },
          line7(id) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();
            let dasOption = {
              backgroundColor: ['#fff'],
              grid: {
                top: 10,
              },
              series: [{
                type: 'gauge',
                startAngle: 180,
                endAngle: 0,
                radius: '100%',
                center: ['50%', '80%'],
                axisTick: {
                  show: false,
                },
                splitLine: {
                  show: false,
                },
                axisLabel: {
                  color: '#666',
                  show: true,
                  padding: [20, 0, 0, 0],
                  fontSize: 12,
                  distance: -30,
                  formatter(value) {
                    if (value === 0 || value === 100) {
                      return value;
                    }
                  }
                },
                detail: {
                  offsetCenter: [0, -5],
                  textStyle: {
                    fontSize: 12,
                    fontWeight: '',
                    color: '#333'
                  },
                  formatter: function (value) {
                    console.log(value);
                    return value + 'tian';
                  }
                },
                pointer: {
                  show: false
                },
                itemStyle: {
                  normal: {
                    color: "#323232",
                  }
                },
                min: 0,
                max: 100,
                axisLine: {
                  lineStyle: {
                    width: 10,
                    color: [
                      [0.8, '#323232'],
                      [1, '#edeeef']
                    ]
                  }
                },
                data: [{
                  name: '111',
                  value: 99
                }]
              }]
            }
            this.chart.setOption(dasOption);
          },
          line8(id) {
           
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();

            const optionData = {

              color: ['#273b95', '#f30a0a','#ff9900'],
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                orient: 'horizontal',
                left: 'left',
                x: 'left',
                data: ['对我感兴趣', '对产品感兴趣','对公司感兴趣']
              },

              label: {
                normal: {
                  position: 'inner'
                }
              },

              series: [
                {
                  name: '访问来源',
                  type: 'pie',
                  radius: '70%',
                  center: ['50%', '60%'],
                  
                  data: [
                    { value: 335, name: '对我感兴趣' },
                    { value: 310, name: '对产品感兴趣' },
                    { value: 200, name: '对公司感兴趣' }

                  ],
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)',
                      
                    }
                  },
                  label: {
                    normal: {
                      show: false,
                      position: 'center',
                      
                    },
                  }
                }
              ]
            };
            this.chart.setOption(optionData);
             
          },//
        }
      }
    }
  })


}

export default {
  install
}